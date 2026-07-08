
import json

from openai import OpenAI
from sqlalchemy.orm import Session

from app.config import OPENAI_API_KEY
from app.ai.prompts import SYSTEM_PROMPT
from app.ai.resume_builder import build_master_profile
from app.ai.resume_assembler import assemble_resume

client = OpenAI(api_key=OPENAI_API_KEY)


def generate_resume(
    db: Session,
    job_description: str,
):
    """
    Generate a tailored resume from the stored
    master profile.
    """

    # -----------------------------
    # Build Master Profile
    # -----------------------------

    master_profile = build_master_profile(db)

    # -----------------------------
    # Prepare Prompt
    # -----------------------------

    user_prompt = {
        "master_profile": master_profile,
        "job_description": job_description,
    }

    # -----------------------------
    # OpenAI Request
    # -----------------------------

    try:
        response = client.chat.completions.create(
        model="gpt-4.1",
        temperature=0.2,
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

    except Exception as e:
        print("=" * 80)
        print("OPENAI EXCEPTION")
        print(type(e))
        print(str(e))
        print("=" * 80)
        raise
    # -----------------------------
    # Parse JSON
    # -----------------------------

    ai_response = json.loads(
        response.choices[0].message.content
    )

    # -----------------------------
    # Build Final Resume
    # -----------------------------

    final_resume = assemble_resume(
        master_profile,
        ai_response,
    )

    return final_resume