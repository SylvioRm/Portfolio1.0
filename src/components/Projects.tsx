import Title from "./Title";

import imgPro1 from "../assets/projects/projet1.png"
import imgPro2 from "../assets/projects/projet2.png"
import imgPro3 from "../assets/projects/projet3.png"
import imgPro4 from "../assets/projects/projet4.png"
import imgPro5 from "../assets/projects/projet5.png"

const projects = [
    {
        id: 1, 
        title: "Soloprofit",
        description: "Une application web destinée pour les PME Malagasy permettant gérer leurs tâches et leurs profit avec des notifications intégrées pour le suivi des tâches et des alertes pour les échéances importantes. Gère aussi les calcules de leurs bénefice et dépense en temps réel.", 
        technogies: [
        "HTML",
        "Bootstrap",
        "JS",
        "PHP"

        ],
        apercuLink: "#", 
        repoLink: "https://github.com/SylvioRm/SoloProfit",
        image: imgPro2
     },
    {
        id: 2, 
        title: "Gestion de paiement d'écolage",
        description: "Un projet académique qui permet de gérer le paiement des écolages dans une établissement scolaire. Il gère aussi la géneration des reçus, les listes des étudiants pour une année scolaire donnée.", 
        technogies: [
        "Laravel",
        "HTML",
        "Bootstrap",
        "JS"
        ],
        apercuLink: "#", 
        repoLink: "https://github.com/SylvioRm/gestion_ecolage_laravel",
        image: imgPro3
     },
    {
        id: 3, 
        title: "Alexia",
        description: "Une application qui porte le nom d'Alexia qui n'est qu'une simple assistante vocal. En cours de développement.", 
        technogies: [
        "Python",
        "Customtkinter",
        "vosk"
        ],
        apercuLink: "#", 
        repoLink: "https://github.com/SylvioRm/Alexia",
        image: imgPro4
     },
    {
        id: 4, 
        title: "Q&A",
        description: "Une petite plateforme de question réponse pour s'entraider entre dev.", 
        technogies: [
        "Django",
        "TailwindCss"
        ],
        apercuLink: "#", 
        repoLink: "#",
        image: imgPro5
     },
]


const Projets = () => {
    return (
        <>
            <div className="container-fluid" id="Projects">
                <Title>
                    Projets
                </Title>
                <div className="row g-4">
                    {projects.map((project) => (
                        <div key={project.id} className="col-12 col-lg-4" style={{ boxSizing: "border-box" }}>
                            <div className="d-flex flex-column justify-content-between bg-secondary text-light p-4 h-100 rounded-3 shadow-lg">
                                <div                                
                                style={{
                                height: '200px',
                                overflow: 'hidden'
                               }}>
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-100 rounded-3 object-cover"
                               />
                                </div>
                               <div className="flex-grow-1 d-flex flex-column">
                                 <h1 className="my-2 fs-3 fw-bold">
                                    {project.title}
                                </h1>
                                <p className="fs-small">
                                    {project.description}
                                </p>
                               </div>
                               <div className="d-flex flex-wrap gap-2 my-3">
                                {project.technogies.map((tech) => (
                                    <span className="badge bg-dark me-1">
                                        {tech}
                                    </span>
                                ))}
                               </div>
                               <div className="d-flex row">
                                <a href={project.apercuLink} className="btn btn-sm btn-primary col-6 mx-2">Aperçu</a>
                                <a href={project.repoLink} className="btn btn-sm btn-dark col-5">Repo</a>
                               </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projets;
