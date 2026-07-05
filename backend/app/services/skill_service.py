from sqlalchemy.orm import Session

from app.models.skill import Skill
from app.schemas.skill import SkillCreate


def get_skills(db: Session):
    """
    Return all skills ordered alphabetically.
    """

    return (
        db.query(Skill)
        .order_by(Skill.category, Skill.name)
        .all()
    )


def create_skill(
    db: Session,
    skill: SkillCreate,
):
    """
    Save a new skill.
    """

    new_skill = Skill(
        category=skill.category,
        name=skill.name,
    )

    db.add(new_skill)
    db.commit()
    db.refresh(new_skill)

    return new_skill