import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { createUserProfile } from "../services/userProfileService";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password) {
      setError("Completa todos los campos.");
      return;
    }

    try {
      setLoading(true);

      const user = await registerUser(email, password);
      await createUserProfile(user, username);

      // guardado rápido local, luego lo movemos a Firestore
      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: user.uid,
          username,
          email: user.email,
        })
      );

      navigate("/home");
    } catch (err) {
      console.error("REGISTER ERROR:", err);
      console.error("CODE:", err.code);
      console.error("MESSAGE:", err.message);

      setError(`${err.code} - ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f15] text-white">
      <div className="mx-auto w-full max-w-md px-6 pt-10 pb-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">INTRODUCE TUS DATOS</h1>
          <p className="mt-2 text-white/70 text-sm">
            Crea tu cuenta para continuar
          </p>
        </div>

        <form onSubmit={handleRegister} className="mt-10 space-y-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Usuario"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Correo"
          />

          <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 pr-20 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Contraseña"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white/70 hover:text-white transition"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>

          {error && (
            <p className="text-red-400 text-sm font-medium">{error}</p>
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
              {loading ? "Creando..." : "Continuar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}