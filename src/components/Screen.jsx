export default function Screen({ children, variant = "auth" }) {
  // auth = pantallas de login/registro/recuperación
  // app  = pantallas internas con bottom nav
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div
        className={[
          "mx-auto w-full",
          variant === "auth"
            ? "max-w-md px-6 py-10"
            : "max-w-5xl px-4 sm:px-6 py-6",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
