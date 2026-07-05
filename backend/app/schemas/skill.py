from pydantic import BaseModel, ConfigDict


class SkillBase(BaseModel):
    category: str
    name: str


class SkillCreate(SkillBase):
    pass


class SkillResponse(SkillBase):
    id: int

    model_config = ConfigDict(from_attributes=True)