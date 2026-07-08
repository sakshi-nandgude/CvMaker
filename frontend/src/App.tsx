import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

import ProfileSection from "./features/dashboard/pages/ProfileSection";
import ExperienceSection from "./features/dashboard/pages/ExperienceSection";
import ProjectSection from "./features/dashboard/pages/ProjectSection";
import SkillSection from "./features/dashboard/pages/SkillSection";
import EducationSection from "./features/dashboard/pages/EducationSection";
import CertificationSection from "./features/dashboard/pages/CertificationSection";
import ResumeSection from "./features/dashboard/pages/ResumeSection";
import SettingsSection from "./features/dashboard/pages/SettingsSection";

import AIResumePage from "./features/ai/pages/AIResumePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<DashboardPage />}>
  <Route index element={<ProfileSection />} />

  <Route path="profile" element={<ProfileSection />} />
  <Route path="experience" element={<ExperienceSection />} />
  <Route path="projects" element={<ProjectSection />} />
  <Route path="skills" element={<SkillSection />} />
  <Route path="education" element={<EducationSection />} />
  <Route path="certifications" element={<CertificationSection />} />
  <Route path="resume" element={<ResumeSection />} />
  <Route path="settings" element={<SettingsSection />} />

  <Route
    path="ai-resume"
    element={<AIResumePage />}
  />
</Route>


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;