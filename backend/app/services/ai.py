import httpx
import json
import os
from dotenv import load_dotenv

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "google/gemma-3-27b-it:free"

def build_system_prompt(resume: dict) -> str:
    return f"""You are an AI assistant representing Adinath Pawar, a software developer.
Answer questions about Adinath based strictly on the resume data provided below.
Be conversational, professional, and concise. If asked something not in the resume, politely say you don't have that information.

Resume Data:
{json.dumps(resume, indent=2)}"""

async def get_ai_response(messages: list, resume: dict) -> str:
    system_prompt = build_system_prompt(resume)

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": system_prompt},
            *messages
        ]
    }

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Adinath Pawar Portfolio"
    }

    import asyncio
    for attempt in range(3):
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(OPENROUTER_URL, json=payload, headers=headers)
            if response.status_code == 429:
                await asyncio.sleep(5 * (attempt + 1))
                continue
            response.raise_for_status()
            data = response.json()
            return data["choices"][0]["message"]["content"]
    
    raise Exception("Rate limit exceeded. Please wait a moment and try again.")
    system_prompt = build_system_prompt(resume)

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": system_prompt},
            *messages
        ]
    }

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Adinath Pawar Portfolio"
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.post(OPENROUTER_URL, json=payload, headers=headers)
        response.raise_for_status()
        data = response.json()
        return data["choices"][0]["message"]["content"]
    system_prompt = build_system_prompt(resume)

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": system_prompt},
            *messages
        ]
    }

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Adinath Pawar Portfolio"
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.post(OPENROUTER_URL, json=payload, headers=headers)
        print("STATUS:", response.status_code)
        print("RESPONSE:", response.text)
        response.raise_for_status()
        data = response.json()
        return data["choices"][0]["message"]["content"]