from io import BytesIO

from docx import Document

from app.exporter.styles import configure_document
from app.exporter.sections import (
    build_header,
    build_summary,
    build_skills,
    build_experience,
    build_projects,
    build_education,
    build_certifications,
)


def export_resume(resume: dict) -> BytesIO:
    """
    Generate a professional DOCX resume from
    the generated resume dictionary.
    """

    document = Document()

    configure_document(document)

    build_header(
        document,
        resume["profile"],
    )

    build_summary(
        document,
        resume["profile"]["summary"],
    )

    build_skills(
        document,
        resume["skills"],
    )

    build_experience(
        document,
        resume["experience"],
    )

    build_projects(
        document,
        resume["projects"],
    )

    build_education(
        document,
        resume["education"],
    )

    build_certifications(
        document,
        resume["certifications"],
    )

    output = BytesIO()

    document.save(output)

    output.seek(0)

    return output