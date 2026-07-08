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

    # ---------------------------------
    # Summary
    # ---------------------------------

    if ai_response.get("summary"):
        resume["profile"]["summary"] = ai_response["summary"]

    # ---------------------------------
    # Skill Order
    # ---------------------------------

    if ai_response.get("skill_order"):

        ordered = []

        for name in ai_response["skill_order"]:

            for skill in resume["skills"]:

                if (
                    skill["name"].lower()
                    == name.lower()
                ):
                    ordered.append(skill)

        for skill in resume["skills"]:

            if skill not in ordered:
                ordered.append(skill)

        resume["skills"] = ordered

    # ---------------------------------
    # Experience Rewrite
    # ---------------------------------

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

    # ---------------------------------
    # Project Rewrite
    # ---------------------------------

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