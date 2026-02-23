# Adinath Pawar — Portfolio + AI Chat

Personal portfolio website with AI-powered chat that answers questions about my resume.

🌐 **Live:** https://portfolio-brown-eight-78.vercel.app

## Tech Stack

- **Frontend:** React + TypeScript (Vite)
- **Backend:** Python + FastAPI
- **Database:** SQLite
- **AI:** OpenRouter (Google Gemma 3 27B)
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Render

## Features

- Responsive portfolio with animated sections
- GitHub repos auto-fetched and displayed
- AI chat widget powered by OpenRouter
- Chat history persisted in SQLite
- Resume-aware AI responses

## Project Structure
```
portfolio/
├── frontend/      # React + TypeScript (Vite)
├── backend/       # FastAPI + Python
└── docs/          # Setup guides
```

## Local Development

**Backend:**
```
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend:**
```
cd frontend
npm install
npm run dev
```

## Environment Variables

**Backend `.env`:**
```
OPENROUTER_API_KEY=your_key_here
DATABASE_URL=sqlite:///./portfolio.db
FRONTEND_URL=http://localhost:5173
```

**Frontend `.env`:**
```
VITE_API_BASE_URL=http://localhost:8000
```