from fastapi import FastAPI

from app.database.base import Base
from app.database.database import engine
from app.models import *

app = FastAPI()

Base.metadata.create_all(bind=engine)


@app.get("/")
def root():
    return {
        "message": "CV Maker Backend Running"
    }