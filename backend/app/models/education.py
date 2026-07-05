from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class Education(Base):
    __tablename__ = "education"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    degree: Mapped[str] = mapped_column(String(150))

    university: Mapped[str] = mapped_column(String(150))

    location: Mapped[str] = mapped_column(String(100))

    start_year: Mapped[str] = mapped_column(String(10))

    end_year: Mapped[str] = mapped_column(String(10))

    grade: Mapped[str] = mapped_column(String(50))