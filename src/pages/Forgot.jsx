import { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "../services/authService";
import logo from "../assets/logochat.png";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Ingresa tu correo.");
      return;
    }

    try {
      setLoading(true);
      await resetPassword(email);
      setSuccess("Te enviamos un correo para restablecer tu contraseña.");
    } catch (err) {
      console.error("RESET PASSWORD ERROR:", err);

      if (err.code === "auth/invalid-email") {
        setError("Correo no válido.");
      } else if (err.code === "auth/user-not-found") {
        setError("No existe una cuenta con ese correo.");
      } else {
        setError("No se pudo enviar el correo de recuperación.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f15] text-white">
      <div className="mx-auto w-full max-w-md px-6 pt-6 pb-24">
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Anatomía 360"
            className="w-[260px] max-w-[80vw] object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.20)]"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-extrabold">RECUPERA TU CONTRASEÑA</h1>
          <p className="mt-2 text-white/70 text-sm">
            Ingresa tu correo y te enviaremos un enlace para restablecerla
          </p>
        </div>

        <form onSubmit={handleReset} className="mt-10 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Correo"
          />

          {error && (
            <p className="text-red-400 text-sm font-medium">{error}</p>
          )}

          {success && (
            <p className="text-green-400 text-sm font-medium">{success}</p>
          )}

          <div className="mt-10 flex items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition"
            >
              Volver
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Enviar correo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}