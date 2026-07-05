from sqlalchemy.orm import Session

from app.models.project import Project
from app.schemas.project import ProjectCreate


def get_projects(db: Session):
    """
    Return all projects.
    """

    return (
        db.query(Project)
        .order_by(Project.id.desc())
        .all()
    )


def create_project(
    db: Session,
    project: ProjectCreate,
):
    """
    Save a project.
    """

    new_project = Project(
        name=project.name,
        technologies=project.technologies,
        github_url=project.github_url,
        live_url=project.live_url,
    )

    db.add(new_project)
    db.commit()
    db.refresh(new_project)

    return new_project
    