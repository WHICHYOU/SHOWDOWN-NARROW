# ✅ Use a secure, slim Python base image
FROM python:3.11.8-slim-bookworm

# ✅ Prevent .pyc files and ensure unbuffered output
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# ✅ Set working directory
WORKDIR /app

# ✅ Install dependencies separately to leverage Docker layer caching
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# ✅ Copy all application code
COPY . /app/

# ✅ Expose the application port
EXPOSE 8000

# ✅ Start FastAPI app using uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
