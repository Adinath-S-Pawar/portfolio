import json
import os

def load_resume() -> dict:
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    resume_path = os.path.join(base_dir, "data", "resume.json")
    with open(resume_path, "r") as f:
        return json.load(f)