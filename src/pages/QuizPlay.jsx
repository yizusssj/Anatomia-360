import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const questionBank = {
  oseo: [
    {
      question: "¿Cuál es el hueso más largo del cuerpo humano?",
      options: ["Tibia", "Fémur", "Húmero", "Radio"],
      correct: "Fémur",
    },
    {
      question: "¿Qué hueso protege el cerebro?",
      options: ["Mandíbula", "Clavícula", "Craneo", "Esternón"],
      correct: "Craneo",
    },
    {
      question: "¿Dónde se encuentra la rótula?",
      options: ["Codo", "Rodilla", "Hombro", "Cadera"],
      correct: "Rodilla",
    },
    {
      question: "¿Cuál es un hueso del brazo?",
      options: ["Fémur", "Peroné", "Húmero", "Tibia"],
      correct: "Húmero",
    },
    {
      question: "¿Qué hueso forma parte de la caja torácica?",
      options: ["Costilla", "Escápula", "Radio", "Ulna"],
      correct: "Costilla",
    },
  ],
  muscular: [
    {
      question: "¿Cuál es un músculo del brazo?",
      options: ["Bíceps", "Fémur", "Tibia", "Parietal"],
      correct: "Bíceps",
    },
    {
      question: "¿Qué músculo se usa para sonreír?",
      options: ["Masetero", "Cigomático", "Trapecio", "Glúteo"],
      correct: "Cigomático",
    },
    {
      question: "¿Dónde está el cuádriceps?",
      options: ["Brazo", "Espalda", "Muslo", "Cuello"],
      correct: "Muslo",
    },
    {
      question: "¿Cuál es un músculo del abdomen?",
      options: ["Recto abdominal", "Húmero", "Radio", "Deltoides"],
      correct: "Recto abdominal",
    },
    {
      question: "¿Cuál músculo ayuda a encoger los hombros?",
      options: ["Trapecio", "Bíceps", "Gemelo", "Pectoral"],
      correct: "Trapecio",
    },
  ],
  nervioso: [
    {
      question: "¿Cuál es el órgano principal del sistema nervioso?",
      options: ["Corazón", "Cerebro", "Hígado", "Pulmón"],
      correct: "Cerebro",
    },
    {
      question: "¿Qué conecta el cerebro con el resto del cuerpo?",
      options: ["Médula espinal", "Fémur", "Tráquea", "Costilla"],
      correct: "Médula espinal",
    },
    {
      question: "¿Qué célula transmite impulsos nerviosos?",
      options: ["Neurona", "Miocito", "Osteocito", "Plaqueta"],
      correct: "Neurona",
    },
    {
      question: "¿Cuál de estos pertenece al sistema nervioso?",
      options: ["Nervio ciático", "Fémur", "Bíceps", "Estómago"],
      correct: "Nervio ciático",
    },
    {
      question: "¿Qué sistema controla reflejos y movimientos?",
      options: ["Nervioso", "Digestivo", "Óseo", "Muscular"],
      correct: "Nervioso",
    },
  ],
  digestivo: [
    {
      question: "¿Dónde inicia la digestión?",
      options: ["Intestino", "Estómago", "Boca", "Hígado"],
      correct: "Boca",
    },
    {
      question: "¿Qué órgano produce bilis?",
      options: ["Páncreas", "Estómago", "Hígado", "Riñón"],
      correct: "Hígado",
    },
    {
      question: "¿Dónde ocurre gran parte de la absorción de nutrientes?",
      options: ["Esófago", "Intestino delgado", "Boca", "Faringe"],
      correct: "Intestino delgado",
    },
    {
      question: "¿Qué órgano mezcla los alimentos con jugos gástricos?",
      options: ["Corazón", "Pulmón", "Estómago", "Cerebro"],
      correct: "Estómago",
    },
    {
      question: "¿Qué sistema se encarga de procesar alimentos?",
      options: ["Digestivo", "Óseo", "Nervioso", "Muscular"],
      correct: "Digestivo",
    },
  ],
};

const labels = {
  oseo: "Sistema óseo",
  muscular: "Sistema muscular",
  nervioso: "Sistema nervioso",
  digestivo: "Sistema digestivo",
};

export default function QuizPlay() {
  const navigate = useNavigate();
  const { systemId, count } = useParams();

  const questions = useMemo(() => {
    const selected = questionBank[systemId] || [];
    return selected.slice(0, Number(count));
  }, [systemId, count]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;

  const handleNext = () => {
    if (!selectedOption) return;

    let newScore = score;
    if (selectedOption === currentQuestion.correct) {
      newScore += 1;
      setScore(newScore);
    }

    if (currentIndex + 1 < total) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption("");
    } else {
      navigate(`/quiz/result/${systemId}/${count}/${newScore}`);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#2e3a4f] via-[#263246] to-[#1c2431] px-5 pt-6 text-white">
        <p>No hay preguntas disponibles.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e3a4f] via-[#263246] to-[#1c2431] px-5 pt-6 pb-24 text-white">
      <div className="relative flex items-center justify-center mb-6">
        <Link
          to={`/quiz/count/${systemId}`}
          className="absolute left-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition"
        >
          <span className="text-white text-lg leading-none">←</span>
        </Link>

        <h1 className="text-lg font-semibold">Quiz</h1>
      </div>

      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-4 rounded-2xl bg-white/10 border border-white/10 p-4">
          <p className="text-sm text-white/60">{labels[systemId]}</p>
          <p className="font-semibold mt-1">
            Pregunta {currentIndex + 1} de {total}
          </p>
        </div>

        <div className="mb-4 h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-white transition-all"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>

        <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
          <p className="text-lg font-semibold leading-snug">
            {currentQuestion.question}
          </p>

          <div className="mt-5 space-y-3">
            {currentQuestion.options.map((option) => {
              const active = selectedOption === option;
              return (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className={`w-full rounded-xl px-4 py-3 text-left border transition ${
                    active
                      ? "bg-white text-[#1c2431] border-white"
                      : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className="mt-6 w-full rounded-xl bg-white text-[#1c2431] py-3 font-semibold disabled:opacity-50"
          >
            {currentIndex + 1 === total ? "Finalizar" : "Siguiente"}
          </button>
        </div>
      </div>
    </div>
  );
}