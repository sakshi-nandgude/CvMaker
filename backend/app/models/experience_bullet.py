from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class ExperienceBullet(Base):
    __tablename__ = "experience_bullets"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    experience_id: Mapped[int] = mapped_column(
        ForeignKey("experiences.id", ondelete="CASCADE")
    )

    bullet: Mapped[str] = mapped_column(String(1000))

    display_order: Mapped[int] = mapped_column(Integer)