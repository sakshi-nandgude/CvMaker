from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.skill import (
    SkillCreate,
    SkillResponse,
)
from app.services.skill_service import (
    create_skill,
    get_skills,
)

router = APIRouter(
    prefix="/skills",
    tags=["Skills"],
)


@router.get(
    "/",
    response_model=list[SkillResponse],
)
def read_skills(
    db: Session = Depends(get_db),
):
    return get_skills(db)


@router.post(
    "/",
    response_model=SkillResponse,
)
def add_skill(
    skill: SkillCreate,
    db: Session = Depends(get_db),
):
    return create_skill(
        db=db,
        skill=skill,
    )