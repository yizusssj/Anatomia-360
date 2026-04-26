export const exploreData = {
  tegumentario: {
    title: "Sistema tegumentario",
    subtitle:
      "Integra piel y anexos cutáneos; protege, participa en termorregulación, sensibilidad superficial y mantenimiento de la barrera corporal.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema tegumentario está formado por la piel y sus anexos, incluidos pelo, uñas, glándulas sudoríparas y glándulas sebáceas. Funciona como barrera física, química e inmunológica entre el organismo y el medio externo.",
      mainFunctions: [
        "Protección frente a traumatismos, radiación ultravioleta, microorganismos y pérdida excesiva de agua",
        "Termorregulación mediante sudoración y cambios en el flujo sanguíneo cutáneo",
        "Percepción sensorial a través de receptores para tacto, presión, dolor y temperatura",
        "Participación en síntesis cutánea de vitamina D",
        "Contribución a homeostasis hídrica y defensa inmunológica superficial",
      ],
      academicNote:
        "En anatomía médica suele estudiarse por capas de la piel, anexos, irrigación, inervación y correlación clínica.",
      sourceBase:
        "Gray's Anatomy for Students, 5e; Moore Clinically Oriented Anatomy, 9e; OpenStax Anatomy and Physiology 2e",
    },
    structures: [
      {
        id: "piel",
        name: "Piel",
        group: "Capas principales",
        region: "Cobertura corporal externa",
        type: "Órgano",
        function:
          "Actúa como barrera protectora y participa en termorregulación, sensibilidad y equilibrio hídrico superficial.",
        relations:
          "Se organiza en epidermis y dermis, apoyadas sobre tejido subcutáneo o hipodermis.",
        keyFact:
          "Es el órgano más extenso del cuerpo humano por superficie.",
        clinicalNote:
          "La pérdida de integridad cutánea favorece infección, pérdida de líquidos y alteraciones de la homeostasis.",
      },
      {
        id: "epidermis",
        name: "Epidermis",
        group: "Capas principales",
        region: "Capa superficial de la piel",
        type: "Epitelio estratificado queratinizado",
        function:
          "Forma la barrera más externa del cuerpo y limita la pérdida de agua y la penetración de agentes externos.",
        relations:
          "Está formada principalmente por queratinocitos y se apoya sobre la membrana basal que la separa de la dermis.",
        keyFact:
          "Carece de vasos sanguíneos y depende de difusión desde la dermis subyacente.",
        clinicalNote:
          "Las alteraciones de queratinización y recambio epidérmico son relevantes en múltiples dermatosis.",
      },
      {
        id: "dermis",
        name: "Dermis",
        group: "Capas principales",
        region: "Capa profunda de la piel",
        type: "Tejido conectivo",
        function:
          "Aporta soporte mecánico, elasticidad, irrigación, inervación y alojamiento para anexos cutáneos.",
        relations:
          "Se divide en dermis papilar y reticular; contiene vasos, nervios, folículos y glándulas.",
        keyFact:
          "Es la capa cutánea con mayor riqueza vascular e inervación sensorial.",
        clinicalNote:
          "Las lesiones que alcanzan dermis modifican sensibilidad, cicatrización y respuesta inflamatoria local.",
      },
      {
        id: "hipodermis",
        name: "Hipodermis",
        group: "Capas principales",
        region: "Tejido subcutáneo",
        type: "Tejido conectivo y adiposo",
        function:
          "Favorece amortiguación, reserva energética y deslizamiento de la piel sobre planos profundos.",
        relations:
          "Se sitúa profunda a la dermis y superficial a fascia profunda.",
        keyFact:
          "No siempre se considera parte estricta de la piel, pero es esencial en la anatomía regional.",
        clinicalNote:
          "Es importante para abordajes quirúrgicos, administración subcutánea y distribución de grasa corporal.",
      },
      {
        id: "foliculopiloso",
        name: "Folículo piloso",
        group: "Anexos cutáneos",
        region: "Anexo cutáneo",
        type: "Invaginación epitelial especializada",
        function:
          "Produce y sostiene el pelo y contribuye a funciones protectoras y sensoriales.",
        relations:
          "Se asocia con glándulas sebáceas y con el músculo erector del pelo.",
        keyFact:
          "Su densidad y distribución varían ampliamente según la región corporal.",
        clinicalNote:
          "Participa en procesos inflamatorios e infecciosos de relevancia dermatológica.",
      },
      {
        id: "glandulassudoriparas",
        name: "Glándulas sudoríparas",
        group: "Anexos cutáneos",
        region: "Dermis y tejido subcutáneo",
        type: "Glándulas exocrinas",
        function:
          "Secretan sudor y contribuyen a la termorregulación y equilibrio hidroelectrolítico local.",
        relations:
          "Sus conductos se abren en la superficie cutánea o en el folículo piloso, según el tipo glandular.",
        keyFact:
          "Las glándulas ecrinas son especialmente importantes para disipación de calor.",
        clinicalNote:
          "Su actividad puede alterarse en trastornos autonómicos, fiebre y deshidratación.",
      },
      {
        id: "glandulassebaceas",
        name: "Glándulas sebáceas",
        group: "Anexos cutáneos",
        region: "Asociadas a folículos pilosos",
        type: "Glándulas exocrinas holocrinas",
        function:
          "Secretan sebo, que lubrica pelo y piel y contribuye a la barrera cutánea.",
        relations:
          "Generalmente desembocan en el folículo piloso.",
        keyFact:
          "Son abundantes en cara, cuero cabelludo y parte superior del tronco.",
        clinicalNote:
          "Su hiperactividad e inflamación son relevantes en acné y dermatosis seborreicas.",
      },
      {
        id: "unias",
        name: "Uñas",
        group: "Anexos cutáneos",
        region: "Extremos distales de dedos",
        type: "Anexo cutáneo queratinizado",
        function:
          "Protegen falanges distales y favorecen manipulación fina.",
        relations:
          "Se desarrollan sobre el lecho ungueal y dependen de la matriz ungueal.",
        keyFact:
          "Su aspecto puede reflejar alteraciones sistémicas o carenciales.",
        clinicalNote:
          "Cambios ungueales pueden ser útiles en exploración clínica general.",
      },
    ],
  },

  oseo: {
    title: "Sistema óseo",
    subtitle:
      "Integra huesos, cartílagos, articulaciones y estructuras asociadas para sostén, protección, movimiento, reserva mineral y hematopoyesis.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema óseo está formado por huesos, cartílagos, articulaciones y ligamentos asociados. Proporciona sostén estructural, protege órganos vitales, actúa como sistema de palancas junto al sistema muscular y participa en funciones metabólicas como reserva mineral y hematopoyesis.",
      mainFunctions: [
        "Sostén mecánico y mantenimiento de la forma corporal",
        "Protección de órganos vitales, como encéfalo, médula espinal, corazón y pulmones",
        "Participación en el movimiento al actuar como sistema de palancas junto con músculos y articulaciones",
        "Reserva de minerales, especialmente calcio y fósforo",
        "Hematopoyesis en médula ósea roja",
        "Contribución al equilibrio metabólico y a la homeostasis mineral",
      ],
      academicNote:
        "En anatomía médica suele estudiarse por esqueleto axial y apendicular, morfología ósea, articulaciones, irrigación, inervación y correlación clínica.",
      sourceBase:
        "Gray's Anatomy for Students, 5e; Moore Clinically Oriented Anatomy, 9e; Netter Atlas of Human Anatomy",
    },
    structures: [
      {
        id: "craneo",
        name: "Cráneo",
        group: "Cráneo y cara",
        region: "Cabeza",
        type: "Conjunto de huesos planos e irregulares",
        function:
          "Protege el encéfalo y forma la base ósea de la cabeza.",
        relations:
          "Se divide en neurocráneo y viscerocráneo; se relaciona con meninges, encéfalo y órganos de los sentidos.",
        keyFact:
          "Su organización protege estructuras nerviosas de alta importancia funcional.",
        clinicalNote:
          "Los traumatismos craneales pueden comprometer función neurológica, vascular y meníngea.",
      },
      {
        id: "frontal",
        name: "Frontal",
        group: "Cráneo y cara",
        region: "Cráneo anterior",
        type: "Hueso plano",
        function:
          "Forma la frente, parte del techo orbitario y parte de la cavidad craneal.",
        relations:
          "Se articula con parietales, esfenoides, etmoides, cigomáticos, nasales y maxilares.",
        keyFact:
          "Contribuye a la protección del lóbulo frontal.",
        clinicalNote:
          "Su relación con senos frontales lo vuelve relevante en trauma y sinusopatía.",
      },
      {
        id: "parietal",
        name: "Parietal",
        group: "Cráneo y cara",
        region: "Cráneo superior y lateral",
        type: "Hueso plano",
        function:
          "Forma gran parte de la bóveda craneal y contribuye a protección encefálica.",
        relations:
          "Se articula con frontal, occipital, temporal y el parietal contralateral.",
        keyFact:
          "Participa en las principales suturas de la calvaria.",
        clinicalNote:
          "Su integridad es importante en lesiones de bóveda craneal.",
      },
      {
        id: "temporal",
        name: "Temporal",
        group: "Cráneo y cara",
        region: "Cráneo lateral e inferior",
        type: "Hueso irregular",
        function:
          "Contribuye a la pared lateral del cráneo, base craneal y alojamiento de estructuras del oído.",
        relations:
          "Se articula con parietal, occipital, esfenoides, cigomático y mandíbula.",
        keyFact:
          "Contiene estructuras asociadas con audición y equilibrio.",
        clinicalNote:
          "Su porción petrosa es anatómicamente muy relevante por las estructuras neurovasculares que contiene.",
      },
      {
        id: "occipital",
        name: "Occipital",
        group: "Cráneo y cara",
        region: "Cráneo posterior e inferior",
        type: "Hueso plano",
        function:
          "Forma la región posterior de la bóveda craneal y gran parte de la base del cráneo.",
        relations:
          "Se articula con parietales, temporales, esfenoides y atlas.",
        keyFact:
          "Contiene el foramen magno, paso fundamental entre encéfalo y médula espinal.",
        clinicalNote:
          "Es clave en la unión craneocervical.",
      },
      {
        id: "mandibula",
        name: "Mandíbula",
        group: "Cráneo y cara",
        region: "Cara inferior",
        type: "Hueso irregular",
        function:
          "Participa en masticación, fonación y estructura del tercio inferior facial.",
        relations:
          "Se articula con el hueso temporal en la articulación temporomandibular.",
        keyFact:
          "Es el único hueso móvil del cráneo en condiciones normales.",
        clinicalNote:
          "Las alteraciones de la ATM pueden afectar dolor facial, masticación y apertura oral.",
      },
      {
        id: "maxilar",
        name: "Maxilar",
        group: "Cráneo y cara",
        region: "Macizo facial",
        type: "Hueso irregular",
        function:
          "Forma parte del piso orbitario, cavidad nasal y arco dentario superior.",
        relations:
          "Se articula con frontal, cigomático, nasal, lagrimal, etmoides, palatino y otros huesos faciales.",
        keyFact:
          "Contribuye a múltiples cavidades anatómicas de la cara.",
        clinicalNote:
          "Es importante en trauma facial y odontología clínica.",
      },
      {
        id: "columna",
        name: "Columna vertebral",
        group: "Columna vertebral",
        region: "Eje axial",
        type: "Conjunto de huesos irregulares",
        function:
          "Sostiene el eje corporal, protege la médula espinal y contribuye a postura y movilidad del tronco.",
        relations:
          "Se relaciona con cráneo, costillas, pelvis y médula espinal.",
        keyFact:
          "Se divide en regiones cervical, torácica, lumbar, sacra y coccígea.",
        clinicalNote:
          "Las alteraciones vertebrales pueden afectar postura, movilidad y función neurológica.",
      },
      {
        id: "atlas",
        name: "Atlas (C1)",
        group: "Columna vertebral",
        region: "Columna cervical superior",
        type: "Vértebra cervical especializada",
        function:
          "Sostiene el cráneo y permite parte importante del movimiento de flexoextensión craneocervical.",
        relations:
          "Se articula con cóndilos occipitales y con axis.",
        keyFact:
          "No presenta cuerpo vertebral típico.",
        clinicalNote:
          "Es una estructura clave en la unión craneocervical y en trauma cervical alto.",
      },
      {
        id: "axis",
        name: "Axis (C2)",
        group: "Columna vertebral",
        region: "Columna cervical superior",
        type: "Vértebra cervical especializada",
        function:
          "Permite gran parte de la rotación de la cabeza gracias a su apófisis odontoides.",
        relations:
          "Se articula con atlas y vértebras cervicales inferiores.",
        keyFact:
          "Su dens funciona como pivote del movimiento atlantoaxoideo.",
        clinicalNote:
          "Las lesiones del axis tienen relevancia mayor por su relación con médula cervical alta.",
      },
      {
        id: "esternon",
        name: "Esternón",
        group: "Tórax",
        region: "Tórax anterior",
        type: "Hueso plano",
        function:
          "Contribuye a la protección torácica y sirve de anclaje a costillas y clavículas.",
        relations:
          "Se articula con clavículas y cartílagos costales.",
        keyFact:
          "Forma parte del esqueleto axial y de la pared anterior del tórax.",
        clinicalNote:
          "Es una referencia anatómica importante en exploración física del tórax.",
      },
      {
        id: "costillas",
        name: "Costillas",
        group: "Tórax",
        region: "Tórax",
        type: "Huesos planos curvos",
        function:
          "Protegen vísceras torácicas y contribuyen a la mecánica respiratoria.",
        relations:
          "Se articulan con vértebras torácicas y, en la mayoría, con esternón mediante cartílagos costales.",
        keyFact:
          "Junto con esternón y columna torácica forman la caja torácica.",
        clinicalNote:
          "Las fracturas costales pueden comprometer ventilación y producir dolor respiratorio significativo.",
      },
      {
        id: "clavicula",
        name: "Clavícula",
        group: "Miembro superior",
        region: "Cintura escapular",
        type: "Hueso largo",
        function:
          "Conecta el miembro superior con el esqueleto axial y mantiene el hombro separado del tronco.",
        relations:
          "Se articula con manubrio esternal y escápula.",
        keyFact:
          "Es un elemento fundamental de la cintura escapular.",
        clinicalNote:
          "Es un sitio frecuente de fractura por caídas sobre el hombro o miembro superior.",
      },
      {
        id: "escapula",
        name: "Escápula",
        group: "Miembro superior",
        region: "Dorso superior",
        type: "Hueso plano",
        function:
          "Sirve de inserción muscular y participa en la movilidad y estabilidad del hombro.",
        relations:
          "Se articula con clavícula y húmero.",
        keyFact:
          "La cavidad glenoidea recibe la cabeza del húmero.",
        clinicalNote:
          "La mecánica escapular es esencial para función normal del hombro.",
      },
      {
        id: "humero",
        name: "Húmero",
        group: "Miembro superior",
        region: "Brazo",
        type: "Hueso largo",
        function:
          "Participa en la movilidad del miembro superior y transmisión de fuerzas entre hombro y antebrazo.",
        relations:
          "Se articula con escápula, radio y ulna.",
        keyFact:
          "Es el hueso principal del brazo.",
        clinicalNote:
          "Las fracturas proximales o diafisarias pueden comprometer estructuras nerviosas según el nivel.",
      },
      {
        id: "radio",
        name: "Radio",
        group: "Miembro superior",
        region: "Antebrazo lateral",
        type: "Hueso largo",
        function:
          "Interviene en movimientos del antebrazo y de la muñeca, especialmente en pronación y supinación.",
        relations:
          "Se articula con húmero, ulna y huesos del carpo.",
        keyFact:
          "Se localiza lateralmente en posición anatómica.",
        clinicalNote:
          "Las fracturas distales del radio son muy frecuentes en práctica clínica.",
      },
      {
        id: "ulna",
        name: "Ulna",
        group: "Miembro superior",
        region: "Antebrazo medial",
        type: "Hueso largo",
        function:
          "Aporta estabilidad al antebrazo y participa de forma muy importante en la articulación del codo.",
        relations:
          "Se articula con húmero y radio.",
        keyFact:
          "El olécranon forma la prominencia ósea posterior del codo.",
        clinicalNote:
          "Es relevante en lesiones del codo y estabilidad del antebrazo proximal.",
      },
      {
        id: "pelvis",
        name: "Pelvis",
        group: "Pelvis",
        region: "Cintura pélvica",
        type: "Complejo óseo",
        function:
          "Transfiere peso del tronco a los miembros inferiores y protege vísceras pélvicas.",
        relations:
          "Se relaciona con sacro y fémures.",
        keyFact:
          "Está formada por huesos coxales y estructuras asociadas del anillo pélvico.",
        clinicalNote:
          "Las fracturas pélvicas pueden asociarse con lesión vascular o visceral significativa.",
      },
      {
        id: "femur",
        name: "Fémur",
        group: "Miembro inferior",
        region: "Muslo",
        type: "Hueso largo",
        function:
          "Soporta peso y participa de manera esencial en la locomoción.",
        relations:
          "Se articula con acetábulo, tibia y rótula.",
        keyFact:
          "Es el hueso más largo y robusto del cuerpo humano.",
        clinicalNote:
          "Las fracturas del cuello femoral son de gran importancia clínica, especialmente en adultos mayores.",
      },
      {
        id: "rotula",
        name: "Rótula",
        group: "Miembro inferior",
        region: "Rodilla",
        type: "Hueso sesamoideo",
        function:
          "Aumenta la eficacia mecánica del tendón del cuádriceps en la extensión de la rodilla.",
        relations:
          "Se relaciona con fémur, tendón cuadricipital y ligamento rotuliano.",
        keyFact:
          "Es el hueso sesamoideo más grande del cuerpo.",
        clinicalNote:
          "Es relevante en traumatismos de rodilla y alteraciones del aparato extensor.",
      },
      {
        id: "tibia",
        name: "Tibia",
        group: "Miembro inferior",
        region: "Pierna medial",
        type: "Hueso largo",
        function:
          "Transmite la mayor parte del peso corporal desde la rodilla hacia el pie.",
        relations:
          "Se articula con fémur, peroné y talus.",
        keyFact:
          "Es el principal hueso de carga de la pierna.",
        clinicalNote:
          "Es fundamental en lesiones de rodilla, pierna y tobillo.",
      },
      {
        id: "perone",
        name: "Peroné",
        group: "Miembro inferior",
        region: "Pierna lateral",
        type: "Hueso largo",
        function:
          "Contribuye a estabilidad lateral de la pierna y del tobillo.",
        relations:
          "Se relaciona con tibia y estructuras del tobillo.",
        keyFact:
          "No soporta la mayor parte del peso corporal, pero es clave en estabilidad lateral.",
        clinicalNote:
          "Su proximidad al nervio fibular común le da relevancia clínica en trauma lateral de rodilla.",
      },
      {
        id: "calcaneo",
        name: "Calcáneo",
        group: "Miembro inferior",
        region: "Retropié",
        type: "Hueso corto del tarso",
        function:
          "Soporta peso y participa en la mecánica de apoyo del pie.",
        relations:
          "Se articula con talus y cuboides; recibe inserción del tendón calcáneo.",
        keyFact:
          "Forma la prominencia ósea del talón.",
        clinicalNote:
          "Es importante en carga, marcha y lesiones por impacto.",
      },
      {
        id: "talus",
        name: "Talus (astrágalo)",
        group: "Miembro inferior",
        region: "Retropié",
        type: "Hueso corto del tarso",
        function:
          "Transmite peso desde la tibia hacia el pie y participa en la articulación del tobillo.",
        relations:
          "Se articula con tibia, peroné, calcáneo y navicular.",
        keyFact:
          "Tiene papel central en la articulación talocrural.",
        clinicalNote:
          "Su vascularización y papel articular lo hacen clínicamente importante en trauma del tobillo.",
      },
    ],
  },

  muscular: {
    title: "Sistema muscular",
    subtitle:
      "Integra músculos esqueléticos y estructuras asociadas para movimiento, postura, estabilidad articular y producción de calor.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema muscular comprende músculos esqueléticos, tendones y fascias asociadas responsables del movimiento voluntario, la postura, la estabilidad articular y buena parte de la producción de calor corporal.",
      mainFunctions: [
        "Movimiento voluntario y locomoción",
        "Mantenimiento de la postura",
        "Estabilización de articulaciones",
        "Contribución a la termogénesis",
        "Participación en respiración, fonación y expresiones faciales según la región",
      ],
      academicNote:
        "En anatomía médica se estudia por regiones, compartimentos, inserciones, inervación e irrigación.",
      sourceBase:
        "Gray's Anatomy for Students, 5e; Moore Clinically Oriented Anatomy, 9e; Netter Atlas of Human Anatomy",
    },
    structures: [
      {
        id: "deltoides",
        name: "Deltoides",
        group: "Miembro superior",
        region: "Hombro",
        type: "Músculo esquelético",
        function:
          "Abduce el brazo y, según sus fibras, contribuye a flexión y extensión del hombro.",
        relations:
          "Cubre la articulación glenohumeral y se relaciona con el nervio axilar.",
        keyFact:
          "Es uno de los músculos más relevantes en la movilidad del hombro.",
        clinicalNote:
          "La debilidad del deltoides orienta a lesión del nervio axilar.",
      },
      {
        id: "trapecio",
        name: "Trapecio",
        group: "Dorso y cuello",
        region: "Espalda superior y cuello",
        type: "Músculo esquelético",
        function:
          "Mueve y estabiliza la escápula; participa en elevación, retracción y rotación escapular.",
        relations:
          "Conecta cráneo, columna cervical/torácica y cintura escapular.",
        keyFact:
          "Es clave en mecánica escapular y postura cervicodorsal.",
        clinicalNote:
          "Su función se relaciona con integridad del nervio accesorio.",
      },
      {
        id: "biceps",
        name: "Bíceps braquial",
        group: "Miembro superior",
        region: "Brazo anterior",
        type: "Músculo esquelético",
        function:
          "Flexiona el codo y contribuye de manera importante a la supinación del antebrazo.",
        relations:
          "Se relaciona con húmero, radio y estructuras neurovasculares del compartimento anterior del brazo.",
        keyFact:
          "Tiene gran importancia funcional en movimientos del miembro superior.",
        clinicalNote:
          "La integridad de su tendón proximal y distal tiene alta relevancia clínica.",
      },
      {
        id: "triceps",
        name: "Tríceps braquial",
        group: "Miembro superior",
        region: "Brazo posterior",
        type: "Músculo esquelético",
        function:
          "Extiende el codo y contribuye a movimientos del miembro superior.",
        relations:
          "Su tendón se inserta en el olécranon de la ulna.",
        keyFact:
          "Es el principal extensor del codo.",
        clinicalNote:
          "Es útil en exploración de fuerza y reflejos segmentarios asociados.",
      },
      {
        id: "diafragma",
        name: "Diafragma",
        group: "Tórax y respiración",
        region: "Límite toracoabdominal",
        type: "Músculo esquelético especializado",
        function:
          "Es el principal músculo de la inspiración tranquila al aumentar el volumen torácico.",
        relations:
          "Separa cavidad torácica y abdominal; se relaciona con pulmones, pericardio e hígado.",
        keyFact:
          "Su contracción modifica de forma central la mecánica ventilatoria.",
        clinicalNote:
          "La disfunción diafragmática compromete ventilación y dinámica respiratoria.",
      },
      {
        id: "rectoabdominal",
        name: "Recto abdominal",
        group: "Pared abdominal",
        region: "Pared abdominal anterior",
        type: "Músculo esquelético",
        function:
          "Flexiona el tronco y contribuye al soporte de la pared abdominal.",
        relations:
          "Se integra con aponeurosis abdominales y estructuras de la pared anterior.",
        keyFact:
          "Es un músculo importante para estabilidad del core.",
        clinicalNote:
          "La debilidad de la pared abdominal puede favorecer hernias y alteraciones posturales.",
      },
      {
        id: "oblicuoexterno",
        name: "Oblicuo externo",
        group: "Pared abdominal",
        region: "Pared abdominal anterolateral",
        type: "Músculo esquelético",
        function:
          "Participa en rotación contralateral del tronco, flexión y compresión abdominal.",
        relations:
          "Forma parte de la pared anterolateral del abdomen y contribuye a la vaina del recto.",
        keyFact:
          "Es importante en movimientos combinados del tronco y presión intraabdominal.",
        clinicalNote:
          "Tiene relevancia en biomecánica abdominal y región inguinal.",
      },
      {
        id: "gluteomayor",
        name: "Glúteo mayor",
        group: "Miembro inferior",
        region: "Región glútea",
        type: "Músculo esquelético",
        function:
          "Extiende la cadera y contribuye a la postura erguida y la locomoción.",
        relations:
          "Se relaciona con pelvis, fémur y planos glúteos profundos.",
        keyFact:
          "Es muy activo al subir escaleras o ponerse de pie.",
        clinicalNote:
          "Es fundamental en marcha y potencia extensora de cadera.",
      },
      {
        id: "gluteomedio",
        name: "Glúteo medio",
        group: "Miembro inferior",
        region: "Región glútea",
        type: "Músculo esquelético",
        function:
          "Abduce la cadera y estabiliza la pelvis durante la marcha.",
        relations:
          "Se ubica profundo al glúteo mayor y se inserta en el trocánter mayor.",
        keyFact:
          "Es esencial para evitar caída contralateral de la pelvis al caminar.",
        clinicalNote:
          "Su debilidad se asocia con alteraciones características de la marcha.",
      },
      {
        id: "cuadriceps",
        name: "Cuádriceps femoral",
        group: "Miembro inferior",
        region: "Muslo anterior",
        type: "Grupo muscular",
        function:
          "Extiende la rodilla; el recto femoral también contribuye a flexión de cadera.",
        relations:
          "Se inserta funcionalmente a través de la rótula hacia la tibia.",
        keyFact:
          "Es el principal extensor de la rodilla.",
        clinicalNote:
          "Su evaluación es clave en marcha, bipedestación y rehabilitación.",
      },
      {
        id: "isquiotibiales",
        name: "Isquiotibiales",
        group: "Miembro inferior",
        region: "Muslo posterior",
        type: "Grupo muscular",
        function:
          "Participan en extensión de cadera y flexión de rodilla.",
        relations:
          "Se relacionan con pelvis, fémur, tibia y peroné según el músculo.",
        keyFact:
          "Son fundamentales en carrera, desaceleración y postura.",
        clinicalNote:
          "Son un grupo muy relevante en lesión deportiva.",
      },
      {
        id: "gastrocnemio",
        name: "Gastrocnemio",
        group: "Miembro inferior",
        region: "Pantorrilla",
        type: "Músculo esquelético",
        function:
          "Participa en flexión plantar y ayuda en flexión de rodilla.",
        relations:
          "Contribuye al tendón calcáneo junto con el sóleo.",
        keyFact:
          "Es importante en marcha, carrera y salto.",
        clinicalNote:
          "Tiene alta relevancia en sobrecarga y lesión deportiva.",
      },
      {
        id: "soleo",
        name: "Sóleo",
        group: "Miembro inferior",
        region: "Pantorrilla",
        type: "Músculo esquelético",
        function:
          "Contribuye a la flexión plantar y al mantenimiento de la postura erguida.",
        relations:
          "Forma parte del tríceps sural junto con gastrocnemio.",
        keyFact:
          "Tiene un papel postural muy importante.",
        clinicalNote:
          "Es clave en la bomba muscular venosa de la pierna.",
      },
    ],
  },

  nervioso: {
    title: "Sistema nervioso",
    subtitle:
      "Coordina funciones sensitivas, motoras, cognitivas y autonómicas mediante encéfalo, médula espinal y nervios periféricos.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema nervioso integra información sensitiva, genera respuestas motoras, regula funciones viscerales y sustenta funciones superiores como lenguaje, memoria y conducta.",
      mainFunctions: [
        "Recepción e integración de estímulos",
        "Control motor voluntario e involuntario",
        "Regulación autonómica",
        "Procesos cognitivos, emocionales y conductuales",
        "Mantenimiento de reflejos y control segmentario",
      ],
      academicNote:
        "En medicina se estudia en sistema nervioso central, periférico y autónomo, además de vías, núcleos y correlación clínica.",
      sourceBase:
        "Gray's Anatomy for Students, 5e; Netter Atlas of Human Anatomy; Snell's Clinical Neuroanatomy, 9e",
    },
    structures: [
      {
        id: "cerebro",
        name: "Cerebro",
        group: "Encéfalo",
        region: "Encéfalo",
        type: "Órgano del sistema nervioso central",
        function:
          "Integra funciones cognitivas, sensitivas y motoras superiores.",
        relations:
          "Se relaciona con diencéfalo, cerebelo y tronco encefálico.",
        keyFact:
          "Es el principal centro de integración del cuerpo humano.",
        clinicalNote:
          "Las lesiones corticales producen déficits neurológicos focales o difusos según su localización.",
      },
      {
        id: "lobulofrontal",
        name: "Lóbulo frontal",
        group: "Encéfalo",
        region: "Telencéfalo",
        type: "Región cortical",
        function:
          "Participa en control motor voluntario, funciones ejecutivas, conducta y lenguaje motor.",
        relations:
          "Se localiza anterior al surco central.",
        keyFact:
          "Incluye corteza motora primaria y áreas premotoras.",
        clinicalNote:
          "Su lesión puede alterar planificación, personalidad y movimiento.",
      },
      {
        id: "lobuloparietal",
        name: "Lóbulo parietal",
        group: "Encéfalo",
        region: "Telencéfalo",
        type: "Región cortical",
        function:
          "Procesa información somatosensitiva e integra percepción espacial.",
        relations:
          "Se sitúa posterior al surco central.",
        keyFact:
          "Incluye corteza somatosensorial primaria.",
        clinicalNote:
          "Su alteración puede producir déficits sensitivos y espaciales.",
      },
      {
        id: "lobulotemporal",
        name: "Lóbulo temporal",
        group: "Encéfalo",
        region: "Telencéfalo",
        type: "Región cortical",
        function:
          "Participa en procesamiento auditivo, memoria y aspectos del lenguaje.",
        relations:
          "Se localiza inferior al surco lateral.",
        keyFact:
          "Tiene relación con estructuras importantes para memoria y audición.",
        clinicalNote:
          "Su lesión puede alterar audición cortical, memoria y comprensión del lenguaje.",
      },
      {
        id: "lobulooccipital",
        name: "Lóbulo occipital",
        group: "Encéfalo",
        region: "Telencéfalo",
        type: "Región cortical",
        function:
          "Procesa la información visual.",
        relations:
          "Ocupa la región posterior del hemisferio cerebral.",
        keyFact:
          "Contiene corteza visual primaria.",
        clinicalNote:
          "Su lesión puede causar defectos campimétricos o agnosias visuales.",
      },
      {
        id: "cerebelo",
        name: "Cerebelo",
        group: "Encéfalo",
        region: "Fosa craneal posterior",
        type: "Órgano del sistema nervioso central",
        function:
          "Coordina movimiento, equilibrio, precisión motora y aprendizaje motor.",
        relations:
          "Se conecta con tronco encefálico mediante pedúnculos cerebelosos.",
        keyFact:
          "No inicia el movimiento, pero afina su ejecución.",
        clinicalNote:
          "Su lesión se relaciona con ataxia, dismetría y alteraciones del equilibrio.",
      },
      {
        id: "tronco",
        name: "Tronco encefálico",
        group: "Encéfalo",
        region: "Base del encéfalo",
        type: "Conjunto estructural",
        function:
          "Conduce vías ascendentes y descendentes y contiene centros vitales.",
        relations:
          "Incluye mesencéfalo, puente y bulbo raquídeo; conecta encéfalo con médula.",
        keyFact:
          "Es esencial para funciones cardiorrespiratorias y estado de conciencia.",
        clinicalNote:
          "Las lesiones aquí pueden comprometer funciones vitales.",
      },
      {
        id: "mesencefalo",
        name: "Mesencéfalo",
        group: "Encéfalo",
        region: "Tronco encefálico",
        type: "Porción del tronco encefálico",
        function:
          "Participa en vías motoras, reflejos visuales y auditivos y control oculomotor.",
        relations:
          "Se ubica entre diencéfalo y puente.",
        keyFact:
          "Contiene núcleos relacionados con movimientos oculares y sustancia negra.",
        clinicalNote:
          "Es relevante en vías extrapiramidales y síndromes del tronco.",
      },
      {
        id: "puente",
        name: "Puente",
        group: "Encéfalo",
        region: "Tronco encefálico",
        type: "Porción del tronco encefálico",
        function:
          "Participa en conducción de vías y conexiones con cerebelo.",
        relations:
          "Se ubica entre mesencéfalo y bulbo raquídeo.",
        keyFact:
          "Tiene importante conexión con circuitos cerebelosos.",
        clinicalNote:
          "Su lesión altera funciones de tronco y vías largas.",
      },
      {
        id: "bulbo",
        name: "Bulbo raquídeo",
        group: "Encéfalo",
        region: "Tronco encefálico inferior",
        type: "Porción del tronco encefálico",
        function:
          "Contiene centros fundamentales para funciones respiratorias y cardiovasculares.",
        relations:
          "Se continúa caudalmente con médula espinal.",
        keyFact:
          "Es anatómicamente crucial para funciones vitales autónomas.",
        clinicalNote:
          "Las lesiones bulbares pueden ser gravemente comprometedoras.",
      },
      {
        id: "medula",
        name: "Médula espinal",
        group: "Sistema nervioso central",
        region: "Canal vertebral",
        type: "Estructura del sistema nervioso central",
        function:
          "Conduce impulsos entre encéfalo y cuerpo y participa en reflejos.",
        relations:
          "Está protegida por la columna vertebral y rodeada por meninges.",
        keyFact:
          "Es un eje clave de sensibilidad y motricidad.",
        clinicalNote:
          "Las lesiones medulares pueden alterar movilidad, sensibilidad y control autonómico.",
      },
      {
        id: "talamo",
        name: "Tálamo",
        group: "Diencéfalo",
        region: "Diencéfalo",
        type: "Núcleo encefálico",
        function:
          "Actúa como relevo principal de información sensitiva hacia corteza cerebral.",
        relations:
          "Se conecta con múltiples áreas corticales y subcorticales.",
        keyFact:
          "Tiene un rol clave en integración sensorial y motora.",
        clinicalNote:
          "Las lesiones talámicas alteran sensibilidad y procesamiento sensorial.",
      },
      {
        id: "hipotalamo",
        name: "Hipotálamo",
        group: "Diencéfalo",
        region: "Diencéfalo",
        type: "Centro regulador",
        function:
          "Regula homeostasis, sistema endocrino y funciones autonómicas.",
        relations:
          "Se relaciona estrechamente con la hipófisis.",
        keyFact:
          "Es clave en temperatura, apetito, sed y regulación hormonal.",
        clinicalNote:
          "Su alteración puede afectar múltiples ejes neuroendocrinos.",
      },
      {
        id: "cuerpocalloso",
        name: "Cuerpo calloso",
        group: "Conexiones cerebrales",
        region: "Encéfalo",
        type: "Comisura cerebral",
        function:
          "Conecta ambos hemisferios cerebrales.",
        relations:
          "Se ubica profundo a la corteza cerebral.",
        keyFact:
          "Facilita la comunicación interhemisférica.",
        clinicalNote:
          "Tiene relevancia en integración funcional cerebral.",
      },
      {
        id: "nerviooptico",
        name: "Nervio óptico (II)",
        group: "Nervios craneales",
        region: "Sistema nervioso periférico craneal",
        type: "Nervio craneal sensitivo especial",
        function:
          "Transmite información visual desde la retina al encéfalo.",
        relations:
          "Se relaciona con quiasma óptico y vías visuales.",
        keyFact:
          "Es central en la vía visual aferente.",
        clinicalNote:
          "Su lesión produce alteraciones campimétricas y visuales específicas.",
      },
      {
        id: "trigemino",
        name: "Nervio trigémino (V)",
        group: "Nervios craneales",
        region: "Sistema nervioso periférico craneal",
        type: "Nervio craneal mixto",
        function:
          "Aporta sensibilidad principal de la cara y motor para músculos de la masticación.",
        relations:
          "Se divide en ramas oftálmica, maxilar y mandibular.",
        keyFact:
          "Es el principal nervio sensitivo de la cara.",
        clinicalNote:
          "Tiene gran importancia en dolor facial y exploración neurológica.",
      },
      {
        id: "nerviociatico",
        name: "Nervio ciático",
        group: "Nervios periféricos",
        region: "Miembro inferior",
        type: "Nervio periférico",
        function:
          "Aporta inervación importante a la región glútea, muslo y gran parte de la pierna y pie por sus divisiones.",
        relations:
          "Se relaciona con región glútea profunda y compartimentos del miembro inferior.",
        keyFact:
          "Es uno de los nervios más grandes del cuerpo.",
        clinicalNote:
          "Tiene gran relevancia en dolor radicular y neuropatías compresivas.",
      },
    ],
  },

  endocrino: {
    title: "Sistema endocrino",
    subtitle:
      "Regula metabolismo, crecimiento, reproducción y homeostasis mediante hormonas producidas por glándulas y tejidos especializados.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema endocrino comprende glándulas y tejidos que secretan hormonas hacia la circulación para regular funciones corporales a distancia.",
      mainFunctions: [
        "Regulación del metabolismo y balance energético",
        "Control del crecimiento y desarrollo",
        "Modulación de respuesta al estrés",
        "Regulación del equilibrio hidroelectrolítico",
        "Control de reproducción y función sexual",
      ],
      academicNote:
        "En medicina se estudia por glándulas, hormonas y ejes de regulación neuroendocrina.",
      sourceBase:
        "OpenStax Anatomy and Physiology 2e; Gray's Anatomy for Students, 5e; textos biomédicos de endocrinología básica",
    },
    structures: [
      {
        id: "hipofisis",
        name: "Hipófisis",
        group: "Eje hipotálamo-hipofisario",
        region: "Base del encéfalo",
        type: "Glándula endocrina",
        function:
          "Secreta hormonas tróficas y participa como glándula central en múltiples ejes endocrinos.",
        relations:
          "Se ubica en la silla turca y se conecta con el hipotálamo.",
        keyFact:
          "Se divide en adenohipófisis y neurohipófisis.",
        clinicalNote:
          "Sus alteraciones repercuten en crecimiento, tiroides, suprarrenales y reproducción.",
      },
      {
        id: "hipotalamoendocrino",
        name: "Hipotálamo",
        group: "Eje hipotálamo-hipofisario",
        region: "Diencéfalo",
        type: "Centro neuroendocrino",
        function:
          "Integra señales nerviosas y endocrinas y regula liberación hormonal hipofisaria.",
        relations:
          "Se relaciona anatómica y funcionalmente con la hipófisis.",
        keyFact:
          "Es una estructura de unión entre sistema nervioso y sistema endocrino.",
        clinicalNote:
          "Su alteración puede afectar temperatura, hambre, sed y ejes hormonales.",
      },
      {
        id: "tiroides",
        name: "Tiroides",
        group: "Glándulas cervicales",
        region: "Cuello anterior",
        type: "Glándula endocrina",
        function:
          "Produce hormonas tiroideas y calcitonina.",
        relations:
          "Se localiza anterior a la tráquea e inferior a la laringe.",
        keyFact:
          "Las hormonas tiroideas son esenciales para metabolismo basal y desarrollo.",
        clinicalNote:
          "Los trastornos tiroideos afectan peso, frecuencia cardiaca y termorregulación.",
      },
      {
        id: "paratiroides",
        name: "Paratiroides",
        group: "Glándulas cervicales",
        region: "Cara posterior de la tiroides",
        type: "Glándulas endocrinas",
        function:
          "Regulan el calcio plasmático a través de la hormona paratiroidea.",
        relations:
          "Suelen ser cuatro y se relacionan estrechamente con la glándula tiroides.",
        keyFact:
          "Son cruciales en homeostasis del calcio y fósforo.",
        clinicalNote:
          "Su lesión en cirugía cervical puede alterar severamente el metabolismo del calcio.",
      },
      {
        id: "suprarrenales",
        name: "Glándulas suprarrenales",
        group: "Glándulas abdominales",
        region: "Polo superior renal",
        type: "Glándulas endocrinas",
        function:
          "Producen hormonas corticales y catecolaminas medulares.",
        relations:
          "Se sitúan sobre los riñones y poseen rica irrigación.",
        keyFact:
          "Corteza y médula tienen origen y función distintos.",
        clinicalNote:
          "Participan en respuesta al estrés, presión arterial y balance hidroelectrolítico.",
      },
      {
        id: "pancreasendocrino",
        name: "Páncreas endocrino",
        group: "Glándulas abdominales",
        region: "Abdomen superior",
        type: "Tejido endocrino",
        function:
          "Secreta insulina, glucagón y otras hormonas metabólicas.",
        relations:
          "Sus islotes endocrinos se encuentran dispersos en el páncreas.",
        keyFact:
          "Es clave en regulación de la glucemia.",
        clinicalNote:
          "Su disfunción se relaciona con diabetes mellitus y otras alteraciones metabólicas.",
      },
      {
        id: "gonadasendocrinas",
        name: "Gónadas",
        group: "Glándulas reproductivas",
        region: "Pelvis / escroto",
        type: "Órganos endocrinos y reproductivos",
        function:
          "Producen hormonas sexuales además de gametos.",
        relations:
          "Incluyen ovarios y testículos según el sistema estudiado.",
        keyFact:
          "Conectan estrechamente regulación endocrina y función reproductiva.",
        clinicalNote:
          "Tienen relevancia en pubertad, fertilidad y endocrinología sexual.",
      },
    ],
  },

  cardiovascular: {
    title: "Sistema cardiovascular",
    subtitle:
      "Transporta oxígeno, nutrientes, hormonas y productos de desecho mediante corazón, sangre y vasos sanguíneos.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema cardiovascular está integrado por corazón, vasos sanguíneos y sangre, y mantiene la perfusión tisular y el transporte de sustancias en todo el organismo.",
      mainFunctions: [
        "Transporte de oxígeno y dióxido de carbono",
        "Distribución de nutrientes y hormonas",
        "Eliminación de desechos metabólicos",
        "Contribución a homeostasis térmica y ácido-base",
        "Sostén de la perfusión tisular",
      ],
      academicNote:
        "En anatomía médica se estudia por corazón, grandes vasos, circulación sistémica, pulmonar y drenaje venoso.",
      sourceBase:
        "OpenStax Anatomy and Physiology 2e; Gray's Anatomy for Students, 5e; Moore Clinically Oriented Anatomy, 9e",
    },
    structures: [
      {
        id: "corazon",
        name: "Corazón",
        group: "Corazón",
        region: "Mediastino medio",
        type: "Órgano muscular hueco",
        function:
          "Actúa como bomba central de la circulación sistémica y pulmonar.",
        relations:
          "Se ubica entre ambos pulmones y se relaciona con pericardio y grandes vasos.",
        keyFact:
          "Tiene cuatro cavidades y válvulas que dirigen el flujo sanguíneo.",
        clinicalNote:
          "La anatomía cardiaca es esencial para entender irrigación, conducción y patología valvular.",
      },
      {
        id: "auriculaderecha",
        name: "Aurícula derecha",
        group: "Corazón",
        region: "Corazón",
        type: "Cavidad cardiaca",
        function:
          "Recibe sangre venosa sistémica.",
        relations:
          "Se relaciona con vena cava superior, vena cava inferior y seno coronario.",
        keyFact:
          "Es la principal puerta de entrada del retorno venoso sistémico al corazón.",
        clinicalNote:
          "Su anatomía es relevante en electrofisiología y retorno venoso.",
      },
      {
        id: "auriculaizquierda",
        name: "Aurícula izquierda",
        group: "Corazón",
        region: "Corazón",
        type: "Cavidad cardiaca",
        function:
          "Recibe sangre oxigenada procedente de venas pulmonares.",
        relations:
          "Se comunica con el ventrículo izquierdo a través de la válvula mitral.",
        keyFact:
          "Tiene gran relevancia en la circulación pulmonar-cardiaca.",
        clinicalNote:
          "Es importante en trastornos del ritmo y hemodinámica mitral.",
      },
      {
        id: "ventriculoderecho",
        name: "Ventrículo derecho",
        group: "Corazón",
        region: "Corazón",
        type: "Cavidad cardiaca",
        function:
          "Bombea sangre hacia la circulación pulmonar.",
        relations:
          "Se continúa con el tronco pulmonar.",
        keyFact:
          "Su carga funcional principal es la perfusión pulmonar.",
        clinicalNote:
          "Su alteración afecta la circulación de baja presión del pulmón.",
      },
      {
        id: "ventriculoizquierdo",
        name: "Ventrículo izquierdo",
        group: "Corazón",
        region: "Corazón",
        type: "Cavidad cardiaca",
        function:
          "Bombea sangre hacia la circulación sistémica.",
        relations:
          "Se continúa con la aorta ascendente.",
        keyFact:
          "Posee pared más gruesa que el ventrículo derecho por su carga hemodinámica.",
        clinicalNote:
          "Su función es central en gasto cardiaco sistémico.",
      },
      {
        id: "aorta",
        name: "Aorta",
        group: "Grandes vasos",
        region: "Tórax y abdomen",
        type: "Arteria elástica",
        function:
          "Distribuye sangre oxigenada desde el ventrículo izquierdo al organismo.",
        relations:
          "Se organiza en aorta ascendente, arco aórtico y aorta descendente.",
        keyFact:
          "Es la arteria principal de la circulación sistémica.",
        clinicalNote:
          "Su integridad anatómica es crítica en aneurisma y disección.",
      },
      {
        id: "venacava",
        name: "Venas cavas",
        group: "Grandes vasos",
        region: "Tórax",
        type: "Grandes venas",
        function:
          "Retornan sangre venosa sistémica a la aurícula derecha.",
        relations:
          "Incluyen vena cava superior e inferior.",
        keyFact:
          "Recogen drenaje venoso de gran parte del cuerpo.",
        clinicalNote:
          "Su obstrucción altera de forma importante el retorno venoso.",
      },
      {
        id: "arteriascoronarias",
        name: "Arterias coronarias",
        group: "Vasos del corazón",
        region: "Superficie cardiaca",
        type: "Arterias musculares",
        function:
          "Irrigan el miocardio.",
        relations:
          "Se originan en la raíz de la aorta.",
        keyFact:
          "Su distribución tiene alta relevancia anatómica y clínica.",
        clinicalNote:
          "La enfermedad coronaria es central en cardiología clínica.",
      },
      {
        id: "venascoronarias",
        name: "Venas coronarias",
        group: "Vasos del corazón",
        region: "Superficie cardiaca",
        type: "Sistema venoso cardiaco",
        function:
          "Drenan la sangre venosa del miocardio.",
        relations:
          "Convergen principalmente en el seno coronario.",
        keyFact:
          "Son esenciales en el retorno venoso cardiaco.",
        clinicalNote:
          "Tienen importancia en procedimientos cardiacos e interpretación anatómica.",
      },
      {
        id: "capilares",
        name: "Capilares",
        group: "Microcirculación",
        region: "Lechos tisulares",
        type: "Microvasculatura",
        function:
          "Permiten intercambio de gases, nutrientes y desechos con tejidos.",
        relations:
          "Conectan arteriolas y vénulas.",
        keyFact:
          "Son el principal sitio de intercambio entre sangre y tejidos.",
        clinicalNote:
          "Su función es clave en perfusión, inflamación y edema.",
      },
    ],
  },

  linfatico: {
    title: "Sistema linfático e inmunitario",
    subtitle:
      "Drena líquido intersticial, transporta linfa y participa en defensa inmunológica.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema linfático e inmunitario comprende vasos linfáticos, ganglios y órganos linfoides que participan en drenaje tisular y respuesta defensiva del organismo.",
      mainFunctions: [
        "Retorno del exceso de líquido intersticial a la circulación",
        "Transporte de linfa y de grasas absorbidas desde el intestino",
        "Filtrado inmunológico y activación de respuestas defensivas",
        "Participación en vigilancia inmunitaria sistémica",
      ],
      academicNote:
        "Algunas clasificaciones lo separan en sistema linfático y sistema inmune; en cursos introductorios suele estudiarse integrado.",
      sourceBase:
        "OpenStax Anatomy and Physiology 2e; Gray's Anatomy for Students, 5e",
    },
    structures: [
      {
        id: "ganglios",
        name: "Ganglios linfáticos",
        group: "Órganos linfoides",
        region: "Trayectos linfáticos corporales",
        type: "Órganos linfoides secundarios",
        function:
          "Filtran linfa y participan en activación inmunológica.",
        relations:
          "Se distribuyen en cadenas cervicales, axilares, mediastínicas, abdominales e inguinales, entre otras.",
        keyFact:
          "Son clave en drenaje regional y propagación de procesos infecciosos o neoplásicos.",
        clinicalNote:
          "La adenopatía tiene gran valor semiológico.",
      },
      {
        id: "bazo",
        name: "Bazo",
        group: "Órganos linfoides",
        region: "Hipocondrio izquierdo",
        type: "Órgano linfoide",
        function:
          "Filtra sangre, participa en respuesta inmune y manejo de eritrocitos envejecidos.",
        relations:
          "Se relaciona con estómago, diafragma, riñón izquierdo y cola del páncreas.",
        keyFact:
          "A diferencia de los ganglios, filtra sangre y no linfa.",
        clinicalNote:
          "Su fragilidad anatómica es relevante en trauma abdominal.",
      },
      {
        id: "timo",
        name: "Timo",
        group: "Órganos linfoides",
        region: "Mediastino anterior superior",
        type: "Órgano linfoide primario",
        function:
          "Participa en maduración de linfocitos T.",
        relations:
          "Tiene mayor desarrollo en etapas tempranas de la vida.",
        keyFact:
          "Involuciona con la edad.",
        clinicalNote:
          "Es importante en inmunología básica y algunas patologías mediastínicas.",
      },
      {
        id: "vasoslinfaticos",
        name: "Vasos linfáticos",
        group: "Conductos y vasos",
        region: "Distribución sistémica",
        type: "Red vascular especializada",
        function:
          "Recogen líquido intersticial y transportan linfa hacia la circulación venosa.",
        relations:
          "Se relacionan con conducto torácico y gran conducto linfático derecho.",
        keyFact:
          "Complementan el equilibrio de líquidos del cuerpo.",
        clinicalNote:
          "La obstrucción linfática produce linfedema.",
      },
      {
        id: "conductotoracico",
        name: "Conducto torácico",
        group: "Conductos y vasos",
        region: "Tórax",
        type: "Conducto linfático principal",
        function:
          "Drena gran parte de la linfa corporal hacia el sistema venoso.",
        relations:
          "Desemboca en el ángulo venoso izquierdo.",
        keyFact:
          "Es la principal vía de retorno linfático del cuerpo.",
        clinicalNote:
          "Tiene relevancia en cirugía torácica y patología linfática.",
      },
      {
        id: "amigdalas",
        name: "Amígdalas",
        group: "Órganos linfoides",
        region: "Anillo faríngeo",
        type: "Tejido linfoide",
        function:
          "Participan en vigilancia inmunológica en la entrada de vías digestiva y respiratoria.",
        relations:
          "Se localizan en la región orofaríngea y nasofaríngea según el tipo.",
        keyFact:
          "Forman parte del anillo linfático faríngeo.",
        clinicalNote:
          "Son relevantes en infecciones de vía aérea superior.",
      },
    ],
  },

  respiratorio: {
    title: "Sistema respiratorio",
    subtitle:
      "Asegura ventilación e intercambio gaseoso entre el organismo y el medio externo.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema respiratorio comprende vías aéreas y pulmones, y participa en ventilación, intercambio gaseoso y regulación ácido-base.",
      mainFunctions: [
        "Ingreso de oxígeno y eliminación de dióxido de carbono",
        "Acondicionamiento del aire inspirado",
        "Participación en fonación",
        "Contribución al equilibrio ácido-base",
      ],
      academicNote:
        "En anatomía médica se estudia por vías aéreas superiores, inferiores, pulmones y pleuras.",
      sourceBase:
        "OpenStax Anatomy and Physiology 2e; Gray's Anatomy for Students, 5e; Moore Clinically Oriented Anatomy, 9e",
    },
    structures: [
      {
        id: "cavidadnasal",
        name: "Cavidad nasal",
        group: "Vías aéreas superiores",
        region: "Cara y base del cráneo",
        type: "Vía aérea superior",
        function:
          "Filtra, humedece y calienta el aire inspirado.",
        relations:
          "Se comunica con senos paranasales y nasofaringe.",
        keyFact:
          "Es la primera gran región de acondicionamiento del aire.",
        clinicalNote:
          "Su anatomía es relevante en obstrucción nasal y sinusopatía.",
      },
      {
        id: "faringe",
        name: "Faringe",
        group: "Vías aéreas superiores",
        region: "Cuello",
        type: "Conducto musculomembranoso",
        function:
          "Conduce aire hacia laringe y participa también en la vía digestiva.",
        relations:
          "Se divide en nasofaringe, orofaringe y laringofaringe.",
        keyFact:
          "Es una región compartida por sistemas respiratorio y digestivo.",
        clinicalNote:
          "Es relevante en deglución, vía aérea y procesos infecciosos.",
      },
      {
        id: "laringe",
        name: "Laringe",
        group: "Vías aéreas superiores",
        region: "Cuello anterior",
        type: "Órgano cartilaginoso",
        function:
          "Conduce aire y participa en fonación y protección de la vía aérea inferior.",
        relations:
          "Se continúa con faringe superiormente y tráquea inferiormente.",
        keyFact:
          "Contiene las cuerdas vocales.",
        clinicalNote:
          "Es central en voz, vía aérea y deglución segura.",
      },
      {
        id: "traquea",
        name: "Tráquea",
        group: "Vías aéreas inferiores",
        region: "Cuello y tórax",
        type: "Conducto respiratorio",
        function:
          "Conduce aire hacia bronquios principales.",
        relations:
          "Se extiende desde laringe hasta carina.",
        keyFact:
          "Está reforzada por anillos cartilaginosos.",
        clinicalNote:
          "Su anatomía es fundamental en intubación y manejo de vía aérea.",
      },
      {
        id: "bronquios",
        name: "Bronquios",
        group: "Vías aéreas inferiores",
        region: "Tórax",
        type: "Vías aéreas inferiores",
        function:
          "Distribuyen aire desde tráquea hacia el árbol bronquial intrapulmonar.",
        relations:
          "Se dividen en bronquios principales, lobares y segmentarios.",
        keyFact:
          "Su organización sigue la segmentación pulmonar.",
        clinicalNote:
          "Es esencial para correlación con infección, obstrucción y broncoscopía.",
      },
      {
        id: "pulmones",
        name: "Pulmones",
        group: "Pulmones y pleuras",
        region: "Cavidad torácica",
        type: "Órganos respiratorios",
        function:
          "Realizan intercambio gaseoso a nivel alveolar.",
        relations:
          "Se encuentran recubiertos por pleura y separados por mediastino.",
        keyFact:
          "El pulmón derecho e izquierdo presentan diferencias anatómicas relevantes.",
        clinicalNote:
          "Su segmentación anatómica es clave en imagenología y cirugía.",
      },
      {
        id: "pleura",
        name: "Pleura",
        group: "Pulmones y pleuras",
        region: "Cavidad torácica",
        type: "Membrana serosa",
        function:
          "Reduce fricción y facilita movimiento pulmonar durante la ventilación.",
        relations:
          "Incluye pleura visceral y parietal con una cavidad pleural potencial entre ambas.",
        keyFact:
          "Es esencial en la mecánica de expansión pulmonar.",
        clinicalNote:
          "Las alteraciones pleurales son clínicamente muy relevantes en neumotórax y derrame.",
      },
      {
        id: "alveolos",
        name: "Alvéolos",
        group: "Pulmones y pleuras",
        region: "Parénquima pulmonar",
        type: "Unidades de intercambio gaseoso",
        function:
          "Permiten difusión de oxígeno y dióxido de carbono entre aire y sangre.",
        relations:
          "Se encuentran rodeados de una densa red capilar.",
        keyFact:
          "Constituyen la base funcional del intercambio gaseoso pulmonar.",
        clinicalNote:
          "Su alteración compromete ventilación y oxigenación.",
      },
    ],
  },

  digestivo: {
    title: "Sistema digestivo",
    subtitle:
      "Procesa alimentos, absorbe nutrientes y agua, y elimina residuos no aprovechables.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema digestivo comprende tubo digestivo y órganos accesorios encargados de ingestión, digestión, absorción y eliminación de residuos.",
      mainFunctions: [
        "Digestión mecánica y química",
        "Absorción de nutrientes, agua y electrolitos",
        "Procesamiento hepático y secreciones digestivas accesorias",
        "Eliminación de residuos no absorbidos",
      ],
      academicNote:
        "En medicina se estudia por trayecto anatómico, irrigación, inervación y correlación clínica.",
      sourceBase:
        "Gray's Anatomy for Students, 5e; Moore Clinically Oriented Anatomy, 9e; Netter Atlas of Human Anatomy",
    },
    structures: [
      {
        id: "boca",
        name: "Boca",
        group: "Tracto digestivo superior",
        region: "Inicio del tubo digestivo",
        type: "Cavidad",
        function:
          "Inicia digestión mecánica y química y participa en fonación y deglución.",
        relations:
          "Se comunica con faringe y aloja estructuras dentarias y linguales.",
        keyFact:
          "La digestión comienza aquí.",
        clinicalNote:
          "Su estado influye en masticación, deglución y salud general.",
      },
      {
        id: "faringedigestiva",
        name: "Faringe",
        group: "Tracto digestivo superior",
        region: "Cuello",
        type: "Conducto musculomembranoso",
        function:
          "Conduce el bolo alimenticio desde cavidad oral hacia esófago.",
        relations:
          "Conecta boca con esófago y participa en la fase faríngea de la deglución.",
        keyFact:
          "Es una región compartida por sistemas digestivo y respiratorio.",
        clinicalNote:
          "Es clave en deglución segura y prevención de aspiración.",
      },
      {
        id: "esofago",
        name: "Esófago",
        group: "Tracto digestivo superior",
        region: "Cuello y tórax",
        type: "Tubo muscular",
        function:
          "Conduce el bolo alimenticio al estómago mediante peristaltismo.",
        relations:
          "Conecta faringe con estómago.",
        keyFact:
          "Es una estructura clave en tránsito alimentario.",
        clinicalNote:
          "Su anatomía es central en disfagia y reflujo.",
      },
      {
        id: "estomago",
        name: "Estómago",
        group: "Tracto digestivo superior",
        region: "Abdomen superior",
        type: "Órgano hueco",
        function:
          "Mezcla el alimento con secreciones gástricas e inicia digestión más intensa.",
        relations:
          "Se conecta con esófago y duodeno.",
        keyFact:
          "Actúa como reservorio y cámara de mezcla.",
        clinicalNote:
          "Es central en gastritis, úlcera y alteraciones del vaciamiento.",
      },
      {
        id: "higado",
        name: "Hígado",
        group: "Órganos accesorios",
        region: "Hipocondrio derecho y epigastrio",
        type: "Órgano accesorio",
        function:
          "Produce bilis y participa en metabolismo, almacenamiento y detoxificación.",
        relations:
          "Se relaciona con vesícula biliar, diafragma y tubo digestivo proximal.",
        keyFact:
          "Es uno de los órganos metabólicamente más complejos.",
        clinicalNote:
          "Su anatomía segmentaria es de gran importancia clínica y quirúrgica.",
      },
      {
        id: "vesicula",
        name: "Vesícula biliar",
        group: "Órganos accesorios",
        region: "Cara inferior del hígado",
        type: "Órgano accesorio",
        function:
          "Almacena y concentra bilis.",
        relations:
          "Se conecta con vías biliares y duodeno de manera indirecta.",
        keyFact:
          "No produce bilis; la almacena.",
        clinicalNote:
          "Es relevante en litiasis y patología biliar.",
      },
      {
        id: "pancreas",
        name: "Páncreas",
        group: "Órganos accesorios",
        region: "Abdomen superior",
        type: "Glándula mixta",
        function:
          "Produce enzimas digestivas en su porción exocrina y hormonas en su porción endocrina.",
        relations:
          "Se relaciona con duodeno, bazo y grandes vasos abdominales.",
        keyFact:
          "Tiene función exocrina y endocrina.",
        clinicalNote:
          "Es muy relevante en digestión, glucemia y enfermedad inflamatoria o tumoral.",
      },
      {
        id: "duodeno",
        name: "Duodeno",
        group: "Intestino delgado",
        region: "Abdomen superior",
        type: "Primer segmento del intestino delgado",
        function:
          "Recibe quimo gástrico, bilis y secreciones pancreáticas.",
        relations:
          "Se continúa con yeyuno y rodea parcialmente la cabeza del páncreas.",
        keyFact:
          "Es una región anatómica clave en integración digestiva inicial.",
        clinicalNote:
          "Es muy relevante en úlcera péptica y relaciones hepatopancreáticas.",
      },
      {
        id: "yeyuno",
        name: "Yeyuno",
        group: "Intestino delgado",
        region: "Intestino delgado",
        type: "Segmento intestinal",
        function:
          "Participa de forma importante en absorción de nutrientes.",
        relations:
          "Se localiza entre duodeno e íleon.",
        keyFact:
          "Tiene una arquitectura adaptada a absorción eficiente.",
        clinicalNote:
          "Es relevante en nutrición y patología del intestino delgado.",
      },
      {
        id: "ileon",
        name: "Íleon",
        group: "Intestino delgado",
        region: "Intestino delgado distal",
        type: "Segmento intestinal",
        function:
          "Contribuye a absorción y se continúa con el intestino grueso.",
        relations:
          "Termina en la válvula ileocecal.",
        keyFact:
          "Tiene importancia en absorción específica de algunos compuestos.",
        clinicalNote:
          "Su afectación compromete absorción y tránsito intestinal.",
      },
      {
        id: "intestinogrueso",
        name: "Intestino grueso",
        group: "Intestino grueso",
        region: "Abdomen y pelvis",
        type: "Segmento tubular",
        function:
          "Reabsorbe agua y participa en formación y almacenamiento de heces.",
        relations:
          "Incluye ciego, colon, recto y canal anal proximal.",
        keyFact:
          "Su principal función no es absorber la mayor parte de nutrientes.",
        clinicalNote:
          "Es central en trastornos inflamatorios, obstructivos y funcionales del tránsito.",
      },
      {
        id: "recto",
        name: "Recto",
        group: "Intestino grueso",
        region: "Pelvis",
        type: "Segmento terminal del intestino grueso",
        function:
          "Almacena transitoriamente el contenido fecal antes de la defecación.",
        relations:
          "Se continúa con colon sigmoide proximalmente y con canal anal distalmente.",
        keyFact:
          "Tiene importancia funcional en continencia y evacuación.",
        clinicalNote:
          "Es anatómicamente central en cirugía colorrectal y exploración clínica.",
      },
    ],
  },

  urinario: {
    title: "Sistema urinario",
    subtitle:
      "Filtra la sangre, regula equilibrio hídrico-electrolítico y elimina desechos nitrogenados.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema urinario comprende riñones, uréteres, vejiga y uretra, y participa en excreción, regulación de volumen y composición del medio interno.",
      mainFunctions: [
        "Filtración de sangre y formación de orina",
        "Regulación del equilibrio hídrico y electrolítico",
        "Participación en regulación ácido-base",
        "Contribución al control de presión arterial y eritropoyesis",
      ],
      academicNote:
        "En medicina se estudia por anatomía macroscópica, nefrona, irrigación y vías urinarias.",
      sourceBase:
        "OpenStax Anatomy and Physiology 2e; Gray's Anatomy for Students, 5e",
    },
    structures: [
      {
        id: "rinones",
        name: "Riñones",
        group: "Riñón",
        region: "Retroperitoneo",
        type: "Órganos pares",
        function:
          "Filtran sangre y producen orina.",
        relations:
          "Se ubican retroperitonealmente y se relacionan con vasos renales, suprarrenales y uréteres.",
        keyFact:
          "Son fundamentales en regulación del medio interno.",
        clinicalNote:
          "Su alteración impacta líquidos, electrolitos, presión arterial y excreción.",
      },
      {
        id: "cortezarenal",
        name: "Corteza renal",
        group: "Riñón",
        region: "Riñón",
        type: "Región anatómica renal",
        function:
          "Contiene corpúsculos renales y participa en procesos iniciales de filtración.",
        relations:
          "Se sitúa periféricamente respecto a la médula renal.",
        keyFact:
          "Alberga gran parte de las estructuras iniciales de la nefrona.",
        clinicalNote:
          "Es importante en correlación anatomo-funcional renal.",
      },
      {
        id: "medularrenal",
        name: "Médula renal",
        group: "Riñón",
        region: "Riñón",
        type: "Región anatómica renal",
        function:
          "Contribuye a concentración urinaria mediante su organización tubular y de gradiente osmótico.",
        relations:
          "Está formada por pirámides renales dirigidas hacia las papilas.",
        keyFact:
          "Es clave en la capacidad de concentración de la orina.",
        clinicalNote:
          "Su integridad es importante en fisiología renal avanzada.",
      },
      {
        id: "nefrona",
        name: "Nefrona",
        group: "Unidad funcional",
        region: "Parénquima renal",
        type: "Unidad funcional",
        function:
          "Realiza filtración, reabsorción, secreción y formación final de la orina.",
        relations:
          "Se integra por corpúsculo renal y sistema tubular.",
        keyFact:
          "Es la unidad funcional microscópica del riñón.",
        clinicalNote:
          "Su alteración es fundamental en enfermedad renal.",
      },
      {
        id: "ureteres",
        name: "Uréteres",
        group: "Vías urinarias",
        region: "Retroperitoneo y pelvis",
        type: "Conductos musculares",
        function:
          "Transportan orina desde pelvis renal hasta vejiga.",
        relations:
          "Se extienden desde riñones hasta vejiga urinaria.",
        keyFact:
          "Utilizan peristaltismo para propulsar la orina.",
        clinicalNote:
          "Los estrechamientos anatómicos son importantes en litiasis.",
      },
      {
        id: "vejiga",
        name: "Vejiga urinaria",
        group: "Vías urinarias",
        region: "Pelvis",
        type: "Órgano hueco",
        function:
          "Almacena orina antes de la micción.",
        relations:
          "Se relaciona con uréteres, uretra y estructuras pélvicas vecinas.",
        keyFact:
          "Su pared muscular participa activamente en el vaciamiento urinario.",
        clinicalNote:
          "Es central en continencia, retención e infecciones urinarias.",
      },
      {
        id: "uretra",
        name: "Uretra",
        group: "Vías urinarias",
        region: "Pelvis y periné",
        type: "Conducto terminal",
        function:
          "Conduce orina hacia el exterior.",
        relations:
          "Conecta vejiga con el medio externo.",
        keyFact:
          "Presenta diferencias anatómicas relevantes según sexo.",
        clinicalNote:
          "Estas diferencias son clave en clínica, sondaje e infección.",
      },
    ],
  },

  reproductor: {
    title: "Sistema reproductor",
    subtitle:
      "Participa en gametogénesis, reproducción y función sexual; su organización anatómica difiere entre sexos.",
    modelPath: "/models/lkn.glb",
    overview: {
      definition:
        "El sistema reproductor comprende órganos y glándulas involucrados en producción de gametos, función sexual, fecundación, gestación y lactancia según el contexto anatómico correspondiente.",
      mainFunctions: [
        "Producción y transporte de gametos",
        "Secreción de hormonas sexuales",
        "Participación en fecundación",
        "En el sistema femenino, soporte de gestación y parto",
      ],
      academicNote:
        "En muchos cursos se estudia en bloques masculino y femenino, aunque puede agruparse como un solo sistema.",
      sourceBase:
        "OpenStax Anatomy and Physiology 2e; Gray's Anatomy for Students, 5e; Moore Clinically Oriented Anatomy, 9e",
    },
    structures: [
      {
        id: "gonadas",
        name: "Gónadas",
        group: "General",
        region: "Pelvis / escroto",
        type: "Órganos sexuales primarios",
        function:
          "Producen gametos y hormonas sexuales.",
        relations:
          "Incluyen ovarios y testículos según el sistema estudiado.",
        keyFact:
          "Son la base endocrina y gametogénica del sistema reproductor.",
        clinicalNote:
          "Su función es central en fertilidad y desarrollo sexual.",
      },
      {
        id: "ovarios",
        name: "Ovarios",
        group: "Reproductor femenino",
        region: "Pelvis",
        type: "Gónadas femeninas",
        function:
          "Producen ovocitos y hormonas sexuales femeninas.",
        relations:
          "Se relacionan con trompas uterinas, útero y estructuras pélvicas.",
        keyFact:
          "Tienen función gametogénica y endocrina.",
        clinicalNote:
          "Son centrales en ciclo ovárico, fertilidad y patología anexial.",
      },
      {
        id: "trompas",
        name: "Trompas uterinas",
        group: "Reproductor femenino",
        region: "Pelvis",
        type: "Conductos reproductivos femeninos",
        function:
          "Conducen el ovocito y suelen ser el sitio habitual de fecundación.",
        relations:
          "Se extienden desde la región uterina hacia proximidad de ovarios.",
        keyFact:
          "Su integridad anatómica es importante en fertilidad.",
        clinicalNote:
          "Tienen alta relevancia en patología tubaria y embarazo ectópico.",
      },
      {
        id: "utero",
        name: "Útero",
        group: "Reproductor femenino",
        region: "Pelvis",
        type: "Órgano muscular hueco",
        function:
          "Participa en menstruación, implantación, gestación y parto.",
        relations:
          "Se relaciona con trompas uterinas, vagina, vejiga y recto.",
        keyFact:
          "Su miometrio y endometrio tienen relevancia funcional y clínica mayores.",
        clinicalNote:
          "Es fundamental en obstetricia y ginecología.",
      },
      {
        id: "vagina",
        name: "Vagina",
        group: "Reproductor femenino",
        region: "Pelvis",
        type: "Conducto fibromuscular",
        function:
          "Participa en coito, salida menstrual y canal del parto.",
        relations:
          "Se extiende entre cuello uterino y vestíbulo.",
        keyFact:
          "Tiene gran importancia anatómica y clínica en pelvis femenina.",
        clinicalNote:
          "Su integridad estructural es relevante en obstetricia, ginecología y suelo pélvico.",
      },
      {
        id: "testiculos",
        name: "Testículos",
        group: "Reproductor masculino",
        region: "Escroto",
        type: "Gónadas masculinas",
        function:
          "Producen espermatozoides y testosterona.",
        relations:
          "Se conectan con epidídimo y conductos deferentes.",
        keyFact:
          "Requieren condiciones térmicas específicas para espermatogénesis adecuada.",
        clinicalNote:
          "Tienen relevancia en fertilidad, endocrinología y patología urológica.",
      },
      {
        id: "epididimo",
        name: "Epidídimo",
        group: "Reproductor masculino",
        region: "Escroto",
        type: "Conducto especializado",
        function:
          "Participa en maduración y almacenamiento de espermatozoides.",
        relations:
          "Se ubica adosado al testículo y continúa con el conducto deferente.",
        keyFact:
          "Es esencial en el trayecto espermático.",
        clinicalNote:
          "Su patología es relevante en dolor escrotal y fertilidad masculina.",
      },
      {
        id: "conductodeferente",
        name: "Conducto deferente",
        group: "Reproductor masculino",
        region: "Pelvis / cordón espermático",
        type: "Conducto muscular",
        function:
          "Transporta espermatozoides desde epidídimo hacia vías eyaculadoras.",
        relations:
          "Se integra al cordón espermático y se dirige hacia la pelvis.",
        keyFact:
          "Es importante en la vía espermática masculina.",
        clinicalNote:
          "Tiene relevancia en procedimientos como vasectomía y en anatomía del canal inguinal.",
      },
      {
        id: "prostata",
        name: "Próstata",
        group: "Reproductor masculino",
        region: "Pelvis masculina",
        type: "Glándula accesoria",
        function:
          "Contribuye con secreciones al semen.",
        relations:
          "Se ubica inferior a la vejiga y rodea porción proximal de la uretra.",
        keyFact:
          "Su relación con la uretra explica gran parte de su importancia clínica.",
        clinicalNote:
          "Es central en patología obstructiva e inflamatoria masculina.",
      },
      {
        id: "pene",
        name: "Pene",
        group: "Reproductor masculino",
        region: "Periné masculino",
        type: "Órgano externo",
        function:
          "Participa en micción y función sexual reproductiva.",
        relations:
          "Contiene uretra y tejido eréctil.",
        keyFact:
          "Integra funciones urinarias y reproductivas.",
        clinicalNote:
          "Es relevante en urología, andrología y anatomía perineal.",
      },
    ],
  },
};