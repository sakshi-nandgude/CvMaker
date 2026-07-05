from pydantic import BaseModel, ConfigDict


class ExperienceBase(BaseModel):
    company: str
    role: str
    location: str
    start_date: str
    end_date: str


class ExperienceCreate(ExperienceBase):
    pass


class ExperienceResponse(ExperienceBase):
    id: int

    model_config = ConfigDict(from_attributes=True)