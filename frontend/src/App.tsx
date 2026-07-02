import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import AIResumePage from "./pages/AIResume/AIResumePage";
import ManualResumePage from "./pages/ManualResume/ManualResumePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/ai" element={<AIResumePage />} />

        <Route path="/manual" element={<ManualResumePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;