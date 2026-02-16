import Screen from "./Screen";
import BottomNav from "./BottomNav";

export default function AppShell({ title, children }) {
  return (
    <Screen variant="app">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">{title}</h1>
      </header>

      <main className="pb-20 sm:pb-0">{children}</main>

      {/* solo aparece en móvil */}
      <BottomNav />
    </Screen>
  );
}
