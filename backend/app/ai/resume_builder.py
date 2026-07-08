from sqlalchemy.orm import Session

from app.models.profile import PersonalProfile
from app.models.experience import Experience
from app.models.experience_bullet import ExperienceBullet
from app.models.project import Project
from app.models.project_bullet import ProjectBullet
from app.models.skill import Skill
from app.models.education import Education
from app.models.certification import Certification


def build_master_profile(db: Session) -> dict:
    """
    Build the complete master profile from PostgreSQL.

    This is the single source of truth used by the AI.
    """

    # -------------------------------------------------
    # Profile
    # -------------------------------------------------

    profile = db.query(PersonalProfile).first()

    # -------------------------------------------------
    # Experiences
    # -------------------------------------------------

    experiences = (
        db.query(Experience)
        .order_by(Experience.id.desc())
        .all()
    )

    experience_data = []

    for experience in experiences:

        bullets = (
            db.query(ExperienceBullet)
            .filter(
                ExperienceBullet.experience_id == experience.id
            )
            .order_by(
                ExperienceBullet.display_order
            )
            .all()
        )

        experience_data.append(
            {
                "id": experience.id,
                "company": experience.company,
                "role": experience.role,
                "location": experience.location,
                "start_date": experience.start_date,
                "end_date": experience.end_date,
                "bullets": [
                    bullet.bullet
                    for bullet in bullets
                ],
            }
        )

    # -------------------------------------------------
    # Projects
    # -------------------------------------------------

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

    # -------------------------------------------------
    # Skills
    # -------------------------------------------------

    skills = (
        db.query(Skill)
        .order_by(
            Skill.category,
            Skill.name,
        )
        .all()
    )

    skill_data = [
        {
            "id": skill.id,
            "category": skill.category,
            "name": skill.name,
        }
        for skill in skills
    ]

    # -------------------------------------------------
    # Education
    # -------------------------------------------------

    education = (
        db.query(Education)
        .order_by(
            Education.end_year.desc()
        )
        .all()
    )

    education_data = [
        {
            "id": item.id,
            "degree": item.degree,
            "university": item.university,
            "location": item.location,
            "start_year": item.start_year,
            "end_year": item.end_year,
            "grade": item.grade,
        }
        for item in education
    ]

    # -------------------------------------------------
    # Certifications
    # -------------------------------------------------

    certifications = (
        db.query(Certification)
        .order_by(
            Certification.year.desc()
        )
        .all()
    )

    certification_data = [
        {
            "id": item.id,
            "name": item.name,
            "provider": item.provider,
            "year": item.year,
        }
        for item in certifications
    ]

    # -------------------------------------------------
    # Return Master Profile
    # -------------------------------------------------

    return {

        "profile": {
            "full_name": profile.full_name,
            "title": profile.title,
            "email": profile.email,
            "phone": profile.phone,
            "location": profile.location,
            "linkedin": profile.linkedin,
            "portfolio": profile.portfolio,
            "summary": profile.summary,
        } if profile else {},

        "experience": experience_data,

        "projects": project_data,

        "skills": skill_data,

        "education": education_data,

        "certifications": certification_data,
    }