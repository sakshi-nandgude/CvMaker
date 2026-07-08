from sqlalchemy import Column, ForeignKey, Integer, Text
from sqlalchemy.orm import relationship

from app.database.base import Base


class ProjectBullet(Base):
    __tablename__ = "project_bullets"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id", ondelete="CASCADE"),
        nullable=False,
    )

    bullet = Column(
        Text,
        nullable=False,
    )

    display_order = Column(
        Integer,
        default=1,
    )

    project = relationship(
        "Project",
        back_populates="bullets",
    )