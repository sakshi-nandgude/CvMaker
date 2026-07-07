from app.models.profile import PersonalProfile
from app.models.experience import Experience
from app.models.project import Project
from app.models.skill import Skill
from app.models.education import Education
from app.models.certification import Certification


def build_master_profile(
    profile: PersonalProfile,
    experiences: list[Experience],
    projects: list[Project],
    skills: list[Skill],
    education: list[Education],
    certifications: list[Certification],
):
    return {
        "candidate": {
            "profile": {
                "name": profile.full_name if profile else "",
                "title": profile.title if profile else "",
                "summary": profile.summary if profile else "",
                "email": profile.email if profile else "",
                "phone": profile.phone if profile else "",
                "location": profile.location if profile else "",
                "linkedin": profile.linkedin if profile else "",
                "portfolio": profile.portfolio if profile else "",
            },
            "experience": [
                {
                    "id": e.id,
                    "company": e.company,
                    "role": e.role,
                    "location": e.location,
                    "start_date": e.start_date,
                    "end_date": e.end_date,
                }
                for e in experiences
            ],
            "projects": [
                {
                    "id": p.id,
                    "name": p.name,
                    "technologies": p.technologies,
                    "github_url": p.github_url,
                    "live_url": p.live_url,
                }
                for p in projects
            ],
            "skills": [
                {
                    "id": s.id,
                    "category": s.category,
                    "name": s.name,
                }
                for s in skills
            ],
            "education": [
                {
                    "id": e.id,
                    "degree": e.degree,
                    "university": e.university,
                    "location": e.location,
                    "start_year": e.start_year,
                    "end_year": e.end_year,
                    "grade": e.grade,
                }
                for e in education
            ],
            "certifications": [
                {
                    "id": c.id,
                    "name": c.name,
                    "provider": c.provider,
                    "year": c.year,
                }
                for c in certifications
            ],
        }
    }