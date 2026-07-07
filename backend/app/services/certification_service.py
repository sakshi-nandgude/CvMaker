from sqlalchemy.orm import Session

from app.models.certification import Certification
from app.schemas.certification import CertificationCreate


def get_certifications(db: Session):
    return (
        db.query(Certification)
        .order_by(Certification.year.desc())
        .all()
    )


def create_certification(
    db: Session,
    certification: CertificationCreate,
):
    new_certification = Certification(
        name=certification.name,
        provider=certification.provider,
        year=certification.year,
    )

    db.add(new_certification)
    db.commit()
    db.refresh(new_certification)

    return new_certification