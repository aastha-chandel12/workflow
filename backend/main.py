from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import networkx as nx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class PipelineData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    if not pipeline.nodes:
        raise HTTPException(status_code=400, detail="Pipeline must contain at least one node.")
    
    G = nx.DiGraph()


    node_ids = [node.id for node in pipeline.nodes]
    G.add_nodes_from(node_ids)


    for edge in pipeline.edges:
        if edge.source not in node_ids or edge.target not in node_ids:
            raise HTTPException(status_code=400, detail=f"Edge {edge.source}->{edge.target} references unknown node(s).")
        G.add_edge(edge.source, edge.target)


    num_nodes = G.number_of_nodes()
    num_edges = G.number_of_edges()
    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
