# Adinath Pawar — Portfolio + AI Chat

Personal portfolio website with AI-powered chat that answers questions about my resume.

## Tech Stack

- **Frontend:** React + TypeScript (Vite)
- **Backend:** Python + FastAPI
- **Database:** SQLite
- **AI:** OpenRouter (Mistral 7B)

## Project Structure

```
portfolio/
├── frontend/      # React + TypeScript
├── backend/       # FastAPI + Python
└── docs/          # Setup guides
```

## Setup

See individual README files in `/frontend` and `/backend` folders.

## Local Development

1. Start backend: `cd backend && uvicorn app.main:app --reload`
2. Start frontend: `cd frontend && npm run dev`