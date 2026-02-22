from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from app.database import init_db
from app.routes.chat import router as chat_router
import os

load_dotenv()

app = FastAPI(
    title="Adinath Pawar — Portfolio API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "http://localhost:5173")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    init_db()

app.include_router(chat_router, prefix="/api")

@app.get("/api/health")
async def health_check():
    return {
        "status": "ok",
        "message": "Portfolio API is running"
    }