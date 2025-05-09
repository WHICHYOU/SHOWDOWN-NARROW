# 🚀 Environment & Deployment Guide

## Frontend (Vercel)

1. Push `frontend/` to GitHub
2. Connect repo on [vercel.com](https://vercel.com)
3. Set root directory to `frontend`

## Backend (Render)

1. Create new FastAPI service
2. Use `backend/` as root
3. Add build command:
   ```
   pip install -r requirements.txt
   uvicorn main:app --host 0.0.0.0 --port 10000
   ```
4. Set `PORT=10000` env var

## .env (optional)

```env
API_URL=https://your-backend.render.com
```

Update API URL in frontend to point to Render.
