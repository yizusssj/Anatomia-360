import { Link, useParams } from "react-router-dom";

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