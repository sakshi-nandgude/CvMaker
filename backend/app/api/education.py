from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.education import (
    EducationCreate,
    EducationResponse,
)
from app.services.education_service import (
    create_education,
    get_education,
)

router = APIRouter(
    prefix="/education",
    tags=["Education"],
)


@router.get(
    "/",
    response_model=list[EducationResponse],
)
def read_education(
    db: Session = Depends(get_db),
):
    return get_education(db)


@router.post(
    "/",
    response_model=EducationResponse,
)
def add_education(
    education: EducationCreate,
    db: Session = Depends(get_db),
):
    return create_education(
        db=db,
        education=education,
    )