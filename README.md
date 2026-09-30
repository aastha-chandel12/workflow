#  FastAPI Graph Builder

A simple FastAPI server that receives a graph (nodes and edges) as JSON input, builds it using NetworkX, and returns the resulting structure.

---

##  Features

- Accepts graph input via REST API (`/build-graph/`)
- Uses **FastAPI** for the backend
- Supports **CORS** for frontend integration
- Uses **NetworkX** to handle graph logic
- Includes Swagger and ReDoc documentation automatically

---

## Tech Stack

- Python 3.8+
- FastAPI
- Uvicorn (ASGI server)
- Pydantic
- NetworkX

---

