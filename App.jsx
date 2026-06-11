import { useState, useEffect, useRef } from "react";
import EnvelopeScene from "./EnvelopeScene";
import LandingPage from "./LandingPage";

export default function App() {
  const [phase, setPhase] = useState("intro"); // intro | envelope | flowers | landing

  return (
    <div className="app-root">
      {phase !== "landing" && (
        <EnvelopeScene phase={phase} setPhase={setPhase} />
      )}
      {phase === "landing" && <LandingPage />}
    </div>
  );
}
