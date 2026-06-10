import React from 'react';
import {FolderGit2Icon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-4">

          <div className="col-6 col-md-4">
            <h5 className="text-uppercase fw-bold text-white mb-3">Légal</h5>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <a href="#mentions" className="text-muted text-decoration-none">Mentions légales</a>
              </li>
              <li className="mb-2">
                <a href="#confidentialite" className="text-muted text-decoration-none">Politique de confidentialité</a>
              </li>
            </ul>
            
            <div className="d-flex gap-3">
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted text-white-hover">
                <X size={20} /> 
              </a>*/}
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted text-white-hover">
                <Linkedin size={20} />
              </a> */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted text-white-hover">
                <FolderGit2Icon size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Séparateur horizontal */}
        <hr className="text-muted my-4" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted small mb-0">
              &copy; {new Date().getFullYear()} Tous droits réservés.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <span className="text-muted small">Fait par Sylvio RM.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
