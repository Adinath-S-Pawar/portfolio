from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Optional
from app.database import get_db, ChatMessage, ChatSession
from app.services.ai import get_ai_response
from app.services.resume import load_resume
import uuid

router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    reply: str
    session_id: str

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest, db: Session = Depends(get_db)):
    try:
        session_id = str(request.session_id) if request.session_id else str(uuid.uuid4())

        session = db.query(ChatSession).filter(ChatSession.id == session_id).first()
        if not session:
            session = ChatSession(id=session_id)
            db.add(session)
            db.commit()

        history = db.query(ChatMessage).filter(
            ChatMessage.session_id == session_id
        ).order_by(ChatMessage.created_at).all()

        messages = [{"role": msg.role, "content": msg.content} for msg in history]
        messages.append({"role": "user", "content": request.message})

        resume = load_resume()
        reply = await get_ai_response(messages, resume)

        db.add(ChatMessage(id=str(uuid.uuid4()), session_id=session_id, role="user", content=request.message))
        db.add(ChatMessage(id=str(uuid.uuid4()), session_id=session_id, role="assistant", content=reply))
        db.commit()

        return ChatResponse(reply=reply, session_id=session_id)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))