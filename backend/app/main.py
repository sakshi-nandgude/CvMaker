from fastapi import FastAPI

app = FastAPI(
    title="CV Maker API",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "CV Maker Backend Running"
    }