from openai import OpenAI

from app.config import OPENAI_API_KEY
from app.ai.prompts import SYSTEM_PROMPT

from app.models.profile import PersonalProfile
from app.models.experience import Experience
from app.models.project import Project
from app.models.skill import Skill
from app.models.education import Education
from app.models.certification import Certification


client = OpenAI(api_key=OPENAI_API_KEY)


def generate_resume(
    db,
    job_description: str,
):

    profile = db.query(PersonalProfile).first()

    experiences = db.query(Experience).all()

    projects = db.query(Project).all()

    skills = db.query(Skill).all()

    education = db.query(Education).all()

    certifications = db.query(Certification).all()

    master_profile = {
        "profile": profile.__dict__ if profile else {},
        "experience": [e.__dict__ for e in experiences],
        "projects": [p.__dict__ for p in projects],
        "skills": [s.__dict__ for s in skills],
        "education": [e.__dict__ for e in education],
        "certifications": [c.__dict__ for c in certifications],
    }

    response = client.chat.completions.create(
        model="gpt-4.1",
        temperature=0.3,
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT,
            },
            {
                "role": "user",
                "content": f"""
Master Profile:

{master_profile}

Job Description:

{job_description}
""",
            },
        ],
    )

    return response.choices[0].message.content