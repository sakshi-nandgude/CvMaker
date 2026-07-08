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

    prompt = build_user_prompt(
        master_profile,
        job_description,
        resume_style,
    )

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