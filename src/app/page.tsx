// app/page.tsx
import Header from "./components/Header";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

export default function HomePage() {
  // Example: in _app.tsx or a top-level layout

  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <Intro />
    </div>
  );
}
