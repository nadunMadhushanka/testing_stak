from fastapi import FastAPI
from app.api.endpoints import router

app = FastAPI(title="AI enricher service")
app.include_router(router, prefix="/api/v1")