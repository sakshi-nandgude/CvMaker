from io import BytesIO
from pathlib import Path

from docx import Document
from docx.text.paragraph import Paragraph


BASE_DIR = Path(__file__).resolve().parent.parent.parent

TEMPLATE_PATH = (
    BASE_DIR
    / "templates"
    / "resume_template.docx"
)

# ---------------------------------------------------------
# Load Template
# ---------------------------------------------------------

def load_template() -> Document:
    """
    Load the resume template.
    """

    return Document(TEMPLATE_PATH)


# ---------------------------------------------------------
# Find Placeholder
# ---------------------------------------------------------

def find_placeholder(
    document: Document,
    placeholder: str,
) -> Paragraph | None:
    """
    Find the paragraph containing a placeholder.
    """

    for paragraph in document.paragraphs:

        if placeholder in paragraph.text:

            return paragraph

    return None


# ---------------------------------------------------------
# Replace Placeholder
# ---------------------------------------------------------

def replace_placeholder(
    document: Document,
    placeholder: str,
    value: str,
):
    """
    Replace a simple placeholder.

    Used for:

    FULL_NAME

    TITLE

    CONTACT

    SUMMARY
    """

    paragraph = find_placeholder(
        document,
        placeholder,
    )

    if paragraph is None:
        return

    paragraph.text = value


# ---------------------------------------------------------
# Contact Builder
# ---------------------------------------------------------

def build_contact(
    profile: dict,
) -> str:

    values = [

        profile.get("location"),

        profile.get("email"),

        profile.get("phone"),

        profile.get("linkedin"),
    ]

    return " · ".join(
        value
        for value in values
        if value
    )


# ---------------------------------------------------------
# Header
# ---------------------------------------------------------

def write_header(
    document: Document,
    profile: dict,
):

    replace_placeholder(
        document,
        "{{FULL_NAME}}",
        profile["full_name"],
    )

    replace_placeholder(
        document,
        "{{TITLE}}",
        profile["title"],
    )

    replace_placeholder(
        document,
        "{{CONTACT}}",
        build_contact(profile),
    )


# ---------------------------------------------------------
# Summary
# ---------------------------------------------------------

def write_summary(
    document: Document,
    summary: str,
):

    replace_placeholder(
        document,
        "{{SUMMARY}}",
        summary,
    )

replace_placeholder(
    document,
    "{{SKILLS}}",
    build_skills(
        resume.get("skills", [])
    ),
)

replace_placeholder(
    document,
    "{{EXPERIENCE}}",
    build_experience(
        resume.get("experience", [])
    ),
)


# =========================================================
# EXPORT RESUME
# =========================================================

def export_resume(
    resume: dict,
):

    document = load_template()

    write_header(
        document,
        resume["profile"],
    )

    write_summary(
        document,
        resume["profile"]["summary"],
    )

    output = BytesIO()

    document.save(output)

    output.seek(0)

    return output


# =========================================================
# Continue in Step 2
# =========================================================

def build_skills(skills: list) -> str:
    if not skills:
        return ""

    return " • ".join(
        skill["name"]
        for skill in skills
    )

def build_experience(experiences: list) -> str:
    if not experiences:
        return ""

    sections = []

    for experience in experiences:
        block = []

        role = experience.get("role", "")
        company = experience.get("company", "")
        location = experience.get("location", "")
        start = experience.get("start_date", "")
        end = experience.get("end_date", "")

        block.append(f"{role}")

        company_line = company

        if location:
            company_line += f" | {location}"

        if start or end:
            company_line += f" | {start} - {end}"

        block.append(company_line)

        bullets = experience.get("bullets", [])

        for bullet in bullets:
            block.append(f"• {bullet}")

        sections.append("\n".join(block))

    return "\n\n".join(sections)