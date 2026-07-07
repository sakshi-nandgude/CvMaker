from openai import OpenAI

from app.config import OPENAI_API_KEY
from app.ai.prompts import SYSTEM_PROMPT

client = OpenAI(api_key=OPENAI_API_KEY)


def generate_resume(master_profile, job_description):
    response = client.chat.completions.create(
        model="gpt-4.1",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT,
            },
            {
                "role": "user",
                "content": f"""
Master Profile:
{master_profile}

Job Description:
{job_description}
""",
            },
        ],
        temperature=0.3,
    )

    return response.choices[0].message.content