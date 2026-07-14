# AI Resume Builder

An AI-powered resume builder that generates ATS-optimized resumes tailored to a specific job description. The application uses OpenAI to intelligently rewrite and optimize resume content while ensuring all information remains truthful and sourced only from the user's master profile.

The generated resume can be previewed in the application and exported as a professionally formatted Microsoft Word (.docx) document.

---

## Features

- AI-powered resume generation
- ATS-optimized resume content
- Job description specific resume tailoring
- Professional summary rewriting
- Intelligent experience selection
- Relevant project selection
- Skill prioritization based on the job description
- Certification filtering
- Live resume preview
- Export to Microsoft Word (.docx)
- Responsive React frontend
- FastAPI REST API backend

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Query
- Axios
- React Router

### Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic
- OpenAI API
- python-docx

---

## Project Structure

```
frontend/
│
├── src/
│   ├── components/
│   ├── features/
│   │   ├── ai/
│   │   ├── export/
│   │   └── resume/
│   ├── pages/
│   ├── api/
│   └── types/

backend/
│
├── app/
│   ├── ai/
│   ├── api/
│   ├── database/
│   ├── exporter/
│   ├── models/
│   ├── schemas/
│   └── services/
│
├── templates/
└── main.py
```

---

## How It Works

### Step 1

The user pastes a job description.

↓

### Step 2

The backend retrieves the candidate's complete master profile from the database.

↓

### Step 3

The AI compares the job description with the master profile.

It:

- rewrites the professional summary
- selects the most relevant experiences
- selects the strongest projects
- prioritizes skills
- filters certifications
- optimizes the resume for Applicant Tracking Systems (ATS)

↓

### Step 4

The generated resume is displayed inside the application.

↓

### Step 5

The user downloads a professionally formatted Microsoft Word (.docx) resume.

---

## AI Resume Generation

The AI never invents information.

Instead it:

- rewrites existing content
- reorganizes sections
- prioritizes relevant experience
- improves bullet quality
- naturally incorporates ATS keywords
- removes irrelevant content

All generated information comes only from the user's stored master profile.

---

## Resume Sections

- Professional Summary
- Professional Experience
- Projects
- Technical Skills
- Education
- Certifications

---

## API Endpoints

### Profile

```
GET /profile
PUT /profile
```

### Experience

```
GET /experience
POST /experience
PUT /experience/{id}
DELETE /experience/{id}
```

### Projects

```
GET /projects
POST /projects
PUT /projects/{id}
DELETE /projects/{id}
```

### Skills

```
GET /skills
POST /skills
PUT /skills/{id}
DELETE /skills/{id}
```

### Education

```
GET /education
POST /education
PUT /education/{id}
DELETE /education/{id}
```

### Certifications

```
GET /certifications
POST /certifications
PUT /certifications/{id}
DELETE /certifications/{id}
```

### AI Resume

```
POST /resume/generate
```

### Export

```
POST /export/docx
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/ai-resume-builder.git
```

---

### Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Backend `.env`

```
DATABASE_URL=your_database_url

OPENAI_API_KEY=your_openai_api_key
```

---

## Future Improvements (Version 2)

- Manual Resume Builder
- Multiple Resume Templates
- PDF Export
- Cover Letter Generator
- LinkedIn Profile Optimizer
- Drag-and-Drop Resume Editor
- Theme Customization
- Resume Version Management
- AI Resume Suggestions
- Multiple Resume Profiles

---

## Author

**Sakshi Vijay Nandgude**

MSc Business Analytics  
University of Limerick

GitHub:
https://github.com/yourusername

LinkedIn:
https://linkedin.com/in/yourprofile
