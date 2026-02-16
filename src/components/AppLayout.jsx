import BottomNav from "./BottomNav";

export default function AppLayout({ title, children }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f6f6f6" }}>
      <header style={{ padding: 16 }}>
        <h1 style={{ margin: 0, fontSize: 18 }}>{title}</h1>
      </header>

      <main style={{ padding: 16, paddingBottom: 80 }}>{children}</main>

      <BottomNav />
    </div>
  );
}
