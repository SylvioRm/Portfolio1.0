import { Mail, ArrowUp, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row gy-4 text-center text-md-start">
          <div className="col-12 col-md-4">
            <h5 className="text-primary fw-bold d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <Code2 size={24} />
              <span>SDev</span>
            </h5>
            <p className="text-muted small mt-2">
              Développeur d'applications et de solutions web. Passionné par l'automatisation et le code propre.
            </p>
          </div>

          <div className="col-12 col-md-4 text-center">
            <h5 className="fw-bold mb-3">Navigation</h5>
            <ul className="list-unstyled d-flex justify-content-center gap-3 m-0">
              <li><a href="#Home" className="text-muted text-decoration-none text-hover-primary">Accueil</a></li>
              <li><a href="#About" className="text-muted text-decoration-none text-hover-primary">À propos</a></li>
              <li><a href="#Projets" className="text-muted text-decoration-none text-hover-primary">Projets</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4 text-center text-md-end">
            <h5 className="fw-bold mb-3">Restons connectés</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
              
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                 style={{ width: '40px', height: '40px' }} title="GitHub">
                <i className="fab fa-github fa-lg"></i>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-outline-primary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                 style={{ width: '40px', height: '40px' }} title="LinkedIn">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>

              <a href="mailto:sylviormc@gmail.com" 
                 className="btn btn-outline-info btn-sm rounded-circle d-flex align-items-center justify-content-center"
                 style={{ width: '40px', height: '40px' }} title="Contactez-moi">
                <Mail size={18} />
              </a>

            </div>
          </div>

        </div>

        <hr className="my-4 border-secondary" />

        {/* Section Droits d'auteur & Retour en haut */}
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start text-muted small">
            © {new Date().getFullYear()} SDev. Tous droits réservés. 
            <span className="d-block d-sm-inline ms-sm-2">
              Fait avec <Heart size={14} className="text-danger animate-pulse" />
            </span>
          </div>
          
          <div className="col-12 col-md-6 text-center text-md-end mt-3 mt-md-0">
            <button 
              onClick={scrollToTop} 
              className="btn btn-sm btn-secondary d-inline-flex align-items-center gap-2 rounded-pill px-3"
            >
              <span>Retour en haut</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
      
      <style>{`
        .text-hover-primary:hover {
          color: #0d6efd !important;
          transition: color 0.2s ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;