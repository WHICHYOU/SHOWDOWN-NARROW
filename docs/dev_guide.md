# 🧑‍💻 Developer Guide: Yoister

## Folder Structure

```
SHOWDOWN-NARROW/
├── backend/          # FastAPI API (votes, match, compare, etc.)
├── frontend/         # Next.js frontend with app router
├── scripts/          # Utilities like seeding showdowns
├── docs/             # This directory
```

## Key Commands

```bash
# Dev servers
npm run dev          # frontend
uvicorn main:app     # backend

# Push changes
git add .
git commit -m "feat: new feature"
git push origin main
```

## Coding Style

- Typescript + strict types
- Tailwind CSS + ShadCN primitives only
- One `page.tsx` per route under `app/`
- Use `use-toast()` for notifications
