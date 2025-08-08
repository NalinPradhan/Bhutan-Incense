// app/page.tsx
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Intro from "./components/Intro";
import Khorlo from "./components/Khorlo";
import Making from "./components/Making";
import Navbar from "./components/Navbar";
import Temple from "./components/Temple";

export default function HomePage() {
  // Example: in _app.tsx or a top-level layout

  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <Intro />
      <Khorlo />
      <Ingredients />
      <Making />
      <Temple />
    </div>
  );
}
