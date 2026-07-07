from openai import OpenAI
from sqlalchemy.orm import Session

from app.config import OPENAI_API_KEY
from app.ai.prompts import SYSTEM_PROMPT
from app.ai.resume_builder import build_master_profile

from app.models.profile import PersonalProfile
from app.models.experience import Experience
from app.models.project import Project
from app.models.skill import Skill
from app.models.education import Education
from app.models.certification import Certification

client = OpenAI(api_key=OPENAI_API_KEY)


def generate_resume(
    db: Session,
    job_description: str,
):
    """
    Generate a tailored resume using the user's
    stored master profile and a job description.
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

    master_profile = build_master_profile(
        profile=profile,
        experiences=experiences,
        projects=projects,
        skills=skills,
        education=education,
        certifications=certifications,
    )

    response = client.chat.completions.create(
        model="gpt-4.1",
        temperature=0.2,
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT,
            },
            {
                "role": "user",
                "content": f"""
MASTER PROFILE

{master_profile}

JOB DESCRIPTION

{job_description}
""",
            },
        ],
    )

    return response.choices[0].message.content