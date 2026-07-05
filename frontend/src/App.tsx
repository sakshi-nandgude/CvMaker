import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import DashboardPage from "./pages/DashboardPage";

import AIResumePage from "./pages/AIResume/AiResumePage";
import MasterProfilePage from "./pages/MasterProfile/MasterProfilePage";

import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* New Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Existing pages (temporary until migrated) */}
        <Route path="/profile" element={<MasterProfilePage />} />
        <Route path="/ai" element={<AIResumePage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;