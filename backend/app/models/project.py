from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base
from sqlalchemy.orm import relationship


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    name: Mapped[str] = mapped_column(String(150))

    technologies: Mapped[str] = mapped_column(String(500))

    github_url: Mapped[str] = mapped_column(String(255))

    live_url: Mapped[str] = mapped_column(String(255))

    bullets = relationship(
    "ProjectBullet",
    back_populates="project",
    cascade="all, delete-orphan",
    order_by="ProjectBullet.display_order",
)