from pydantic import BaseModel, ConfigDict


class CertificationBase(BaseModel):
    name: str
    provider: str
    year: str


class CertificationCreate(CertificationBase):
    pass


class CertificationResponse(CertificationBase):
    id: int

    model_config = ConfigDict(from_attributes=True)