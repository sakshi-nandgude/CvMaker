from pydantic import BaseModel, ConfigDict


class PersonalProfileBase(BaseModel):
    full_name: str
    title: str
    email: str
    phone: str
    location: str
    linkedin: str
    portfolio: str
    summary: str


class PersonalProfileCreate(PersonalProfileBase):
    pass


class PersonalProfileResponse(PersonalProfileBase):
    id: int

    model_config = ConfigDict(from_attributes=True)