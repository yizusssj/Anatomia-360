import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Section({ title, open, onToggle, children }) {
  return (
    <div className="rounded-[12px] bg-white/10 border border-white/10 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full h-[44px] px-4 flex items-center justify-between text-left"
      >
        <span className="text-white/90 text-sm">{title}</span>
        <span
          className={`text-white/70 text-sm transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 pt-1 border-t border-white/10 text-white/80 text-sm space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

function OptionButton({ label, active = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 rounded-lg text-sm border transition ${
        active
          ? "bg-white text-[#1c2431] border-white"
          : "bg-white/5 text-white border-white/10 hover:bg-white/10"
      }`}
    >
      {label}
    </button>
  );
}

export default function Settings() {
  const navigate = useNavigate();

  const [openSection, setOpenSection] = useState(null);
  const [theme, setTheme] = useState("Oscuro");
  const [language, setLanguage] = useState("Español");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e3a4f] via-[#263246] to-[#1c2431] px-5 pt-6 pb-24">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-10">
        <Link
          to="/home"
          className="absolute left-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition"
          aria-label="Volver"
        >
          <span className="text-white text-lg leading-none">←</span>
        </Link>

        <h1 className="text-white text-lg font-semibold">Ajustes</h1>
      </div>

      {/* Panel */}
      <div className="mx-auto w-full max-w-[360px] space-y-3">
        <Section
          title="Mi Perfil"
          open={openSection === "perfil"}
          onToggle={() => toggleSection("perfil")}
        >
          <div className="space-y-2">
            <div>
              <p className="text-white/50 text-xs">Nombre</p>
              <p className="text-white">Usuario Demo</p>
            </div>
            <div>
              <p className="text-white/50 text-xs">Correo</p>
              <p className="text-white">usuario@anatomia360.com</p>
            </div>
            <div>
              <p className="text-white/50 text-xs">Rol</p>
              <p className="text-white">Estudiante</p>
            </div>
          </div>
        </Section>

        <Section
          title="Tema"
          open={openSection === "tema"}
          onToggle={() => toggleSection("tema")}
        >
          <div className="flex flex-wrap gap-2">
            <OptionButton
              label="Claro"
              active={theme === "Claro"}
              onClick={() => setTheme("Claro")}
            />
            <OptionButton
              label="Oscuro"
              active={theme === "Oscuro"}
              onClick={() => setTheme("Oscuro")}
            />
            <OptionButton
              label="Sistema"
              active={theme === "Sistema"}
              onClick={() => setTheme("Sistema")}
            />
          </div>

          <p className="text-white/60 text-xs">
            Selección actual: {theme}
          </p>
        </Section>

        <Section
          title="Idioma"
          open={openSection === "idioma"}
          onToggle={() => toggleSection("idioma")}
        >
          <div className="flex flex-wrap gap-2">
            <OptionButton
              label="Español"
              active={language === "Español"}
              onClick={() => setLanguage("Español")}
            />
            <OptionButton
              label="English"
              active={language === "English"}
              onClick={() => setLanguage("English")}
            />
          </div>

          <p className="text-white/60 text-xs">
            Idioma actual: {language}
          </p>
        </Section>

        <Section
          title="Acerca de"
          open={openSection === "acerca"}
          onToggle={() => toggleSection("acerca")}
        >
          <div className="space-y-2">
            <div>
              <p className="text-white/50 text-xs">Proyecto</p>
              <p className="text-white">Anatomía 360</p>
            </div>
            <div>
              <p className="text-white/50 text-xs">Versión</p>
              <p className="text-white">0.1 MVP</p>
            </div>
            <div>
              <p className="text-white/50 text-xs">Descripción</p>
              <p className="text-white/80">
                Plataforma interactiva para el aprendizaje de anatomía con
                modelos 3D, progreso y evaluaciones.
              </p>
            </div>
          </div>
        </Section>

        <button
          type="button"
          onClick={handleLogout}
          className="w-full h-[44px] px-4 rounded-[10px] bg-white/10 border border-white/10 text-white/90 text-sm text-left hover:bg-white/15 transition"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}