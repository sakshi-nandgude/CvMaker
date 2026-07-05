from pydantic import BaseModel, ConfigDict


class EducationBase(BaseModel):
    degree: str
    university: str
    location: str
    start_year: str
    end_year: str
    grade: str


class EducationCreate(EducationBase):
    pass


class EducationResponse(EducationBase):
    id: int

    model_config = ConfigDict(from_attributes=True)