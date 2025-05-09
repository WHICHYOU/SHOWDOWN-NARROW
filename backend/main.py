from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional
from uuid import uuid4

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

SHOWDOWNS = []
VOTES: Dict[str, List[Dict]] = {}

class Showdown(BaseModel):
    left: str
    right: str
    category: Optional[str] = "General"
    submitted_by: str

class VoteTagUpdate(BaseModel):
    field: str
    tags: List[str]

@app.post("/showdowns")
def create_showdown(data: Showdown):
    showdown = {
        "id": str(uuid4()),
        "left": data.left,
        "right": data.right,
        "category": data.category,
        "submitted_by": data.submitted_by
    }
    SHOWDOWNS.append(showdown)
    return showdown

@app.get("/users/{user_id}/votes")
def get_votes(user_id: str):
    return VOTES.get(user_id, [])

@app.post("/votes/{vote_id}/tags")
def update_tags(vote_id: str, payload: VoteTagUpdate):
    for user_votes in VOTES.values():
        for v in user_votes:
            if v["showdown_id"] == vote_id:
                if payload.field == "winner":
                    v["tags_winner"] = payload.tags
                elif payload.field == "loser":
                    v["tags_loser"] = payload.tags
                return {"status": "ok"}
    raise HTTPException(status_code=404, detail="Vote not found")

@app.get("/match/{username}")
def get_matches(username: str):
    return [{"username": "alice", "match_score": 85}, {"username": "bob", "match_score": 73}]

@app.get("/compare/{a}/{b}")
def compare_users(a: str, b: str):
    return {
        "match_percentage": 68,
        "shared": ["Nike", "Coffee"],
        "different": ["Windows", "Marvel"]
    }