from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.resume_generation import (
    ResumeGenerationRequest,
)

from app.ai.resume_generator import (
    generate_resume,
)

router = APIRouter(
    prefix="/resume",
    tags=["Resume"],
)

@router.post("/generate")
def generate_resume_endpoint(
    request: ResumeGenerationRequest,
    db: Session = Depends(get_db),
):
    print(request)
    """
    Generate an AI tailored resume.
    """

    result = generate_resume(
        db=db,
        job_description=request.job_description,
    )

    return result