import os
import sys

sys.path.append(
    os.path.dirname(
        os.path.dirname(os.path.abspath(__file__))
    )
)

from sqlalchemy.orm import Session

from app.database.database import SessionLocal

from app.models.profile import PersonalProfile
from app.models.skill import Skill

def seed_skills(db: Session):
    """
    Insert all master skills.
    """

    db.query(Skill).delete()

    skills = {

        "Programming": [
            "Python",
            "Java",
            "JavaScript",
            "TypeScript",
            "SQL",
            "HTML",
            "CSS",
            "R",
            "C"
        ],

        "Backend": [
            "FastAPI",
            "Spring Boot",
            "Node.js",
            "Express.js",
            "REST API",
            "SQLAlchemy",
            "JWT Authentication"
        ],

        "Frontend": [
            "React",
            "Vite",
            "Tailwind CSS"
        ],

        "Databases": [
            "PostgreSQL",
            "MySQL",
            "SQLite",
            "MongoDB"
        ],

        "Data Analytics": [
            "Power BI",
            "Excel",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Matplotlib",
            "Tableau"
        ],

        "Big Data": [
            "Apache Spark",
            "PySpark",
            "Databricks"
        ],

        "AI": [
            "OpenAI",
            "LangChain",
            "LangGraph",
            "Prompt Engineering",
            "Agentic AI"
        ],

        "Cloud": [
            "AWS",
            "EC2",
            "S3"
        ],

        "DevOps": [
            "Docker",
            "Git",
            "GitHub"
        ],

        "Tools": [
            "Postman",
            "Jira",
            "Miro",
            "Microsoft Teams"
        ]
    }

    total = 0

    for category, items in skills.items():

        for name in items:

            db.add(
                Skill(
                    category=category,
                    name=name,
                )
            )

            total += 1

    db.commit()

    print(f"✓ {total} Skills Inserted")

def seed_profile(db: Session):
    """
    Insert the master personal profile.
    """

    db.query(PersonalProfile).delete()

    profile = PersonalProfile(
        full_name="Sakshi Vijay Nandgude",
        title="Data Analyst | Business Analyst | Software Engineer",
        email="sakshinandgude6@gmail.com",
        phone="+353858083112",
        location="Limerick, Ireland",
        linkedin="https://linkedin.com/in/sakshi-nandgude",
        portfolio="https://github.com/sakshi-nandgude",
        summary=(
            "MSc Business Analytics student with hands-on experience "
            "in software engineering, data analytics, machine learning, "
            "and backend development. Experienced building scalable "
            "analytics platforms, AI applications, and real-time data "
            "quality solutions using Python, SQL, FastAPI, React, "
            "PostgreSQL, and cloud technologies."
        ),
    )

    db.add(profile)
    db.commit()

    print("✓ Personal Profile Inserted")

def main():
    db: Session = SessionLocal()

    try:
        print("===================================")
        print("CV Maker Master Profile Seeder")
        print("===================================")

        seed_profile(db)
        seed_skills(db)
        # Then Experience
        # Then Projects
        # Then Education
        # Then Certifications

        print("Seeder Connected Successfully!")

    finally:
        db.close()


if __name__ == "__main__":
    main()