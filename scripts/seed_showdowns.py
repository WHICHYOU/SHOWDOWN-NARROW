import requests
import uuid

# ✅ Replace with your actual running FastAPI backend URL
API_URL = "http://localhost:8000"

USER_ID = str(uuid.uuid4())  # Random dummy user

seed_data = [
    ("Mac", "Windows", "Tech"),
    ("Coffee", "Tea", "Beverages"),
    ("Pizza", "Burger", "Food"),
    ("Nike", "Adidas", "Fashion"),
    ("Cats", "Dogs", "Pets"),
    ("Beach", "Mountains", "Travel"),
    ("Marvel", "DC", "Entertainment"),
    ("Books", "Movies", "Lifestyle"),
    ("Spotify", "Apple Music", "Music"),
    ("Instagram", "TikTok", "Social Media")
]

for left, right, category in seed_data:
    response = requests.post(f"{API_URL}/showdowns", json={
        "left": left,
        "right": right,
        "category": category,
        "submitted_by": USER_ID
    })

    if response.ok:
        print(f"✅ Created showdown: {left} vs {right}")
    else:
        print(f"❌ Failed to create: {left} vs {right} — {response.status_code}: {response.text}")
