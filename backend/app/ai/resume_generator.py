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
    Loads the professional resume style guide.

    This is NOT copied into the output.

    It is only used as a writing reference.
    """

    style_file = (
        Path(__file__)
        .parent.parent.parent
        / "resume_style.md"
    )

    if style_file.exists():
        return style_file.read_text(
            encoding="utf-8"
        )

    return ""


def generate_resume(
    db: Session,
    job_description: str,
):
    master_profile = build_master_profile(db)

    resume_style = load_resume_style()

    user_prompt = {
        "master_profile": master_profile,
        "job_description": job_description,
        "resume_style_reference": resume_style,
    }

    response = client.chat.completions.create(
        model="gpt-4.1",
        temperature=0.15,
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
                "content": json.dumps(
                    user_prompt,
                    indent=2,
                ),
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