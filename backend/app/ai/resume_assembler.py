from copy import deepcopy


def assemble_resume(
    master_profile: dict,
    ai_response: dict,
):
    """
    Merge AI tailoring decisions with the
    user's stored master profile.
    """

    resume = deepcopy(master_profile)

    # ------------------------
    # Summary
    # ------------------------

    if ai_response.get("summary"):

        resume["profile"]["summary"] = (
            ai_response["summary"]
        )

    # ------------------------
    # Skills
    # ------------------------

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

    # ------------------------
    # Projects
    # ------------------------

    if ai_response.get("selected_projects"):

        resume["projects"] = [

            project

            for project in resume["projects"]

            if project["id"]

            in ai_response[
                "selected_projects"
            ]
        ]

    # ------------------------
    # Experience
    # ------------------------

    rewritten = {
        item["id"]: item["bullets"]

        for item in ai_response.get(
            "experience",
            [],
        )
    }

    for experience in resume["experience"]:

        if experience["id"] in rewritten:

            experience["bullets"] = rewritten[
                experience["id"]
            ]

    return resume