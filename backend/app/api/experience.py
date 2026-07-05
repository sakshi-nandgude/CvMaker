from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.experience import (
    ExperienceCreate,
    ExperienceResponse,
)
from app.services.experience_service import (
    create_experience,
    get_experiences,
)

router = APIRouter(
    prefix="/experiences",
    tags=["Experiences"],
)


@router.get(
    "/",
    response_model=list[ExperienceResponse],
)
def read_experiences(
    db: Session = Depends(get_db),
):
    return get_experiences(db)


@router.post(
    "/",
    response_model=ExperienceResponse,
)
def add_experience(
    experience: ExperienceCreate,
    db: Session = Depends(get_db),
):
    return create_experience(
        db=db,
        experience=experience,
    )