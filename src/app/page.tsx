// app/page.tsx
import Header from "./components/Header";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <Intro />
    </div>
  );
}
