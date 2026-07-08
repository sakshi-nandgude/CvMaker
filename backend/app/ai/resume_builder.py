from sqlalchemy.orm import Session

from app.models.profile import PersonalProfile
from app.models.experience import Experience
from app.models.project import Project
from app.models.skill import Skill
from app.models.education import Education
from app.models.certification import Certification
from app.models.experience_bullet import ExperienceBullet


def build_master_profile(db: Session) -> dict:
    """
    Build one structured master profile that becomes
    the single source of truth for AI.
    """

    profile = db.query(PersonalProfile).first()

    experiences = (
        db.query(Experience)
        .order_by(Experience.id.desc())
        .all()
    )

    projects = (
        db.query(Project)
        .order_by(Project.id.desc())
        .all()
    )

    skills = (
        db.query(Skill)
        .order_by(Skill.category, Skill.name)
        .all()
    )

    education = (
        db.query(Education)
        .order_by(Education.end_year.desc())
        .all()
    )

    certifications = (
        db.query(Certification)
        .order_by(Certification.year.desc())
        .all()
    )

    experience_data = []

    for experience in experiences:

        bullets = (
            db.query(ExperienceBullet)
            .filter(
                ExperienceBullet.experience_id
                == experience.id
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
        }
        if profile
        else {},
        "experience": experience_data,
        "projects": [
            {
                "id": project.id,
                "name": project.name,
                "technologies": project.technologies,
                "github_url": project.github_url,
                "live_url": project.live_url,
            }
            for project in projects
        ],
        "skills": [
            {
                "id": skill.id,
                "category": skill.category,
                "name": skill.name,
            }
            for skill in skills
        ],
        "education": [
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
        ],
        "certifications": [
            {
                "id": item.id,
                "name": item.name,
                "provider": item.provider,
                "year": item.year,
            }
            for item in certifications
        ],
    }