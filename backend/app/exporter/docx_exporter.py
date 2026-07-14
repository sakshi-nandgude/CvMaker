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