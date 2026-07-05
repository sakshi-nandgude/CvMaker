from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.base import Base
from app.database.database import engine
from app.models import *
from app.api.profile import router as profile_router
from app.api.experience import router as experience_router
from app.api.skill import router as skill_router
from app.api.education import router as education_router

app = FastAPI(
    title="CV Maker API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(profile_router)
app.include_router(experience_router)
app.include_router(skill_router)
app.include_router(education_router)

@app.get("/")
def root():
    return {
        "message": "CV Maker Backend Running"
    }