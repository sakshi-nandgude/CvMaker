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
    bullets: list[str] = []

    model_config = ConfigDict(from_attributes=True)