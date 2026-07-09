import json
from pathlib import Path

from openai import OpenAI
from sqlalchemy.orm import Session

from app.config import OPENAI_API_KEY
from app.ai.prompts import SYSTEM_PROMPT
from app.ai.resume_builder import build_master_profile
from app.ai.resume_assembler import assemble_resume

client = OpenAI(api_key=OPENAI_API_KEY)


def load_resume_style() -> str:
    """
    Load the professional resume writing style guide.
    """

    style_file = (
        Path(__file__).parent.parent.parent
        / "resume_style.md"
    )

    if style_file.exists():
        return style_file.read_text(
            encoding="utf-8"
        )

    return ""


def build_user_prompt(
    master_profile: dict,
    job_description: str,
    resume_style: str,
) -> str:
    """
    Build a structured prompt for GPT.
    """

    return f"""
==============================
CANDIDATE MASTER PROFILE
==============================

{json.dumps(master_profile, indent=2)}

==============================
TARGET JOB DESCRIPTION
==============================

{job_description}

==============================
PROFESSIONAL WRITING STYLE
==============================

{resume_style}

==============================
YOUR TASK
==============================

Use ONLY the supplied Master Profile.

Never invent facts.

Never invent metrics.

Never invent employers.

Never invent achievements.

Rewrite existing information only.

Return ONLY valid JSON.
"""


def generate_resume(
    db: Session,
    job_description: str,
):
    master_profile = build_master_profile(db)

    resume_style = load_resume_style()

    def build_user_prompt(
    master_profile: dict,
    job_description: str,
    resume_style: str,
) -> str:
        """
        Build the prompt sent to GPT.
        """

        return f"""
=========================================================
MASTER PROFILE
=========================================================

{json.dumps(master_profile, indent=2)}

=========================================================
TARGET JOB DESCRIPTION
=========================================================

{job_description}

=========================================================
REFERENCE WRITING GUIDELINES
=========================================================

{resume_style}

=========================================================
INSTRUCTIONS
=========================================================

The Master Profile contains every fact about the candidate.

Your task is to build the strongest possible ATS resume for the supplied job description.

The goal is NOT to include everything.

Instead create a concise, highly relevant resume.

Requirements

• Select only the experiences that directly strengthen the application.

• Select only the projects that best demonstrate the required technical skills.

• Select only the certifications that add value.

• Keep only the most relevant technical skills.

• Rewrite the professional summary specifically for this job.

• Rewrite only the selected experience bullets.

• Rewrite only the selected project bullets.

• Remove unrelated or repetitive information.

• The finished resume should read naturally and professionally.

• The finished resume should normally fit on ONE page.

• Use only information contained in the Master Profile.

• Never invent technologies.

• Never invent achievements.

• Never invent metrics.

• Never invent employers.

• Never invent projects.

Return ONLY valid JSON.
"""

    response = client.chat.completions.create(
        model="gpt-4.1",
        temperature=0.1,
        response_format={
            "type": "json_object",
        },
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT,
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
    )

    ai_response = json.loads(
        response.choices[0].message.content
    )

    return assemble_resume(
        master_profile,
        ai_response,
    )