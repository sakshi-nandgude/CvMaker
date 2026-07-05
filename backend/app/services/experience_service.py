from sqlalchemy.orm import Session

from app.models.experience import Experience
from app.schemas.experience import ExperienceCreate


def get_experiences(db: Session):
    """
    Return all experiences ordered by newest first.
    """

    return (
        db.query(Experience)
        .order_by(Experience.id.desc())
        .all()
    )


def create_experience(
    db: Session,
    experience: ExperienceCreate,
):
    """
    Save a new experience.
    """

    new_experience = Experience(
        company=experience.company,
        role=experience.role,
        location=experience.location,
        start_date=experience.start_date,
        end_date=experience.end_date,
    )

    db.add(new_experience)
    db.commit()
    db.refresh(new_experience)

    return new_experience