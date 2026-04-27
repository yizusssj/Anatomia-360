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
      `${item.name} ${item.region} ${item.group || ""}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [systemData, search]);

  const groupedStructures = useMemo(() => {
    const groups = {};

    filteredStructures.forEach((item) => {
      const groupName = item.group || "General";
      if (!groups[groupName]) groups[groupName] = [];
      groups[groupName].push(item);
    });

    return groups;
  }, [filteredStructures]);

  const selectedStructure =
    filteredStructures.find((item) => item.id === selectedStructureId) ||
    systemData?.structures?.find((item) => item.id === selectedStructureId) ||
    filteredStructures[0] ||
    null;

  const structureCount = systemData?.structures?.length || 0;
  const groupCount = Object.keys(groupedStructures).length;

  return (
    <div className="min-h-screen bg-[#0b0f15] text-white px-4 sm:px-5 pt-5 pb-24">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-5 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Link
                to="/home"
                className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
                aria-label="Volver"
              >
                <span className="text-lg leading-none">←</span>
              </Link>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Anatomía 360
                </p>
                <h1 className="text-lg sm:text-xl font-bold">
                  Explorar sistemas
                </h1>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-white/50">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {availableSystems.length} sistemas
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {structureCount} estructuras
              </span>
            </div>
          </div>

          <div className="px-4 sm:px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {availableSystems.map((system) => (
                <button
                  key={system.id}
                  type="button"
                  onClick={() => {
                    setSelectedSystem(system.id);
                    setSelectedStructureId(null);
                    setSearch("");
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-sm border transition-all duration-200 ${
                    selectedSystem === system.id
                      ? "bg-white text-[#131a24] border-white shadow-[0_8px_24px_rgba(255,255,255,0.18)]"
                      : "bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {system.shortLabel || system.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {systemData && (
          <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-5 sm:p-6 mb-5 shadow-[0_10px_35px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45 mb-2">
                  Sistema activo
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  {systemData.title}
                </h2>
                <p className="text-white/70 mt-3 leading-relaxed">
                  {systemData.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-sm text-white/75">
                  {structureCount} estructuras
                </span>
                <span className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-sm text-white/75">
                  {groupCount} grupos
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
              <div className="rounded-2xl bg-black/15 border border-white/10 p-4">
                <p className="text-xs text-white/45 uppercase tracking-[0.18em] mb-2">
                  Definición
                </p>
                <p className="text-sm leading-7 text-white/85">
                  {systemData.overview.definition}
                </p>
              </div>

              <div className="rounded-2xl bg-black/15 border border-white/10 p-4">
                <p className="text-xs text-white/45 uppercase tracking-[0.18em] mb-2">
                  Nota académica
                </p>
                <p className="text-sm leading-7 text-white/85">
                  {systemData.overview.academicNote}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-black/15 border border-white/10 p-4">
              <p className="text-xs text-white/45 uppercase tracking-[0.18em] mb-3">
                Funciones principales
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {systemData.overview.mainFunctions.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/85 leading-relaxed"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-black/15 border border-white/10 p-4">
              <p className="text-xs text-white/45 uppercase tracking-[0.18em] mb-2">
                Fuente base
              </p>
              <p className="text-sm leading-7 text-white/75">
                {systemData.overview.sourceBase}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-[340px_1fr_380px] gap-5">
          <aside className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-4 sm:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.22)]">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-base font-semibold">Estructuras</h3>
                <p className="text-xs text-white/45 mt-1">
                  Busca y navega por grupos anatómicos
                </p>
              </div>

              <div className="text-xs text-white/45 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                {filteredStructures.length}
              </div>
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar estructura..."
                className="w-full rounded-2xl bg-white/8 text-white placeholder-white/40 px-4 py-3.5 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/25"
              />
            </div>

            <div className="max-h-[680px] overflow-y-auto pr-1 space-y-4">
              {Object.keys(groupedStructures).length > 0 ? (
                Object.entries(groupedStructures).map(([groupName, items]) => (
                  <div key={groupName}>
                    <div className="sticky top-0 z-10 mb-2">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#111825]/90 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/50">
                        <span>{groupName}</span>
                        <span className="text-white/30">•</span>
                        <span>{items.length}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {items.map((item) => {
                        const isActive = selectedStructure?.id === item.id;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedStructureId(item.id)}
                            className={`w-full text-left rounded-2xl border px-4 py-3 transition-all duration-200 ${
                              isActive
                                ? "bg-white text-[#131a24] border-white shadow-[0_8px_24px_rgba(255,255,255,0.16)]"
                                : "bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08] hover:border-white/20"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-semibold">{item.name}</p>
                                <p
                                  className={`text-xs mt-1 ${
                                    isActive
                                      ? "text-[#131a24]/65"
                                      : "text-white/50"
                                  }`}
                                >
                                  {item.region}
                                </p>
                              </div>

                              <span
                                className={`mt-0.5 text-[10px] px-2 py-1 rounded-full border ${
                                  isActive
                                    ? "border-[#131a24]/10 bg-[#131a24]/5 text-[#131a24]/70"
                                    : "border-white/10 bg-white/5 text-white/45"
                                }`}
                              >
                                {item.type}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-8 text-center text-sm text-white/60">
                  No se encontraron estructuras.
                </div>
              )}
            </div>
          </aside>

          <section className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-4 sm:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.22)] flex flex-col min-h-[760px]">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45 mb-2">
                  Vista del sistema
                </p>
                <h3 className="text-xl font-bold">{systemData.title}</h3>
                <p className="text-sm text-white/60 mt-1 leading-relaxed max-w-2xl">
                  {systemData.subtitle}
                </p>
              </div>

              {selectedStructure && (
                <div className="shrink-0 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                    Seleccionado
                  </p>
                  <p className="font-semibold mt-1">{selectedStructure.name}</p>
                </div>
              )}
            </div>

            <div className="flex-1 mt-5 rounded-[28px] bg-[#0d131d] border border-white/10 overflow-hidden relative min-h-[520px]">
              <ModelViewer modelPath={systemData.modelPath} />

              <div className="absolute inset-x-0 bottom-0 p-4 pointer-events-none">
                <div className="rounded-2xl bg-black/55 backdrop-blur-md border border-white/10 px-4 py-3">
                  {selectedStructure ? (
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                          Estructura seleccionada
                        </p>
                        <p className="font-semibold text-base mt-1">
                          {selectedStructure.name}
                        </p>
                        <p className="text-sm text-white/60 mt-1">
                          {selectedStructure.region}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {selectedStructure.group && (
                          <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/75">
                            {selectedStructure.group}
                          </span>
                        )}
                        <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/75">
                          {selectedStructure.type}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm text-white/65">
                        Selecciona una estructura para ver su detalle.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-4 sm:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.22)]">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/45 mb-2">
                Ficha anatómica
              </p>
              <h3 className="text-lg font-bold">Detalle estructural</h3>
            </div>

            {selectedStructure ? (
              <div className="space-y-4">
                {selectedStructure.image && (
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20">
                    <img
                      src={selectedStructure.image}
                      alt={selectedStructure.name}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                )}

                <div className="rounded-2xl bg-black/15 border border-white/10 p-4">
                  <p className="text-2xl font-extrabold leading-tight">
                    {selectedStructure.name}
                  </p>
                  <p className="text-sm text-white/60 mt-2">
                    {selectedStructure.region}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedStructure.group && (
                      <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/75">
                        {selectedStructure.group}
                      </span>
                    )}
                    <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/75">
                      {selectedStructure.type}
                    </span>
                  </div>
                </div>

                <InfoCard
                  title="Función"
                  content={selectedStructure.function}
                />
                <InfoCard
                  title="Relaciones"
                  content={selectedStructure.relations}
                />
                <InfoCard
                  title="Dato clave"
                  content={selectedStructure.keyFact}
                />
                <InfoCard
                  title="Dato clínico"
                  content={selectedStructure.clinicalNote}
                />
              </div>
            ) : (
              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-8 text-sm text-white/60">
                Selecciona una estructura para ver su ficha anatómica.
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, content }) {
  return (
    <div className="rounded-2xl bg-black/15 border border-white/10 p-4">
      <p className="text-xs text-white/45 uppercase tracking-[0.18em] mb-2">
        {title}
      </p>
      <p className="text-sm leading-7 text-white/85">{content}</p>
    </div>
  );
}