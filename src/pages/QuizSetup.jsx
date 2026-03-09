import { Link, useNavigate } from "react-router-dom";

const systems = [
  { id: "oseo", name: "Sistema óseo", color: "#E3DAC9" },
  { id: "muscular", name: "Sistema muscular", color: "#C54D4D" },
  { id: "nervioso", name: "Sistema nervioso", color: "#00FFFF" },
  { id: "digestivo", name: "Sistema digestivo", color: "#FFFF00" },
];

export default function QuizSetup() {
  const navigate = useNavigate();

  const handleSelect = (systemId) => {
    navigate(`/quiz/count/${systemId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e3a4f] via-[#263246] to-[#1c2431] px-5 pt-6 pb-24 text-white">
      <div className="relative flex items-center justify-center mb-8">
        <Link
          to="/home"
          className="absolute left-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition"
        >
          <span className="text-white text-lg leading-none">←</span>
        </Link>

        <h1 className="text-lg font-semibold">Selecciona un sistema</h1>
      </div>

      <div className="mx-auto w-full max-w-[360px] space-y-4">
        {systems.map((system) => (
          <button
            key={system.id}
            onClick={() => handleSelect(system.id)}
            className="w-full rounded-2xl bg-white/10 border border-white/10 p-4 text-left hover:bg-white/15 transition"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full" style={{ backgroundColor: system.color }}/>
              <div>
                <p className="font-semibold">{system.name}</p>
                <p className="text-sm text-white/60">Comenzar quiz de este sistema</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}