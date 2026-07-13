import { useNavigate } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

function HomePage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl py-10">

        <div className="mb-16 text-center">

          <h1 className="text-5xl font-extrabold text-gray-900">
            AI Resume Builder
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Create professional ATS-friendly resumes in minutes.
            Build your master resume once, then use AI to generate
            tailored resumes for different job descriptions or edit
            your resume manually anytime.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <Card>

            <div className="flex h-full flex-col">

              <h2 className="mb-4 text-3xl font-bold">
                🤖 AI Resume Generator
              </h2>

              <p className="mb-6 text-gray-600">
                Paste a job description and let AI intelligently
                tailor your resume by selecting the most relevant
                experience, projects, skills and certifications.
              </p>

              <ul className="mb-8 space-y-2 text-gray-700">
                <li>✓ ATS Optimised Resume</li>
                <li>✓ Tailored to Job Description</li>
                <li>✓ Professional Summary</li>
                <li>✓ DOCX Download</li>
              </ul>

              <div className="mt-auto">
                <Button
                  text="Open AI Resume"
                  onClick={() => navigate("/ai")}
                />
              </div>

            </div>

          </Card>

          <Card>

            <div className="flex h-full flex-col">

              <h2 className="mb-4 text-3xl font-bold">
                📝 Manual Resume Builder
              </h2>

              <p className="mb-6 text-gray-600">
                Build and manage your master resume by maintaining
                your personal profile, work experience, projects,
                education, certifications and skills.
              </p>

              <ul className="mb-8 space-y-2 text-gray-700">
                <li>✓ Profile Management</li>
                <li>✓ Experience Management</li>
                <li>✓ Project Portfolio</li>
                <li>✓ Resume Preview</li>
              </ul>

              <div className="mt-auto">
                <Button
                  text="Open Manual Builder"
                  onClick={() => navigate("/dashboard")}
                />
              </div>

            </div>

          </Card>

        </div>

      </div>
    </MainLayout>
  );
}

export default HomePage;