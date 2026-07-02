"""
profile_service.py

Business logic for the Personal Profile.
"""

from sqlalchemy.orm import Session

from app.models.profile import PersonalProfile
from app.schemas.profile import PersonalProfileCreate


def get_profile(db: Session):
    """
    Return the user's master profile.

    Since this application is for a single user,
    there will only ever be one profile.
    """

    return db.query(PersonalProfile).first()


def save_profile(
    db: Session,
    profile: PersonalProfileCreate
):
    """
    Create the profile if it doesn't exist.
    Otherwise update the existing profile.
    """

    existing_profile = db.query(PersonalProfile).first()

    # Create new profile
    if existing_profile is None:

        new_profile = PersonalProfile(
            full_name=profile.full_name,
            title=profile.title,
            email=profile.email,
            phone=profile.phone,
            location=profile.location,
            linkedin=profile.linkedin,
            portfolio=profile.portfolio,
            summary=profile.summary,
        )

        db.add(new_profile)
        db.commit()
        db.refresh(new_profile)

        return new_profile

    # Update existing profile
    existing_profile.full_name = profile.full_name
    existing_profile.title = profile.title
    existing_profile.email = profile.email
    existing_profile.phone = profile.phone
    existing_profile.location = profile.location
    existing_profile.linkedin = profile.linkedin
    existing_profile.portfolio = profile.portfolio
    existing_profile.summary = profile.summary

    db.commit()
    db.refresh(existing_profile)

    return existing_profile