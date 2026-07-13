from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.exporter.docx_exporter import export_resume

router = APIRouter(
    prefix="/export",
    tags=["Export"],
)


@router.post("/docx")
def export_docx(
    resume: dict,
):
    """
    Export a generated resume as a DOCX file.
    """

    document = export_resume(resume)

    return StreamingResponse(
        document,
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        headers={
            "Content-Disposition": 'attachment; filename="Resume.docx"'
        },
    )