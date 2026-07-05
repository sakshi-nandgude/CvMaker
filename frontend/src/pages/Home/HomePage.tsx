import { useNavigate } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

function HomePage() {

  const navigate = useNavigate();

  return (
    <MainLayout>

      <div className="mb-16 text-center">

        <h1 className="text-5xl font-bold">
          CV Maker AI
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Build ATS Optimised Resumes in Minutes
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        <Card>

          <h2 className="mb-4 text-2xl font-bold">
            AI Resume
          </h2>

          <p className="mb-8 text-gray-600">
            Upload a job description and let AI tailor your resume.
          </p>

          <Button
            text="Continue"
            onClick={() => navigate("/ai")}
          />

        </Card>

        <Card>

          <h2 className="mb-4 text-2xl font-bold">
            Manual Resume
          </h2>

          <p className="mb-8 text-gray-600">
            Create your resume manually section by section.
          </p>

          <Button
            text="Continue"
            onClick={() => navigate("/manual")}
          />

        </Card>

      </div>

    </MainLayout>
  );
}

export default HomePage;