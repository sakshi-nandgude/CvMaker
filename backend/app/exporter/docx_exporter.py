from io import BytesIO

from docx import Document

TEMPLATE_PATH = "templates/resume_template.docx"


def replace_placeholder(document: Document, placeholder: str, value: str):
    """
    Replace a placeholder in all paragraphs.
    """

    for paragraph in document.paragraphs:
        if placeholder in paragraph.text:
            paragraph.text = paragraph.text.replace(
                placeholder,
                value,
            )


def build_contact(profile: dict) -> str:
    parts = [
        profile.get("email", ""),
        profile.get("phone", ""),
        profile.get("location", ""),
        profile.get("linkedin", ""),
    ]

    return " | ".join(
        item for item in parts if item
    )


def build_skills(skills: list) -> str:
    return " • ".join(
        skill["name"]
        for skill in skills
    )


def build_experience(experience: list) -> str:
    blocks = []

    for job in experience:
        text = (
            f"{job['role']}\n"
            f"{job['company']} | {job['start_date']} - {job['end_date']}\n"
        )

        for bullet in job.get("bullets", []):
            text += f"• {bullet}\n"

        blocks.append(text)

    return "\n".join(blocks)


def build_projects(projects: list) -> str:
    blocks = []

    for project in projects:
        text = (
            f"{project['name']}\n"
            f"{project['technologies']}\n"
        )

        for bullet in project.get("bullets", []):
            text += f"• {bullet}\n"

        blocks.append(text)

    return "\n".join(blocks)


def build_education(education: list) -> str:
    blocks = []

    for item in education:
        blocks.append(
            (
                f"{item['degree']}\n"
                f"{item['university']} | "
                f"{item['start_year']} - {item['end_year']}\n"
                f"{item['grade']}"
            )
        )

    return "\n\n".join(blocks)


def build_certifications(certifications: list) -> str:
    return "\n".join(
        f"{c['name']} - {c['provider']} ({c['year']})"
        for c in certifications
    )


def export_resume(resume: dict):
    document = Document(TEMPLATE_PATH)

    replace_placeholder(
        document,
        "{{FULL_NAME}}",
        resume["profile"]["full_name"],
    )

    replace_placeholder(
        document,
        "{{TITLE}}",
        resume["profile"]["title"],
    )

    replace_placeholder(
        document,
        "{{CONTACT}}",
        build_contact(
            resume["profile"]
        ),
    )

    replace_placeholder(
        document,
        "{{SUMMARY}}",
        resume["profile"]["summary"],
    )

    replace_placeholder(
        document,
        "{{SKILLS}}",
        build_skills(
            resume["skills"]
        ),
    )

    replace_placeholder(
        document,
        "{{EXPERIENCE}}",
        build_experience(
            resume["experience"]
        ),
    )

    replace_placeholder(
        document,
        "{{PROJECTS}}",
        build_projects(
            resume["projects"]
        ),
    )

    replace_placeholder(
        document,
        "{{EDUCATION}}",
        build_education(
            resume["education"]
        ),
    )

    replace_placeholder(
        document,
        "{{CERTIFICATIONS}}",
        build_certifications(
            resume["certifications"]
        ),
    )

    file = BytesIO()

    document.save(file)

    file.seek(0)

    return file