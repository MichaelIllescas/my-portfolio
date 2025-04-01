function SoftSkill({ label }) {
    return (
      <div className="col">
        <div className="border p-2 rounded shadow-sm text-center">
          <i className="bi bi-check-circle-fill fs-5 text-success"></i>
          <small className="d-block mt-1">{label}</small>
        </div>
      </div>
    );
  }
  
  export default SoftSkill;
  