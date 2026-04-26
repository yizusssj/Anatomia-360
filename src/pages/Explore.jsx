import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { exploreData } from "../data/exploreData";
import { bodySystems } from "../data/bodySystems";
import ModelViewer from "../components/ModelViewer";

export default function Explore() {
  const availableSystems = bodySystems.filter(
    (system) => !!exploreData[system.id]
  );

  const [selectedSystem, setSelectedSystem] = useState(
    availableSystems[0]?.id || "oseo"
  );
  const [search, setSearch] = useState("");
  const [selectedStructureId, setSelectedStructureId] = useState(null);

  const systemData = exploreData[selectedSystem];

  const filteredStructures = useMemo(() => {
    const structures = systemData?.structures || [];

    return structures.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [systemData, search]);

  const groupedStructures = useMemo(() => {
    const groups = {};

    filteredStructures.forEach((item) => {
      const groupName = item.group || "General";

      if (!groups[groupName]) {
        groups[groupName] = [];
      }

      groups[groupName].push(item);
    });

    return groups;
  }, [filteredStructures]);

  const selectedStructure =
    filteredStructures.find((item) => item.id === selectedStructureId) ||
    systemData?.structures?.find((item) => item.id === selectedStructureId) ||
    filteredStructures[0] ||
    null;

  return (
    <div className="min-h-screen bg-[#0b0f15] text-white px-5 pt-6 pb-24">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="relative flex items-center justify-center mb-6">
          <Link
            to="/home"
            className="absolute left-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition"
            aria-label="Volver"
          >
            <span className="text-white text-lg leading-none">←</span>
          </Link>

          <h1 className="text-lg font-semibold">Explorar sistemas</h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {availableSystems.map((system) => (
            <button
              key={system.id}
              type="button"
              onClick={() => {
                setSelectedSystem(system.id);
                setSelectedStructureId(null);
                setSearch("");
              }}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                selectedSystem === system.id
                  ? "bg-white text-[#1c2431] border-white"
                  : "bg-white/10 text-white border-white/10 hover:bg-white/15"
              }`}
            >
              {system.shortLabel || system.label}
            </button>
          ))}
        </div>

        {systemData && (
          <div className="rounded-2xl bg-white/10 border border-white/10 p-5 mb-5">
            <h2 className="text-2xl font-bold">{systemData.title}</h2>
            <p className="text-white/70 mt-2">{systemData.subtitle}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wide">
                  Definición
                </p>
                <p className="text-sm leading-relaxed mt-1">
                  {systemData.overview.definition}
                </p>
              </div>

              <div>
                <p className="text-xs text-white/50 uppercase tracking-wide">
                  Nota académica
                </p>
                <p className="text-sm leading-relaxed mt-1">
                  {systemData.overview.academicNote}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs text-white/50 uppercase tracking-wide mb-2">
                Funciones principales
              </p>
              <ul className="space-y-2 text-sm text-white/85">
                {systemData.overview.mainFunctions.map((item, index) => (
                  <li key={index} className="leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-xs text-white/50 uppercase tracking-wide">
                Fuente base
              </p>
              <p className="text-sm leading-relaxed mt-1 text-white/75">
                {systemData.overview.sourceBase}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-[340px_1fr_360px] gap-5">
          <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
            <h2 className="text-base font-semibold mb-3">Estructuras</h2>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar estructura..."
              className="w-full rounded-xl bg-white/10 text-white placeholder-white/50 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            />

            <div className="mt-4 space-y-4 max-h-[520px] overflow-y-auto pr-1">
              {Object.keys(groupedStructures).length > 0 ? (
                Object.entries(groupedStructures).map(([groupName, items]) => (
                  <div key={groupName}>
                    <p className="text-xs uppercase tracking-wide text-white/45 mb-2 px-1">
                      {groupName}
                    </p>

                    <div className="space-y-2">
                      {items.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedStructureId(item.id)}
                          className={`w-full text-left rounded-xl border px-4 py-3 transition ${
                            selectedStructure?.id === item.id
                              ? "bg-white text-[#1c2431] border-white"
                              : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                          }`}
                        >
                          <p className="font-medium">{item.name}</p>
                          <p
                            className={`text-xs mt-1 ${
                              selectedStructure?.id === item.id
                                ? "text-[#1c2431]/70"
                                : "text-white/55"
                            }`}
                          >
                            {item.region}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-white/60 py-6 text-center">
                  No se encontraron estructuras.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/10 p-4 min-h-[520px] flex flex-col">
            <div>
              <h2 className="text-lg font-semibold">{systemData.title}</h2>
              <p className="text-sm text-white/65 mt-1">{systemData.subtitle}</p>
            </div>

            <div className="flex-1 mt-4 rounded-2xl bg-black/20 border border-white/10 overflow-hidden relative min-h-[420px]">
              <ModelViewer modelPath={systemData.modelPath} />

              {selectedStructure && (
                <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 border border-white/10 px-4 py-3 backdrop-blur-sm max-w-[80%]">
                  <p className="text-xs text-white/50">Estructura seleccionada</p>
                  <p className="font-semibold mt-1">{selectedStructure.name}</p>
                  <p className="text-xs text-white/65 mt-1">
                    {selectedStructure.region}
                  </p>
                  {selectedStructure.group && (
                    <p className="text-xs text-white/45 mt-1">
                      Grupo: {selectedStructure.group}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
            <h2 className="text-base font-semibold mb-3">Ficha anatómica</h2>

            {selectedStructure ? (
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-bold">{selectedStructure.name}</p>
                  <p className="text-sm text-white/60 mt-1">
                    {selectedStructure.region}
                  </p>
                  {selectedStructure.group && (
                    <p className="text-xs text-white/45 mt-2 uppercase tracking-wide">
                      {selectedStructure.group}
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">
                    Tipo
                  </p>
                  <p className="text-sm mt-1">{selectedStructure.type}</p>
                </div>

                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">
                    Función
                  </p>
                  <p className="text-sm mt-1 leading-relaxed">
                    {selectedStructure.function}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">
                    Relaciones
                  </p>
                  <p className="text-sm mt-1 leading-relaxed">
                    {selectedStructure.relations}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">
                    Dato clave
                  </p>
                  <p className="text-sm mt-1 leading-relaxed">
                    {selectedStructure.keyFact}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">
                    Dato clínico
                  </p>
                  <p className="text-sm mt-1 leading-relaxed">
                    {selectedStructure.clinicalNote}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-sm text-white/60">
                Selecciona una estructura para ver su ficha anatómica.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}