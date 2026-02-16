function SocialSidebar() {
    return (
      <>
        {/* Barra lateral (solo visible en desktop) */}
        <div className="social-sidebar d-none d-md-flex flex-column align-items-center position-fixed top-50 start-0 translate-middle-y">
          <div className="social-container">
            <a 
              href="https://www.linkedin.com/in/michael-jonathan-illescas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              data-tooltip="LinkedIn"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a 
              href="https://github.com/MichaelIllescas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              data-tooltip="GitHub"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a 
              href="mailto:joni.illes@hotmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              data-tooltip="Email"
            >
              <i className="ri-mail-fill"></i>
            </a>
          </div>
        </div>
  
        {/* Barra inferior (solo visible en mobile) */}
        <div className="social-sidebar-mobile d-flex d-md-none justify-content-center gap-3 py-3 fixed-bottom">
          <div className="social-mobile-container">
            <a 
              href="https://www.linkedin.com/in/michael-jonathan-illescas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-mobile"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a 
              href="https://github.com/MichaelIllescas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-mobile"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a 
              href="mailto:joni.illes@hotmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-mobile"
            >
              <i className="ri-mail-fill"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
  
  export default SocialSidebar;
  