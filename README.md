# 🚀 FastAPI Graph Builder

A simple FastAPI server that receives a graph (nodes and edges) as JSON input, builds it using NetworkX, and returns the resulting structure.

---

## 📦 Features

- Accepts graph input via REST API (`/build-graph/`)
- Uses **FastAPI** for the backend
- Supports **CORS** for frontend integration
- Uses **NetworkX** to handle graph logic
- Includes Swagger and ReDoc documentation automatically

---

## 🧰 Tech Stack

- Python 3.8+
- FastAPI
- Uvicorn (ASGI server)
- Pydantic
- NetworkX

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

---

## 🌐 Frontend (React or other)

This frontend connects to the FastAPI backend and sends graph data to visualize or interact with it.

### 📁 Location

If your frontend is inside a subfolder like `frontend/`, navigate into it:

```bash
cd frontend


