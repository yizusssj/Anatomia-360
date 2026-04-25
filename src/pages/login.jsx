import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import logo from "../assets/logochat.png";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Completa correo y contraseña.");
      return;
    }

    try {
      setLoading(true);

      const user = await loginUser(email, password);

      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: user.uid,
          email: user.email,
        })
      );

      navigate("/home");
    } catch (err) {
      console.error("LOGIN ERROR:", err);

      if (err.code === "auth/invalid-credential") {
        setError("Correo o contraseña incorrectos.");
      } else if (err.code === "auth/invalid-email") {
        setError("Correo no válido.");
      } else {
        setError("No se pudo iniciar sesión.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f15] text-white">
      <div className="mx-auto w-full max-w-md px-6 pt-4 pb-24">
        <div className="flex justify-center mb-2">
          <img
            src={logo}
            alt="Anatomía 360"
            className="w-[320px] max-w-[85vw] object-contain mx-auto"
          />
        </div>

        <div className="relative -top-12">
          <div className="mt-2">
            <h1 className="text-4xl font-extrabold leading-[1.05]">
              HOLA
              <br />
              ¡BIENVENIDO!
            </h1>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
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

            <div className="text-sm text-white">
              <Link to="/forgot" className="hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

            <div className="mt-10 flex items-center justify-between gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition"
              >
                Registrarse
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition disabled:opacity-50"
              >
                {loading ? "Entrando..." : "Continuar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}