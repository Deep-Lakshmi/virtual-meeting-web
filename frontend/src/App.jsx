import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayouts from "./layout/MainLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";

export default function App() {
  return (
    <MainLayouts>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </MainLayouts>
  );
}
