from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class PersonalProfile(Base):
    __tablename__ = "personal_profiles"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    full_name: Mapped[str] = mapped_column(String(100))
    title: Mapped[str] = mapped_column(String(100))

    email: Mapped[str] = mapped_column(String(100))
    phone: Mapped[str] = mapped_column(String(30))

    location: Mapped[str] = mapped_column(String(100))

    linkedin: Mapped[str] = mapped_column(String(255))
    portfolio: Mapped[str] = mapped_column(String(255))

    summary: Mapped[str] = mapped_column(String(1000))