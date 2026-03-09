import { Link, useNavigate, useParams } from "react-router-dom";

const labels = {
  oseo: "Sistema óseo",
  muscular: "Sistema muscular",
  nervioso: "Sistema nervioso",
  digestivo: "Sistema digestivo",
};

export default function QuizCount() {
  const navigate = useNavigate();
  const { systemId } = useParams();

  const handleSelectCount = (count) => {
    navigate(`/quiz/play/${systemId}/${count}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e3a4f] via-[#263246] to-[#1c2431] px-5 pt-6 pb-24 text-white">
      <div className="relative flex items-center justify-center mb-8">
        <Link
          to="/quiz/setup"
          className="absolute left-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition"
        >
          <span className="text-white text-lg leading-none">←</span>
        </Link>

        <h1 className="text-lg font-semibold">Cantidad de preguntas</h1>
      </div>

      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-6 rounded-2xl bg-white/10 border border-white/10 p-4">
          <p className="text-white/60 text-sm">Sistema seleccionado</p>
          <p className="font-semibold mt-1">{labels[systemId] || "Sistema"}</p>
        </div>

        <div className="space-y-4">
          {[5, 10, 15].map((count) => (
            <button
              key={count}
              onClick={() => handleSelectCount(count)}
              className="w-full rounded-2xl bg-white/10 border border-white/10 p-4 text-left hover:bg-white/15 transition"
            >
              <p className="font-semibold">{count} preguntas</p>
              <p className="text-sm text-white/60">Iniciar quiz con {count} preguntas</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}