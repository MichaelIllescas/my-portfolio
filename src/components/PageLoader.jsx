import { useEffect, useState } from "react";

export default function PageLoader({ minTime = 600 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer;
    const hide = () => {
      // garantiza un mínimo de tiempo para que no “parpadee”
      timer = setTimeout(() => setVisible(false), minTime);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", hide);
    };
  }, [minTime]);

  if (!visible) return null;

  return (
    <div className="page-loader">
      <div className="loader-spinner" aria-label="Cargando…"></div>
      <p className="loader-text">Cargando…</p>

      {/* estilos inlined para que el loader no dependa de CSS externo */}
      <style>{`
        .page-loader {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: radial-gradient(1200px 600px at 50% -20%, rgba(13,110,253,.12), transparent),
                      #0f141a;
          color: #e9ecef;
        }
        .loader-spinner {
          width: 54px; height: 54px;
          border: 4px solid rgba(255,255,255,.2);
          border-top-color: #0d6efd;
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }
        .loader-text { margin-top: 14px; font-size: .95rem; opacity: .8; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
