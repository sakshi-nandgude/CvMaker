import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import AIResumePage from "./pages/AIResume/AiResumePage";
import MasterProfilePage from "./pages/MasterProfile/MasterProfilePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/ai" element={<AIResumePage />} />

        <Route path="/profile" element={<MasterProfilePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;