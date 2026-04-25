import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { saveQuizAttempt } from "../services/quizService";

const labels = {
  oseo: "Sistema óseo",
  muscular: "Sistema muscular",
  nervioso: "Sistema nervioso",
  digestivo: "Sistema digestivo",
};

export default function QuizResult() {
  const { systemId, count, score } = useParams();

  const total = Number(count);
  const result = Number(score);
  const percent = Math.round((result / total) * 100);

  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const uid = user.uid;

  const saveKey = `quiz_saved_${uid}_${systemId}_${count}_${score}`;

  if (sessionStorage.getItem(saveKey)) return;

  const saveResult = async () => {
    try {
      if (uid) {
        await saveQuizAttempt({
          uid,
          systemId,
          questionCount: total,
          score: result,
          percent,
        });
      }

      // seguimos guardando local para que tu pantalla de progreso siga jalando ahorita
      const saved = JSON.parse(localStorage.getItem("quizProgress") || "{}");

      const current = saved[systemId] || {
        attempts: 0,
        totalScore: 0,
        average: 0,
      };

      const attempts = current.attempts + 1;
      const totalScore = current.totalScore + percent;
      const average = Math.round(totalScore / attempts);

      const updated = {
        ...saved,
        [systemId]: {
          attempts,
          totalScore,
          average,
        },
      };

      localStorage.setItem("quizProgress", JSON.stringify(updated));
      sessionStorage.setItem(saveKey, "1");
    } catch (err) {
      console.error("SAVE QUIZ ERROR:", err);
    }
  };

  saveResult();
}, [systemId, count, score, total, result, percent]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e3a4f] via-[#263246] to-[#1c2431] px-5 pt-6 pb-24 text-white">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold">Resultado</h1>
          <p className="text-white/60 mt-2">{labels[systemId]}</p>
        </div>

        <div className="mt-8 rounded-3xl bg-white/10 border border-white/10 p-8 text-center">
          <p className="text-white/60 text-sm">Puntaje obtenido</p>
          <p className="text-5xl font-extrabold mt-2">
            {result}/{total}
          </p>
          <p className="text-xl font-semibold mt-3">{percent}%</p>
        </div>

        <div className="mt-8 space-y-4">
          <Link
            to="/quiz/setup"
            className="block w-full text-center rounded-2xl bg-white text-[#1c2431] py-3 font-semibold"
          >
            Hacer otro quiz
          </Link>

          <Link
            to="/progress"
            className="block w-full text-center rounded-2xl bg-white/10 border border-white/10 py-3 font-semibold"
          >
            Ver mi progreso
          </Link>

          <Link
            to="/home"
            className="block w-full text-center rounded-2xl bg-white/10 border border-white/10 py-3 font-semibold"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}