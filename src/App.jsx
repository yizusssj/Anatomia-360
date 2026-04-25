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
import ProtectedRoute from "./components/ProtectedRoute";

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

        {/* App protegida */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/setup"
          element={
            <ProtectedRoute>
              <QuizSetup />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/count/:systemId"
          element={
            <ProtectedRoute>
              <QuizCount />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/play/:systemId/:count"
          element={
            <ProtectedRoute>
              <QuizPlay />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/result/:systemId/:count/:score"
          element={
            <ProtectedRoute>
              <QuizResult />
            </ProtectedRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}