from .styles import (
    add_heading,
    add_name,
    add_title,
    add_contact,
)


def build_header(document, profile):

    add_name(document, profile["full_name"])

    add_title(document, profile["title"])

    contact = (
        f'{profile["email"]} | '
        f'{profile["phone"]} | '
        f'{profile["location"]}'
    )

    add_contact(document, contact)

    links = (
        f'{profile["linkedin"]} | '
        f'{profile["portfolio"]}'
    )

    add_contact(document, links)


def build_summary(document, summary):

    add_heading(document, "Professional Profile")

    document.add_paragraph(summary)


def build_skills(document, skills):

    add_heading(document, "Technical Skills")

    grouped = {}

    for skill in skills:

        grouped.setdefault(
            skill["category"],
            []
        ).append(skill["name"])

    for category, values in grouped.items():

        paragraph = document.add_paragraph()

        paragraph.add_run(
            f"{category}: "
        ).bold = True

        paragraph.add_run(
            ", ".join(values)
        )


def build_experience(document, experience):

    add_heading(document, "Professional Experience")

    for job in experience:

        heading = document.add_paragraph()

        heading.add_run(
            job["role"]
        ).bold = True

        heading.add_run(
            f'    {job["start_date"]} - {job["end_date"]}'
        )

        company = document.add_paragraph()

        company.add_run(
            job["company"]
        ).italic = True

        company.add_run(
            f' | {job["location"]}'
        )

        for bullet in job["bullets"]:

            document.add_paragraph(
                bullet,
                style="List Bullet",
            )


def build_projects(document, projects):

    add_heading(document, "Projects")

    for project in projects:

        heading = document.add_paragraph()

        heading.add_run(
            project["name"]
        ).bold = True

        technologies = document.add_paragraph()

        technologies.add_run(
            "Technologies: "
        ).bold = True

        technologies.add_run(
            project["technologies"]
        )

        for bullet in project["bullets"]:

            document.add_paragraph(
                bullet,
                style="List Bullet",
            )


def build_education(document, education):

    add_heading(document, "Education")

    for item in education:

        p = document.add_paragraph()

        p.add_run(
            item["degree"]
        ).bold = True

        p.add_run(
            f' ({item["start_year"]}-{item["end_year"]})'
        )

        document.add_paragraph(
            item["university"]
        )

        document.add_paragraph(
            item["location"]
        )

        document.add_paragraph(
            f'Grade: {item["grade"]}'
        )


def build_certifications(
    document,
    certifications,
):

    add_heading(
        document,
        "Certifications",
    )

    for cert in certifications:

        p = document.add_paragraph()

        p.add_run(
            cert["name"]
        ).bold = True

        p.add_run(
            f' - {cert["provider"]} ({cert["year"]})'
        )