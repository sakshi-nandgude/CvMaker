from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.certification import (
    CertificationCreate,
    CertificationResponse,
)

from app.services.certification_service import (
    create_certification,
    get_certifications,
)

router = APIRouter(
    prefix="/certifications",
    tags=["Certifications"],
)


@router.get(
    "/",
    response_model=list[CertificationResponse],
)
def read_certifications(
    db: Session = Depends(get_db),
):
    return get_certifications(db)


@router.post(
    "/",
    response_model=CertificationResponse,
)
def add_certification(
    certification: CertificationCreate,
    db: Session = Depends(get_db),
):
    return create_certification(
        db=db,
        certification=certification,
    )