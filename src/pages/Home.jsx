import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logochat.png";
import { getUserProfile } from "../services/userProfileService";
import {
  getUserProgress,
  getLastQuizAttempt,
} from "../services/quizService";

export default function Home() {
  const [userProfile, setUserProfile] = useState(null);
  const [progressData, setProgressData] = useState({});
  const [lastQuiz, setLastQuiz] = useState(null);
  const [loadingHomeData, setLoadingHomeData] = useState(true);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");

        if (!user.uid) {
          setLoadingHomeData(false);
          return;
        }

        const [profile, progress, latestQuiz] = await Promise.all([
          getUserProfile(user.uid),
          getUserProgress(user.uid),
          getLastQuizAttempt(user.uid),
        ]);

        setUserProfile(profile);
        setProgressData(progress || {});
        setLastQuiz(latestQuiz || null);
      } catch (error) {
        console.error("HOME DATA ERROR:", error);
      } finally {
        setLoadingHomeData(false);
      }
    };

    loadHomeData();
  }, []);

  const systems = [
    { id: "oseo", label: "Sistema óseo" },
    { id: "muscular", label: "Sistema muscular" },
    { id: "nervioso", label: "Sistema nervioso" },
    { id: "digestivo", label: "Sistema digestivo" },
  ];

  const summary = useMemo(() => {
    const entries = Object.entries(progressData || {});

    if (!entries.length) {
      return {
        average: 0,
        bestSystem: "Sin progreso aún",
        attempts: 0,
      };
    }

    const totalAverage = Math.round(
      entries.reduce((acc, [, value]) => acc + (value.average || 0), 0) /
        entries.length
    );

    let bestSystemId = "";
    let bestValue = -1;
    let totalAttempts = 0;

    entries.forEach(([systemId, value]) => {
      totalAttempts += value.attempts || 0;

      if ((value.average || 0) > bestValue) {
        bestValue = value.average || 0;
        bestSystemId = systemId;
      }
    });

    const bestSystemLabel =
      systems.find((s) => s.id === bestSystemId)?.label || "Sin progreso aún";

    return {
      average: totalAverage,
      bestSystem: bestSystemLabel,
      attempts: totalAttempts,
    };
  }, [progressData]);

  const lastQuizLabel = useMemo(() => {
    if (!lastQuiz?.systemId) return "Sin quizzes registrados";
    return (
      systems.find((s) => s.id === lastQuiz.systemId)?.label ||
      "Sistema desconocido"
    );
  }, [lastQuiz]);

  return (
    <div className="min-h-screen bg-[#0b0f15] text-white px-6 pt-6 pb-24">
      <div className="mx-auto w-full max-w-[420px]">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Anatomía 360"
            className="w-[260px] max-w-[80vw] object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.20)]"
          />
        </div>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
            <p className="text-white/60 text-sm">
              {loadingHomeData ? "Cargando..." : "Bienvenido de nuevo"}
            </p>
            <h1 className="text-2xl font-extrabold mt-1">
              {userProfile?.username || "Usuario"}
            </h1>
            <p className="text-white/70 text-sm mt-1">
              {userProfile?.email || "Sin correo disponible"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
              <p className="text-white/60 text-xs">Avance general</p>
              <p className="text-2xl font-extrabold mt-1">
                {summary.average}%
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
              <p className="text-white/60 text-xs">Intentos</p>
              <p className="text-2xl font-extrabold mt-1">
                {summary.attempts}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
            <p className="text-white/60 text-xs">Sistema con mayor avance</p>
            <p className="text-base font-semibold mt-1">
              {summary.bestSystem}
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
            <p className="text-white/60 text-xs">Último quiz realizado</p>
            <p className="text-base font-semibold mt-1">{lastQuizLabel}</p>
            <p className="text-white/70 text-sm mt-1">
              {lastQuiz
                ? `${lastQuiz.score}/${lastQuiz.questionCount} correctas · ${lastQuiz.percent}%`
                : "Aún no has realizado quizzes."}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <Link
            to="/quiz/setup"
            className="flex w-full items-center justify-center rounded-2xl bg-white text-[#1c2431] py-3 font-semibold"
          >
            Continuar estudiando
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/progress"
              className="rounded-2xl bg-white/10 border border-white/10 p-4 hover:bg-white/15 transition"
            >
              <p className="text-sm font-semibold">Mi progreso</p>
              <p className="text-white/60 text-xs mt-1">
                Ver promedio e intentos
              </p>
            </Link>

            <Link
              to="/explore"
              className="rounded-2xl bg-white/10 border border-white/10 p-4 hover:bg-white/15 transition"
            >
              <p className="text-sm font-semibold">Explorar</p>
              <p className="text-white/60 text-xs mt-1">
                Modelos y sistemas
              </p>
            </Link>

            <Link
              to="/quiz/setup"
              className="rounded-2xl bg-white/10 border border-white/10 p-4 hover:bg-white/15 transition"
            >
              <p className="text-sm font-semibold">Quiz</p>
              <p className="text-white/60 text-xs mt-1">
                Iniciar evaluación
              </p>
            </Link>

            <Link
              to="/settings"
              className="rounded-2xl bg-white/10 border border-white/10 p-4 hover:bg-white/15 transition"
            >
              <p className="text-sm font-semibold">Ajustes</p>
              <p className="text-white/60 text-xs mt-1">
                Perfil y sesión
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white/10 border border-white/10 p-4">
          <p className="text-white/60 text-xs">Resumen rápido</p>
          <p className="text-sm text-white/85 mt-2 leading-relaxed">
            {summary.attempts > 0
              ? `Llevas ${summary.attempts} intentos registrados, tu mejor desempeño actual está en ${summary.bestSystem} y tu último quiz fue de ${lastQuizLabel}.`
              : "Aún no hay quizzes registrados. Comienza uno para generar progreso y resultados en tu cuenta."}
          </p>
        </div>
      </div>
    </div>
  );
}