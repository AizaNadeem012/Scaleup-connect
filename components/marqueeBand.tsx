"use client";

export default function MarqueeBrand() {
  return (
    <section className="marquee-section" aria-label="ScaleUp Connect marquee">
      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <span className="marquee-item" key={i}>
              ScaleUp Connect
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-section {
          width: 100%;
          background: #ffffff;
          padding: 20px 0;
          overflow: hidden;
        }

        .marquee {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: inline-flex;
          gap: 4rem;
          animation: scroll 15s linear infinite;
          will-change: transform;
        }

        .marquee-item {
          white-space: nowrap;
          font-weight: 900;
          font-family: "Arial Black", sans-serif;
          font-size: clamp(28px, 6vw, 90px);
          color: transparent;
          -webkit-text-stroke: 2px #003728; /* clean single green stroke */
          letter-spacing: 2px;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
