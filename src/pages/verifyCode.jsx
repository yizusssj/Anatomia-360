import { Link } from "react-router-dom";

function CodeBox() {
  return (
    <input
      maxLength={1}
      className="h-12 w-12 rounded-xl bg-white/20 text-center text-xl font-bold outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
    />
  );
}

export default function VerifyCode() {
  return (
    <div className="min-h-screen bg-[#0b0f15] text-white">
      <div className="mx-auto w-full max-w-md px-6 pt-10 pb-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">CÓDIGO</h1>
          <p className="mt-2 text-white/70 text-sm">
            Ingresa el código de 5 dígitos
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <CodeBox />
          <CodeBox />
          <CodeBox />
          <CodeBox />
          <CodeBox />
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <Link
            to="/forgot"
            className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition"
          >
            Volver
          </Link>

          <Link
            to="/reset-success"
            className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition"
          >
            Confirmar
          </Link>
        </div>
      </div>
    </div>
  );
}
