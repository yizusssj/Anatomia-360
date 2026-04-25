import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getUsedQuestionIds,
  saveUsedQuestionIds,
} from "../services/quizService";

const questionBank = {
  oseo: [
    {
      id: "oseo_001",
      question: "¿Cuál es el hueso más largo del cuerpo humano?",
      options: ["Tibia", "Fémur", "Húmero", "Radio"],
      correct: "Fémur",
      explanation:
        "El fémur es el hueso más largo y resistente del cuerpo humano.",
    },
    {
      id: "oseo_002",
      question: "¿Qué hueso protege el cerebro?",
      options: ["Mandíbula", "Clavícula", "Craneo", "Esternón"],
      correct: "Craneo",
      explanation:
        "El cráneo protege el encéfalo y forma la estructura ósea de la cabeza.",
    },
    {
      id: "oseo_003",
      question: "¿Dónde se encuentra la rótula?",
      options: ["Codo", "Rodilla", "Hombro", "Cadera"],
      correct: "Rodilla",
      explanation:
        "La rótula está en la parte anterior de la rodilla y ayuda a protegerla.",
    },
    {
      id: "oseo_004",
      question: "¿Cuál es un hueso del brazo?",
      options: ["Fémur", "Peroné", "Húmero", "Tibia"],
      correct: "Húmero",
      explanation:
        "El húmero es el hueso largo del brazo, entre el hombro y el codo.",
    },
    {
      id: "oseo_005",
      question: "¿Qué hueso forma parte de la caja torácica?",
      options: ["Costilla", "Escápula", "Radio", "Ulna"],
      correct: "Costilla",
      explanation:
        "Las costillas forman la caja torácica y protegen pulmones y corazón.",
    },
    {
      id: "oseo_006",
      question: "¿Qué estructura ósea conecta el brazo con el tronco por delante?",
      options: ["Escápula", "Clavícula", "Esternón", "Radio"],
      correct: "Clavícula",
      explanation:
        "La clavícula une el miembro superior con el tronco a través del esternón y la escápula.",
    },
    {
      id: "oseo_007",
      question: "¿Cuál de estos huesos pertenece al antebrazo?",
      options: ["Peroné", "Ulna", "Fémur", "Escápula"],
      correct: "Ulna",
      explanation:
        "La ulna o cúbito forma parte del antebrazo junto con el radio.",
    },
    {
      id: "oseo_008",
      question: "¿Qué hueso se articula con la tibia para formar la rodilla?",
      options: ["Radio", "Húmero", "Fémur", "Clavícula"],
      correct: "Fémur",
      explanation:
        "La articulación de la rodilla involucra al fémur, la tibia y la rótula.",
    },
    {
      id: "oseo_009",
      question: "¿Cuál es un hueso del cráneo facial?",
      options: ["Parietal", "Occipital", "Maxilar", "Temporal"],
      correct: "Maxilar",
      explanation:
        "El maxilar pertenece al viscerocráneo o esqueleto facial.",
    },
    {
      id: "oseo_010",
      question: "¿Qué hueso forma la frente?",
      options: ["Temporal", "Parietal", "Frontal", "Esfenoides"],
      correct: "Frontal",
      explanation:
        "El hueso frontal forma la frente y parte del techo orbitario.",
    },
    {
      id: "oseo_011",
      question: "¿Cuál de estos huesos pertenece a la pierna, no al muslo?",
      options: ["Fémur", "Tibia", "Coxal", "Húmero"],
      correct: "Tibia",
      explanation:
        "La tibia pertenece a la pierna; el fémur pertenece al muslo.",
    },
    {
      id: "oseo_012",
      question: "¿Qué hueso se localiza en la región lateral de la pierna?",
      options: ["Tibia", "Rótula", "Peroné", "Ulna"],
      correct: "Peroné",
      explanation:
        "El peroné o fíbula se encuentra lateral a la tibia.",
    },
    {
      id: "oseo_013",
      question: "¿Qué estructura ósea protege principalmente al corazón y pulmones?",
      options: ["Pelvis", "Caja torácica", "Craneo", "Escápula"],
      correct: "Caja torácica",
      explanation:
        "La caja torácica protege los órganos torácicos como corazón y pulmones.",
    },
    {
      id: "oseo_014",
      question: "¿Cuál es el hueso principal de la región del hombro posterior?",
      options: ["Escápula", "Clavícula", "Esternón", "Radio"],
      correct: "Escápula",
      explanation:
        "La escápula forma gran parte del hombro en su porción posterior.",
    },
    {
      id: "oseo_015",
      question: "¿Qué hueso forma parte de la pelvis?",
      options: ["Iliaco", "Radio", "Esternón", "Temporal"],
      correct: "Iliaco",
      explanation:
        "El hueso iliaco integra el hueso coxal y forma parte de la pelvis.",
    },
  ],

  muscular: [
    {
      id: "muscular_001",
      question: "¿Cuál es un músculo del brazo?",
      options: ["Bíceps", "Fémur", "Tibia", "Parietal"],
      correct: "Bíceps",
      explanation:
        "El bíceps braquial se localiza en la cara anterior del brazo.",
    },
    {
      id: "muscular_002",
      question: "¿Qué músculo se usa para sonreír?",
      options: ["Masetero", "Cigomático", "Trapecio", "Glúteo"],
      correct: "Cigomático",
      explanation:
        "El músculo cigomático eleva la comisura labial durante la sonrisa.",
    },
    {
      id: "muscular_003",
      question: "¿Dónde está el cuádriceps?",
      options: ["Brazo", "Espalda", "Muslo", "Cuello"],
      correct: "Muslo",
      explanation:
        "El cuádriceps femoral se localiza en la región anterior del muslo.",
    },
    {
      id: "muscular_004",
      question: "¿Cuál es un músculo del abdomen?",
      options: ["Recto abdominal", "Húmero", "Radio", "Deltoides"],
      correct: "Recto abdominal",
      explanation:
        "El recto abdominal forma parte de la pared anterior del abdomen.",
    },
    {
      id: "muscular_005",
      question: "¿Cuál músculo ayuda a encoger los hombros?",
      options: ["Trapecio", "Bíceps", "Gemelo", "Pectoral"],
      correct: "Trapecio",
      explanation:
        "El trapecio eleva la escápula y participa en el movimiento del hombro.",
    },
    {
      id: "muscular_006",
      question: "¿Qué músculo es principal en la masticación?",
      options: ["Masetero", "Deltoides", "Sóleo", "Pectoral mayor"],
      correct: "Masetero",
      explanation:
        "El masetero es uno de los músculos principales de la masticación.",
    },
    {
      id: "muscular_007",
      question: "¿Qué músculo cubre el hombro y participa en la abducción del brazo?",
      options: ["Trapecio", "Deltoides", "Bíceps", "Sartorio"],
      correct: "Deltoides",
      explanation:
        "El deltoides cubre el hombro y es clave en la abducción del brazo.",
    },
    {
      id: "muscular_008",
      question: "¿Cuál músculo se localiza en la región pectoral?",
      options: ["Pectoral mayor", "Recto femoral", "Trapecio", "Glúteo medio"],
      correct: "Pectoral mayor",
      explanation:
        "El pectoral mayor es un músculo superficial del tórax anterior.",
    },
    {
      id: "muscular_009",
      question: "¿Qué músculo se encuentra en la pantorrilla?",
      options: ["Gastrocnemio", "Deltoides", "Bíceps", "Pectoral"],
      correct: "Gastrocnemio",
      explanation:
        "El gastrocnemio forma parte de la pantorrilla junto con el sóleo.",
    },
    {
      id: "muscular_010",
      question: "¿Qué músculo es conocido como 'gemelo'?",
      options: ["Gastrocnemio", "Trapecio", "Masetero", "Temporal"],
      correct: "Gastrocnemio",
      explanation:
        "El gastrocnemio suele llamarse coloquialmente gemelo.",
    },
    {
      id: "muscular_011",
      question: "¿Cuál músculo extiende la rodilla como parte del cuádriceps?",
      options: ["Recto femoral", "Bíceps braquial", "Trapecio", "Glúteo menor"],
      correct: "Recto femoral",
      explanation:
        "El recto femoral integra el cuádriceps y participa en la extensión de la rodilla.",
    },
    {
      id: "muscular_012",
      question: "¿Qué músculo de la espalda participa en la elevación y retracción escapular?",
      options: ["Trapecio", "Recto abdominal", "Masetero", "Sóleo"],
      correct: "Trapecio",
      explanation:
        "El trapecio interviene en movimientos escapulares y del cuello.",
    },
    {
      id: "muscular_013",
      question: "¿Qué músculo cruza en diagonal el muslo y es el más largo del cuerpo?",
      options: ["Sartorio", "Deltoides", "Temporal", "Bíceps braquial"],
      correct: "Sartorio",
      explanation:
        "El sartorio es considerado el músculo más largo del cuerpo humano.",
    },
    {
      id: "muscular_014",
      question: "¿Qué músculo participa principalmente en la flexión del codo?",
      options: ["Bíceps braquial", "Trapecio", "Pectoral mayor", "Gastrocnemio"],
      correct: "Bíceps braquial",
      explanation:
        "El bíceps braquial es un flexor importante del codo.",
    },
    {
      id: "muscular_015",
      question: "¿Qué grupo muscular se ubica en la región glútea?",
      options: ["Glúteos", "Intercostales", "Pectorales", "Temporales"],
      correct: "Glúteos",
      explanation:
        "Los glúteos se localizan en la región posterior de la pelvis.",
    },
  ],

  nervioso: [
    {
      id: "nervioso_001",
      question: "¿Cuál es el órgano principal del sistema nervioso?",
      options: ["Corazón", "Cerebro", "Hígado", "Pulmón"],
      correct: "Cerebro",
      explanation:
        "El cerebro coordina funciones motoras, sensoriales y cognitivas.",
    },
    {
      id: "nervioso_002",
      question: "¿Qué conecta el cerebro con el resto del cuerpo?",
      options: ["Médula espinal", "Fémur", "Tráquea", "Costilla"],
      correct: "Médula espinal",
      explanation:
        "La médula espinal transmite señales entre el cerebro y el cuerpo.",
    },
    {
      id: "nervioso_003",
      question: "¿Qué célula transmite impulsos nerviosos?",
      options: ["Neurona", "Miocito", "Osteocito", "Plaqueta"],
      correct: "Neurona",
      explanation:
        "La neurona es la unidad funcional básica del sistema nervioso.",
    },
    {
      id: "nervioso_004",
      question: "¿Cuál de estos pertenece al sistema nervioso?",
      options: ["Nervio ciático", "Fémur", "Bíceps", "Estómago"],
      correct: "Nervio ciático",
      explanation:
        "El nervio ciático es uno de los nervios más largos del cuerpo.",
    },
    {
      id: "nervioso_005",
      question: "¿Qué sistema controla reflejos y movimientos?",
      options: ["Nervioso", "Digestivo", "Óseo", "Muscular"],
      correct: "Nervioso",
      explanation:
        "El sistema nervioso coordina reflejos, movimientos y respuestas corporales.",
    },
    {
      id: "nervioso_006",
      question: "¿Cuál estructura pertenece al sistema nervioso central?",
      options: ["Cerebro", "Nervio radial", "Ganglio simpático", "Plexo braquial"],
      correct: "Cerebro",
      explanation:
        "El sistema nervioso central está formado por encéfalo y médula espinal.",
    },
    {
      id: "nervioso_007",
      question: "¿Qué parte del sistema nervioso lleva información desde receptores al SNC?",
      options: ["Vía aferente", "Vía eferente", "Miocardio", "Sistema óseo"],
      correct: "Vía aferente",
      explanation:
        "Las vías aferentes llevan información sensitiva hacia el sistema nervioso central.",
    },
    {
      id: "nervioso_008",
      question: "¿Qué parte del sistema nervioso conduce órdenes motoras hacia músculos?",
      options: ["Vía eferente", "Vía aferente", "Corteza ósea", "Red vascular"],
      correct: "Vía eferente",
      explanation:
        "Las vías eferentes conducen impulsos motores desde el SNC hacia efectores.",
    },
    {
      id: "nervioso_009",
      question: "¿Cuál es una función principal del cerebelo?",
      options: ["Coordinar movimientos", "Secretar bilis", "Bombear sangre", "Producir insulina"],
      correct: "Coordinar movimientos",
      explanation:
        "El cerebelo participa en coordinación motora, equilibrio y precisión.",
    },
    {
      id: "nervioso_010",
      question: "¿Qué estructura protege a la médula espinal?",
      options: ["Columna vertebral", "Costillas", "Clavícula", "Escápula"],
      correct: "Columna vertebral",
      explanation:
        "La médula espinal se aloja y protege dentro del conducto vertebral.",
    },
    {
      id: "nervioso_011",
      question: "¿Cuál es un ejemplo de nervio periférico?",
      options: ["Nervio ciático", "Encéfalo", "Cerebelo", "Médula espinal"],
      correct: "Nervio ciático",
      explanation:
        "El nervio ciático pertenece al sistema nervioso periférico.",
    },
    {
      id: "nervioso_012",
      question: "¿Qué lóbulo cerebral se relaciona principalmente con la visión?",
      options: ["Occipital", "Frontal", "Temporal", "Parietal"],
      correct: "Occipital",
      explanation:
        "La corteza visual primaria se localiza en el lóbulo occipital.",
    },
    {
      id: "nervioso_013",
      question: "¿Qué lóbulo cerebral se asocia con funciones motoras voluntarias?",
      options: ["Frontal", "Occipital", "Temporal", "Insular exclusivamente"],
      correct: "Frontal",
      explanation:
        "El lóbulo frontal participa en funciones ejecutivas y control motor voluntario.",
    },
    {
      id: "nervioso_014",
      question: "¿Qué estructura separa parcialmente ambos hemisferios cerebrales?",
      options: ["Fisura longitudinal", "Bulbo raquídeo", "Hipotálamo", "Plexo coroideo"],
      correct: "Fisura longitudinal",
      explanation:
        "La fisura longitudinal divide anatómicamente los hemisferios cerebrales.",
    },
    {
      id: "nervioso_015",
      question: "¿Qué sistema participa en respuestas involuntarias viscerales?",
      options: ["Sistema nervioso autónomo", "Sistema óseo", "Sistema tegumentario", "Sistema linfático"],
      correct: "Sistema nervioso autónomo",
      explanation:
        "El sistema nervioso autónomo regula funciones involuntarias como frecuencia cardiaca y digestión.",
    },
  ],

  digestivo: [
    {
      id: "digestivo_001",
      question: "¿Dónde inicia la digestión?",
      options: ["Intestino", "Estómago", "Boca", "Hígado"],
      correct: "Boca",
      explanation:
        "La digestión inicia en la boca con la masticación y la acción de la saliva.",
    },
    {
      id: "digestivo_002",
      question: "¿Qué órgano produce bilis?",
      options: ["Páncreas", "Estómago", "Hígado", "Riñón"],
      correct: "Hígado",
      explanation:
        "El hígado produce bilis, que participa en la digestión de grasas.",
    },
    {
      id: "digestivo_003",
      question: "¿Dónde ocurre gran parte de la absorción de nutrientes?",
      options: ["Esófago", "Intestino delgado", "Boca", "Faringe"],
      correct: "Intestino delgado",
      explanation:
        "La mayor parte de la absorción de nutrientes ocurre en el intestino delgado.",
    },
    {
      id: "digestivo_004",
      question: "¿Qué órgano mezcla los alimentos con jugos gástricos?",
      options: ["Corazón", "Pulmón", "Estómago", "Cerebro"],
      correct: "Estómago",
      explanation:
        "El estómago mezcla y descompone los alimentos con jugos gástricos.",
    },
    {
      id: "digestivo_005",
      question: "¿Qué sistema se encarga de procesar alimentos?",
      options: ["Digestivo", "Óseo", "Nervioso", "Muscular"],
      correct: "Digestivo",
      explanation:
        "El sistema digestivo transforma alimentos en nutrientes aprovechables.",
    },
    {
      id: "digestivo_006",
      question: "¿Qué estructura comunica la faringe con el estómago?",
      options: ["Esófago", "Tráquea", "Intestino grueso", "Recto"],
      correct: "Esófago",
      explanation:
        "El esófago transporta el bolo alimenticio desde la faringe hasta el estómago.",
    },
    {
      id: "digestivo_007",
      question: "¿Qué órgano almacena y concentra la bilis?",
      options: ["Vesícula biliar", "Páncreas", "Bazo", "Apéndice"],
      correct: "Vesícula biliar",
      explanation:
        "La vesícula biliar almacena y concentra la bilis producida por el hígado.",
    },
    {
      id: "digestivo_008",
      question: "¿Qué glándula produce enzimas digestivas y bicarbonato?",
      options: ["Páncreas", "Hígado", "Tiroides", "Hipófisis"],
      correct: "Páncreas",
      explanation:
        "El páncreas secreta enzimas digestivas y bicarbonato hacia el duodeno.",
    },
    {
      id: "digestivo_009",
      question: "¿Qué porción del intestino delgado recibe el quimo desde el estómago?",
      options: ["Duodeno", "Yeyuno", "Íleon", "Colon ascendente"],
      correct: "Duodeno",
      explanation:
        "El duodeno es la primera porción del intestino delgado y recibe el quimo.",
    },
    {
      id: "digestivo_010",
      question: "¿Qué segmento del tubo digestivo absorbe principalmente agua y forma heces?",
      options: ["Intestino grueso", "Estómago", "Esófago", "Faringe"],
      correct: "Intestino grueso",
      explanation:
        "El intestino grueso absorbe agua y participa en la formación de las heces.",
    },
    {
      id: "digestivo_011",
      question: "¿Qué órgano produce ácido clorhídrico?",
      options: ["Estómago", "Hígado", "Páncreas", "Colon"],
      correct: "Estómago",
      explanation:
        "El estómago secreta ácido clorhídrico mediante sus células parietales.",
    },
    {
      id: "digestivo_012",
      question: "¿Cuál estructura evita el reflujo del contenido gástrico hacia el esófago?",
      options: ["Esfínter esofágico inferior", "Píloro", "Íleon", "Ciego"],
      correct: "Esfínter esofágico inferior",
      explanation:
        "El esfínter esofágico inferior ayuda a evitar el reflujo gastroesofágico.",
    },
    {
      id: "digestivo_013",
      question: "¿Qué parte del intestino delgado se encuentra entre duodeno e íleon?",
      options: ["Yeyuno", "Colon", "Recto", "Ciego"],
      correct: "Yeyuno",
      explanation:
        "El yeyuno es la porción intermedia del intestino delgado.",
    },
    {
      id: "digestivo_014",
      question: "¿Qué órgano participa en la digestión mecánica y química inicial del alimento?",
      options: ["Boca", "Recto", "Ano", "Apéndice"],
      correct: "Boca",
      explanation:
        "En la boca se mastica el alimento y actúan enzimas salivales.",
    },
    {
      id: "digestivo_015",
      question: "¿Qué estructura es la porción final del tubo digestivo antes del exterior?",
      options: ["Recto", "Íleon", "Duodeno", "Yeyuno"],
      correct: "Recto",
      explanation:
        "El recto almacena temporalmente las heces antes de la defecación.",
    },
  ],
};

const labels = {
  oseo: "Sistema óseo",
  muscular: "Sistema muscular",
  nervioso: "Sistema nervioso",
  digestivo: "Sistema digestivo",
};

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function QuizPlay() {
  const navigate = useNavigate();
  const { systemId, count } = useParams();

  const [questions, setQuestions] = useState([]);
  const [usedIdsThisQuiz, setUsedIdsThisQuiz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    const loadQuestions = async () => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const uid = user.uid;

      const allQuestions = questionBank[systemId] || [];
      let usedQuestionIds = [];

      if (uid) {
        usedQuestionIds = await getUsedQuestionIds(uid, systemId);
      }

      let availableQuestions = allQuestions.filter(
        (q) => !usedQuestionIds.includes(q.id)
      );

      if (availableQuestions.length < Number(count)) {
        availableQuestions = allQuestions;
      }

      const selectedQuestions = shuffleArray(availableQuestions).slice(
        0,
        Number(count)
      );

      setQuestions(selectedQuestions);
      setUsedIdsThisQuiz(selectedQuestions.map((q) => q.id));
    };

    loadQuestions();
  }, [systemId, count]);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;

  const handleSelectOption = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
  };

  const handleNext = async () => {
    if (!isAnswered) return;

    const gotItRight = selectedOption === currentQuestion.correct;
    const newScore = gotItRight ? score + 1 : score;

    if (currentIndex + 1 < total) {
      setScore(newScore);
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption("");
      setIsAnswered(false);
    } else {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      if (user.uid) {
        await saveUsedQuestionIds(user.uid, systemId, usedIdsThisQuiz);
      }

      navigate(`/quiz/result/${systemId}/${count}/${newScore}`);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#2e3a4f] via-[#263246] to-[#1c2431] px-5 pt-6 text-white">
        <p>Cargando preguntas...</p>
      </div>
    );
  }

  const isCorrect = selectedOption === currentQuestion.correct;

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
          <div className="mt-2 flex items-center justify-between">
            <p className="font-semibold">
              Pregunta {currentIndex + 1} de {total}
            </p>
            <span className="text-sm font-semibold">
              {currentIndex + 1}/{total}
            </span>
          </div>
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
              const isRight = option === currentQuestion.correct;
              const showCorrect = isAnswered && isRight;
              const showWrong = isAnswered && active && !isRight;

              return (
                <button
                  key={option}
                  onClick={() => handleSelectOption(option)}
                  disabled={isAnswered}
                  className={`w-full rounded-xl px-4 py-3 text-left border transition ${
                    showCorrect
                      ? "bg-green-400 text-[#1c2431] border-green-400"
                      : showWrong
                      ? "bg-red-400 text-white border-red-400"
                      : active
                      ? "bg-white text-[#1c2431] border-white"
                      : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="mt-5 rounded-xl bg-black/20 border border-white/10 p-4">
              <p className="font-semibold">
                {isCorrect ? "✅ Respuesta correcta" : "❌ Respuesta incorrecta"}
              </p>

              <p className="text-sm text-white/70 mt-2">
                Respuesta correcta:{" "}
                <span className="font-semibold text-white">
                  {currentQuestion.correct}
                </span>
              </p>

              <p className="text-sm text-white/80 mt-2">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className="mt-6 w-full rounded-xl bg-white text-[#1c2431] py-3 font-semibold disabled:opacity-50"
          >
            {currentIndex + 1 === total ? "Finalizar" : "Siguiente"}
          </button>
        </div>
      </div>
    </div>
  );
}