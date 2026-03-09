import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Forgot from "./pages/Forgot";
import VerifyCode from "./pages/verifyCode";
import ResetSuccess from "./pages/resetSuccess";
import ResetPassword from "./pages/resetPassword";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Quiz from "./pages/quiz";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import QuizSetup from "./pages/QuizSetup";
import QuizCount from "./pages/QuizCount";
import QuizPlay from "./pages/QuizPlay";
import QuizResult from "./pages/QuizResult";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/verify" element={<VerifyCode />} />
        <Route path="/reset-success" element={<ResetSuccess />} />
        <Route path="/reset" element={<ResetPassword />} />

        {/* App */}
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/quiz/setup" element={<QuizSetup />} />
        <Route path="/quiz/count/:systemId" element={<QuizCount />} />
        <Route path="/quiz/play/:systemId/:count" element={<QuizPlay />} />
        <Route path="/quiz/result/:systemId/:count/:score" element={<QuizResult />} />
        

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
