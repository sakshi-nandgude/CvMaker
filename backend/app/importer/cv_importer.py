import re

from app.importer.cv_parser import parse_cv


def build_master_profile(file_path: str) -> dict:
    """
    Convert the parsed CV sections into one structured
    Master Profile dictionary.

    This dictionary will later be saved into PostgreSQL.
    """

    sections = parse_cv(file_path)

    return {
        "profile": extract_profile(sections),
        "skills": extract_skills(sections),
        "experience": extract_experience(sections),
        "education": extract_education(sections),
        "certifications": extract_certifications(sections),
        "projects": extract_projects(sections),
    }


# --------------------------------------------------
# PROFILE
# --------------------------------------------------

def extract_profile(sections: dict):

    header = sections.get("HEADER", "")
    summary = sections.get("PROFILE SUMMARY", "")

    lines = header.split("\n")

    return {
        "name": lines[0] if len(lines) else "",
        "title": lines[1] if len(lines) > 1 else "",
        "summary": summary,
    }


# --------------------------------------------------
# SKILLS
# --------------------------------------------------

def extract_skills(sections: dict):

    text = sections.get("CORE SKILLS", "")

    skills = []

    for line in text.split("\n"):

        if ":" not in line:
            continue

        category, values = line.split(":", 1)

        for skill in values.split(","):

            skills.append(
                {
                    "category": category.strip("• ").strip(),
                    "name": skill.strip(),
                }
            )

    return skills


# --------------------------------------------------
# EXPERIENCE
# --------------------------------------------------

def extract_experience(sections: dict):
    """
    Placeholder.

    We will implement this next.
    """

    return []


# --------------------------------------------------
# EDUCATION
# --------------------------------------------------

def extract_education(sections: dict):
    """
    Placeholder.
    """

    return []


# --------------------------------------------------
# CERTIFICATIONS
# --------------------------------------------------

def extract_certifications(sections: dict):
    """
    Placeholder.
    """

    return []


# --------------------------------------------------
# PROJECTS
# --------------------------------------------------

def extract_projects(sections: dict):
    """
    Placeholder.
    """

    return []