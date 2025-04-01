import React from "react";

function SkillCard({ icon, color, label, svg }) {
  return (
    <div className="col">
      <div className="border p-2 rounded text-center">
        {svg ? (
          <div className="d-flex justify-content-center mb-1">
            {React.cloneElement(svg, { width: 30, height: 30 })}
          </div>
        ) : (
          <i className={`bi ${icon} fs-4 ${color}`}></i> // fs-4 en vez de fs-1
        )}
        <small className="d-block mt-1">{label}</small>
      </div>
    </div>
  );
}

export default SkillCard;
