"""
profile.py

API Router for Personal Profile.
"""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.profile import (
    PersonalProfileCreate,
    PersonalProfileResponse,
)
from app.services.profile_service import (
    get_profile,
    save_profile,
)

router = APIRouter(
    prefix="/profile",
    tags=["Personal Profile"],
)


@router.get(
    "/",
    response_model=PersonalProfileResponse,
)
def get_personal_profile(
    db: Session = Depends(get_db),
):
    """
    Get the user's personal profile.
    """

    return get_profile(db)


@router.put(
    "/",
    response_model=PersonalProfileResponse,
)
def save_personal_profile(
    profile: PersonalProfileCreate,
    db: Session = Depends(get_db),
):
    """
    Create or update the user's personal profile.
    """

    return save_profile(
        db=db,
        profile=profile,
    )