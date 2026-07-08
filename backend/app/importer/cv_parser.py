from docx import Document


SECTION_HEADERS = [
    "PROFILE SUMMARY",
    "CORE SKILLS",
    "PROFESSIONAL EXPERIENCE",
    "EDUCATION",
    "LICENSES & CERTIFICATIONS",
    "PROJECTS",
    "EXTRA CURRICULAR",
    "ONLINE PROFILES & PLATFORMS",
]


def parse_cv(file_path: str) -> dict:
    """
    Read the master CV and split it into logical sections.

    Returns a dictionary where the key is the section title
    and the value is all text belonging to that section.
    """

    document = Document(file_path)

    paragraphs = [
        p.text.strip()
        for p in document.paragraphs
        if p.text.strip()
    ]

    sections = {}

    current_section = "HEADER"

    sections[current_section] = []

    for paragraph in paragraphs:

        if paragraph.upper() in SECTION_HEADERS:

            current_section = paragraph.upper()

            sections[current_section] = []

            continue

        sections[current_section].append(paragraph)

    return {
        key: "\n".join(value)
        for key, value in sections.items()
    }