from sqlalchemy.orm import Session

from app.models.project import Project
from app.models.project_bullet import ProjectBullet
from app.schemas.project import ProjectCreate


def get_projects(db: Session):
    """
    Return all projects with their bullets.
    """

    projects = (
        db.query(Project)
        .order_by(Project.id.desc())
        .all()
    )

    project_data = []

    for project in projects:

        bullets = (
            db.query(ProjectBullet)
            .filter(
                ProjectBullet.project_id == project.id
            )
            .order_by(
                ProjectBullet.display_order
            )
            .all()
        )

        project_data.append(
            {
                "id": project.id,
                "name": project.name,
                "technologies": project.technologies,
                "github_url": project.github_url,
                "live_url": project.live_url,
                "bullets": [
                    bullet.bullet
                    for bullet in bullets
                ],
            }
        )

    return project_data


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

    return {
        "id": new_project.id,
        "name": new_project.name,
        "technologies": new_project.technologies,
        "github_url": new_project.github_url,
        "live_url": new_project.live_url,
        "bullets": [],
    }