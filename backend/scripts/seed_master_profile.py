import os
import sys

sys.path.append(
    os.path.dirname(
        os.path.dirname(os.path.abspath(__file__))
    )
)

from sqlalchemy.orm import Session

from app.database.database import SessionLocal


def main():
    db: Session = SessionLocal()

    try:
        print("===================================")
        print("CV Maker Master Profile Seeder")
        print("===================================")

        # We will add Profile here
        # Then Skills
        # Then Experience
        # Then Projects
        # Then Education
        # Then Certifications

        print("Seeder Connected Successfully!")

    finally:
        db.close()


if __name__ == "__main__":
    main()