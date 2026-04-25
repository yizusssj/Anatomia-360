import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getUsedQuestionIds,
  saveUsedQuestionIds,
} from "../services/quizService";
import { questionBank } from "../data/questionBank";
import { extraQuestionBank } from "../data/extraQuestionBank";
import { extraQuestionBank2 } from "../data/extraQuestionBank2";
import { extraQuestionBank3 } from "../data/extraQuestionBank3";

const QUESTION_TIME = 20;

const labels = {
  oseo: "Sistema óseo",
  muscular: "Sistema muscular",
  nervioso: "Sistema nervioso",
  digestivo: "Sistema digestivo",
};

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function QuizPlay() {
  const navigate = useNavigate();
  const { systemId, count } = useParams();

  const [questions, setQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const uid = user.uid;

        const allQuestions = [
        ...(questionBank[systemId] || []),
        ...(extraQuestionBank[systemId] || []),
        ...(extraQuestionBank2[systemId] || []),
        ...(extraQuestionBank3[systemId] || []),
        ];

        if (!uid) {
          const selected = shuffleArray(allQuestions)
            .slice(0, Number(count))
            .map((question) => ({
              ...question,
              options: shuffleArray(question.options),
            }));

          setQuestions(selected);
          setLoadingQuestions(false);
          return;
        }

        const usedIds = await getUsedQuestionIds(uid, systemId);

        let availableQuestions = allQuestions.filter(
          (question) => !usedIds.includes(question.id)
        );

        if (availableQuestions.length < Number(count)) {
          availableQuestions = allQuestions;
        }

        const selectedQuestions = shuffleArray(availableQuestions)
          .slice(0, Number(count))
          .map((question) => ({
            ...question,
            options: shuffleArray(question.options),
          }));

        setQuestions(selectedQuestions);
      } catch (error) {
        console.error("LOAD QUESTIONS ERROR:", error);
      } finally {
        setLoadingQuestions(false);
      }
    };

    loadQuestions();
  }, [systemId, count]);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;

  useEffect(() => {
    if (!currentQuestion || isAnswered) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsAnswered(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isAnswered, currentQuestion]);

  const handleSelectOption = (option) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = async () => {
    if (!currentQuestion) return;

    if (currentIndex + 1 < total) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption("");
      setIsAnswered(false);
      setTimeLeft(QUESTION_TIME);
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const uid = user.uid;

      if (uid) {
        const usedIds = questions.map((question) => question.id);
        await saveUsedQuestionIds(uid, systemId, usedIds);
      }
    } catch (error) {
      console.error("SAVE USED QUESTIONS ERROR:", error);
    }

    navigate(`/quiz/result/${systemId}/${count}/${score}`);
  };

  if (loadingQuestions) {
    return (
      <div className="min-h-screen bg-[#0b0f15] text-white px-6 pt-6 pb-24">
        <div className="mx-auto max-w-md text-center mt-20">
          Cargando preguntas...
        </div>
      </div>
    );
  }

  if (!questions.length || !currentQuestion) {
    return (
      <div className="min-h-screen bg-[#0b0f15] text-white px-6 pt-6 pb-24">
        <div className="mx-auto max-w-md">
          <div className="relative flex items-center justify-center mb-8">
            <Link
              to="/quiz/setup"
              className="absolute left-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition"
              aria-label="Volver"
            >
              <span className="text-white text-lg leading-none">←</span>
            </Link>

            <h1 className="text-lg font-semibold">Quiz</h1>
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/10 p-5 text-center">
            <p className="text-white/80">
              No hay preguntas disponibles para este sistema.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);

  const getOptionClass = (option) => {
    if (!isAnswered) {
      return "bg-white/10 border-white/10 hover:bg-white/15";
    }

    if (option === currentQuestion.correct) {
      return "bg-green-500/20 border-green-400";
    }

    if (option === selectedOption && option !== currentQuestion.correct) {
      return "bg-red-500/20 border-red-400";
    }

    return "bg-white/10 border-white/10 opacity-70";
  };

  return (
    <div className="min-h-screen bg-[#0b0f15] text-white px-6 pt-6 pb-24">
      <div className="mx-auto max-w-md">
        <div className="relative flex items-center justify-center mb-8">
          <Link
            to={`/quiz/count/${systemId}`}
            className="absolute left-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition"
            aria-label="Volver"
          >
            <span className="text-white text-lg leading-none">←</span>
          </Link>

          <h1 className="text-lg font-semibold">{labels[systemId] || "Quiz"}</h1>
        </div>

        <div className="mb-5 space-y-3">
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>
              Pregunta {currentIndex + 1} de {total}
            </span>
            <span>{timeLeft}s</span>
          </div>

          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
          <p className="text-white/60 text-sm mb-2">
            {labels[systemId] || "Sistema"}
          </p>

          <h2 className="text-lg font-semibold leading-relaxed">
            {currentQuestion.question}
          </h2>

          <div className="mt-5 space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelectOption(option)}
                disabled={isAnswered}
                className={`w-full text-left rounded-2xl border px-4 py-3 transition ${getOptionClass(
                  option
                )}`}
              >
                {option}
              </button>
            ))}
          </div>

          {isAnswered && (
            <div className="mt-5 rounded-xl bg-black/20 border border-white/10 p-4">
              <p className="text-sm font-semibold text-white mb-1">
                {selectedOption === currentQuestion.correct
                  ? "Respuesta correcta"
                  : "Respuesta incorrecta"}
              </p>

              <p className="text-sm text-white/75 leading-relaxed">
                {currentQuestion.explanation}
              </p>

              <p className="text-xs text-white/45 mt-3">
                Fuente: {currentQuestion.sourceRef}
              </p>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              disabled={!isAnswered}
              className="inline-flex items-center justify-center rounded-full bg-white text-[#1c2431] px-6 py-2.5 text-sm font-semibold transition disabled:opacity-50"
            >
              {currentIndex + 1 === total ? "Finalizar" : "Siguiente"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}