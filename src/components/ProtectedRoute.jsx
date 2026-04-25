import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!user.uid) {
    return <Navigate to="/" replace />;
  }

  return children;
}