from pydantic import BaseModel


class ResumeGenerationRequest(BaseModel):
    job_description: str