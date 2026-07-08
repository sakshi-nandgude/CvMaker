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
from app.models.experience import Experience
from app.models.experience_bullet import ExperienceBullet
from app.models.project import Project
from app.models.project_bullet import ProjectBullet

def seed_projects(db: Session):
    """
    Insert all projects and project bullets.
    """

    db.query(ProjectBullet).delete()
    db.query(Project).delete()

    projects = [
        {
            "name": "AFL Performance Analytics Platform",
            "technologies": "Python, FastAPI, PostgreSQL, React, TypeScript, Docker",

            "github_url": "https://github.com/sakshi-nandgude/afl-analytics",

            "live_url": "",

            "bullets": [
                "Developed a full-stack AFL analytics platform using FastAPI, React, PostgreSQL and Docker.",
                "Designed a layered backend architecture with routers, services and repositories.",
                "Built REST APIs for players, teams, matches and performance analytics.",
                "Implemented PostgreSQL using SQLAlchemy ORM.",
                "Created responsive React dashboards using TypeScript and Vite.",
                "Generated interactive Swagger/OpenAPI documentation.",
                "Designed reusable backend modules following clean architecture.",
                "Containerised the application using Docker.",
                "Applied Git version control throughout development."
            ]
        },

        {
            "name": "Country Economic Stress Analysis",

            "technologies": "Python, Pandas, Scikit-learn, Power BI",

            "github_url": "https://github.com/sakshi-nandgude/country-economic-stress-analysis",

            "live_url": "",

            "bullets": [
                "Analysed economic indicators across multiple countries.",
                "Performed extensive data cleaning and preprocessing.",
                "Built predictive machine learning models.",
                "Created Power BI dashboards.",
                "Performed exploratory data analysis.",
                "Visualised economic trends.",
                "Evaluated model performance.",
                "Produced business insights."
            ]
        }

        # Add remaining projects exactly the same way
    ]

    total_projects = 0
    total_bullets = 0

    for item in projects:

        project = Project(
            name=item["name"],
            technologies=item["technologies"],
            github_url=item["github_url"],
            live_url=item["live_url"],
        )

        db.add(project)
        db.flush()

        for order, bullet in enumerate(item["bullets"], start=1):

            db.add(
                ProjectBullet(
                    project_id=project.id,
                    bullet=bullet,
                    display_order=order,
                )
            )

            total_bullets += 1

        total_projects += 1

    db.commit()

    print(f"✓ {total_projects} Projects Inserted")
    print(f"✓ {total_bullets} Project Bullets Inserted")

def seed_experiences(db: Session):
    """
    Insert all work experiences and bullets.
    """

    db.query(ExperienceBullet).delete()
    db.query(Experience).delete()

    experiences = [
        {
            "company": "Stats Perform",
            "role": "AFL Data Analyst",
            "location": "Limerick, Ireland",
            "start_date": "Mar 2026",
            "end_date": "Present",
            "bullets": [
                "Perform real-time data quality assurance for structured AFL sports data feeds in a live analytics production environment.",
                "Validate player tracking metrics, event data, and statistical outputs against defined business rules, ensuring accuracy for downstream BI and analytics products consumed across the sports intelligence industry.",
                "Identify and communicate data discrepancies in real time, applying rigorous QA processes that maintain reliability of structured feeds at volume.",
                "Support operational processes enabling accurate, consistent data output across a cross-functional team of analysts and data engineers.",
                "Maintain initiative trackers and dashboard statuses to support stakeholder visibility of data quality across live game events."
            ]
        },
        {
            "company": "University of Limerick",
            "role": "Project Lead — Big Data, Digital Marketing & Digital Futures Lab",
            "location": "Ireland",
            "start_date": "Jun 2025",
            "end_date": "Present",
            "bullets": [
                "Coordinated operations for a cross-disciplinary team spanning Business Analytics, Finance, and AI disciplines, preparing documents, assigning actions, and tracking follow-ups from every working session using Jira and Kanban boards.",
                "Collected and organised requirements from multiple stakeholders and consolidated inputs into structured frameworks including stakeholder maps, systems maps, and concern statements using Microsoft Teams, Miro, SharePoint, and PowerPoint.",
                "Synthesised individual and collective findings into evidence-backed reports and presentation materials for senior academic stakeholders, demonstrating clear written and verbal communication."
            ]
        },
        {
            "company": "Innomatics Research Labs",
            "role": "Agentic AI Intern",
            "location": "India · Remote",
            "start_date": "Feb 2026",
            "end_date": "Apr 2026",
            "bullets": [
                "Designed, built, and validated AI data pipelines using Python, FastAPI, AWS, LangChain, and LangGraph.",
                "Designed and validated structured JSON data models for multi-step LLM agent workflows, enforcing schema consistency and detecting output anomalies across pipeline stages.",
                "Built Python/FastAPI data transformation microservices applying cleaning, normalisation, validation, and business rule enforcement using production-ready data service patterns.",
                "Analysed LLM output patterns across agent workflows to identify quality issues, performance bottlenecks, and failure modes, producing structured findings for the engineering team.",
                "Deployed and tested services on AWS infrastructure (S3, EC2), supporting cloud-native AI pipeline delivery."
            ]
        },
        {
            "company": "Indira University",
            "role": "Junior Data Analyst",
            "location": "Pune District, Maharashtra, India",
            "start_date": "Aug 2024",
            "end_date": "Jul 2025",
            "bullets": [
                "Managed end-to-end placement data reporting for 100+ students and 15+ corporate recruiting partners.",
                "Gathered, cleaned, tracked, and reported placement data, producing performance trend reports and insights that directly informed faculty recruitment strategy.",
                "Coordinated placement calendars, interview scheduling, and logistics across students and recruiters, managing data flows for 100+ concurrent records.",
                "Built and maintained structured data dashboards and reporting templates using Microsoft Excel."
            ]
        },
        {
            "company": "Indira University",
            "role": "Placement Coordinator | Data & Reporting Analyst",
            "location": "Maharashtra, India",
            "start_date": "May 2024",
            "end_date": "Jul 2024",
            "bullets": [
                "Coordinated placement drives for 100+ students and 15+ corporate recruiting partners, managing calendars, scheduling interviews, coordinating logistics, and processing travel arrangements as required.",
                "Prepared meeting agendas, briefing materials, and written updates for faculty leadership; tracked actions, decisions, and follow-ups from placement committee meetings with high accuracy.",
                "Collected and organised requirements from recruiters, faculty, and students across every placement cycle, maintaining structured trackers and automated status dashboards, and assisted in preparing meeting reports.",
                "Demonstrated strong organisational skills and high attention to detail across end-to-end placement logistics, communicating clearly with senior faculty and corporate partners to ensure every commitment was met on time."
            ]
        }
    ]

    total_exp = 0
    total_bullets = 0

    for item in experiences:

        exp = Experience(
            company=item["company"],
            role=item["role"],
            location=item["location"],
            start_date=item["start_date"],
            end_date=item["end_date"],
        )

        db.add(exp)
        db.flush()

        for index, bullet in enumerate(item["bullets"], start=1):

            db.add(
                ExperienceBullet(
                    experience_id=exp.id,
                    bullet=bullet,
                    display_order=index,
                )
            )

            total_bullets += 1

        total_exp += 1

    db.commit()

    print(f"✓ {total_exp} Experiences Inserted")
    print(f"✓ {total_bullets} Experience Bullets Inserted")

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
        seed_experiences(db)
        seed_projects(db)
        # Then Education
        # Then Certifications

        print("Seeder Connected Successfully!")

    finally:
        db.close()


if __name__ == "__main__":
    main()