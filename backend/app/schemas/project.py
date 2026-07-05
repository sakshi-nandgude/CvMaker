from pydantic import BaseModel, ConfigDict


class ProjectBase(BaseModel):
    name: str
    technologies: str
    github_url: str
    live_url: str


class ProjectCreate(ProjectBase):
    pass


class ProjectResponse(ProjectBase):
    id: int

    model_config = ConfigDict(from_attributes=True)