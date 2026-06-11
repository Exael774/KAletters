import { useState, useEffect } from "react";

export default function EnvelopeScene({ phase, setPhase }) {
  return (
    <div className="scene-container">
      {/* Gradient background */}
      <div className="scene-bg" />

      {/* Intro text */}
      {phase === "intro" && (
        <div className="intro-content">
          <p className="intro-eyebrow">Un mensajito especial</p>
          <h1 className="intro-title">
            Hola, mi<br />
            <span className="intro-title-princess">Princesa</span>
          </h1>
          <p className="intro-subtitle">Tengo un mensaje para ti</p>
          <button
            className="see-btn"
            onClick={() => setPhase("envelope")}
          >
            Ver
          </button>
        </div>
      )}

      {/* Envelope */}
      {phase === "envelope" && (
        <div className="envelope-wrapper">
          <p className="envelope-hint">Toca el sobre para abrirlo</p>
          <div
            className="envelope"
            onClick={() => setPhase("landing")}
          >
            <div className="envelope-body">
              <div className="envelope-flap" />
              <div className="envelope-front">
                <div className="envelope-heart"></div>
                <div className="envelope-seal">Para ti</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
