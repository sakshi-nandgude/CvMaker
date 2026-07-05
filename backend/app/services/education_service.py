from sqlalchemy.orm import Session

from app.models.education import Education
from app.schemas.education import EducationCreate


def get_education(db: Session):
    """
    Return all education records.
    """

    return (
        db.query(Education)
        .order_by(Education.end_year.desc())
        .all()
    )


def create_education(
    db: Session,
    education: EducationCreate,
):
    """
    Save a new education record.
    """

    new_education = Education(
        degree=education.degree,
        university=education.university,
        location=education.location,
        start_year=education.start_year,
        end_year=education.end_year,
        grade=education.grade,
    )

    db.add(new_education)
    db.commit()
    db.refresh(new_education)

    return new_education