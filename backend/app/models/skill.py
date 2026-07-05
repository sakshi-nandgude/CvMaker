from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class Skill(Base):
    __tablename__ = "skills"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    category: Mapped[str] = mapped_column(String(100))

    name: Mapped[str] = mapped_column(String(100))