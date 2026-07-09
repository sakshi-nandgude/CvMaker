from copy import deepcopy


def assemble_resume(
    master_profile: dict,
    ai_response: dict,
):
    """
    Merge AI tailoring decisions with the
    stored master profile.
    """

    resume = deepcopy(master_profile)

    # -------------------------------------------------
    # Summary
    # -------------------------------------------------

    if ai_response.get("summary"):
        resume["profile"]["summary"] = ai_response["summary"]

    # -------------------------------------------------
    # Filter Experience
    # -------------------------------------------------

    selected_experience = ai_response.get(
        "selected_experience"
    )

    if selected_experience:

        resume["experience"] = [
            item
            for item in resume["experience"]
            if item["id"] in selected_experience
        ]

    # -------------------------------------------------
    # Filter Projects
    # -------------------------------------------------

    selected_projects = ai_response.get(
        "selected_projects"
    )

    if selected_projects:

        resume["projects"] = [
            item
            for item in resume["projects"]
            if item["id"] in selected_projects
        ]

    # -------------------------------------------------
    # Filter Certifications
    # -------------------------------------------------

    selected_certifications = ai_response.get(
        "selected_certifications"
    )

    if selected_certifications:

        resume["certifications"] = [
            item
            for item in resume["certifications"]
            if item["id"] in selected_certifications
        ]

    # -------------------------------------------------
    # Filter + Order Skills
    # -------------------------------------------------

    selected_skills = ai_response.get(
        "selected_skills"
    )

    if selected_skills:

        ordered_skills = []

        for name in selected_skills:

            for skill in resume["skills"]:

                if (
                    skill["name"].lower()
                    == name.lower()
                ):
                    ordered_skills.append(skill)

        resume["skills"] = ordered_skills

    # -------------------------------------------------
    # Rewrite Experience Bullets
    # -------------------------------------------------

    rewritten_experience = {
        item["id"]: item["bullets"]
        for item in ai_response.get(
            "experience",
            [],
        )
    }

    for experience in resume["experience"]:

        if experience["id"] in rewritten_experience:

            experience["bullets"] = rewritten_experience[
                experience["id"]
            ]

    # -------------------------------------------------
    # Rewrite Project Bullets
    # -------------------------------------------------

    rewritten_projects = {
        item["id"]: item["bullets"]
        for item in ai_response.get(
            "projects",
            [],
        )
    }

    for project in resume["projects"]:

        if project["id"] in rewritten_projects:

            project["bullets"] = rewritten_projects[
                project["id"]
            ]

    return resume