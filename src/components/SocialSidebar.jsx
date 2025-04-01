function SocialSidebar() {
    return (
      <>
        {/* Barra lateral (solo visible en desktop) */}
        <div className="social-sidebar d-none d-md-flex flex-column align-items-center position-fixed top-50 start-0 translate-middle-y ms-3">
          <a href="https://www.linkedin.com/in/michael-jonathan-illescas" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://github.com/MichaelIllescas" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill"></i>
          </a>
          <a href="mailto:joni.illes@hotmail.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-mail-fill"></i>
          </a>
        </div>
  
        {/* Barra inferior (solo visible en mobile) */}
        <div className="social-sidebar-mobile d-flex d-md-none justify-content-center gap-4 py-2 bg-dark text-light fixed-bottom">
          <a href="https://www.linkedin.com/in/michael-jonathan-illescas" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://github.com/MichaelIllescas" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill"></i>
          </a>
          <a href="mailto:joni.illes@hotmail.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-mail-fill"></i>
          </a>
        </div>
      </>
    );
  }
  
  export default SocialSidebar;
  