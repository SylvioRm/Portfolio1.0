import Title from "./Title";

import imgPro1 from "../assets/projects/board.png"
import imgPro2 from "../assets/projects/board1.png"
import imgPro3 from "../assets/projects/3.png"
import imgPro4 from "../assets/projects/4.png"
import imgPro5 from "../assets/projects/5.png"
import imgPro6 from "../assets/projects/6.png"

const projects = [
    {
        id: 1, 
        title: "Soloprofit",
        description: "Une application web destiné pour les PME Malagasy qui gère leurs tâches et leurs profit avec des notifications intégrés pour le suivi des tâches et des alertes pour les échéances importantes. Gère aussi les ressources et la liste des clients locale ou même internationale, avec des factures intégrés.", 
        technogies: [
        "HTML",
        "Bootstrap",
        "JS",
        "PHP"

        ],
        demoLink: "#", 
        repoLink: "https://github.com/SylvioRm/SoloProfit",
        image: imgPro1
     },
    {
        id: 2, 
        title: "Gestion de paiement d'écolage",
        description: "Un projet académique qui permet de gérer le paiement des écolages dans une établissement scolaire. Il gère aussi la géneration des factures et les paiements, les listes des étudiants dans une année scolaire donner.", 
        technogies: [
        "Laravel",
        "HTML",
        "Bootstrap",
        "JS"
        ],
        demoLink: "#", 
        repoLink: "https://github.com/SylvioRm/gestion_ecolage_laravel",
        image: imgPro2
     },
    {
        id: 3, 
        title: "Projet3",
        description: "devellopeur full", 
        technogies: [
        "HTML",
        "Tailwind CSS",
        "React Native"
        ],
        demoLink: "#", 
        repoLink: "#",
        image: imgPro3
     },
    {
        id: 4, 
        title: "Projet4",
        description: "devellopeur full", 
        technogies: [
        "HTML",
        "Tailwind CSS",
        "Laravel"
        ],
        demoLink: "#", 
        repoLink: "#",
        image: imgPro4
     },
    {
        id: 5, 
        title: "Projet5",
        description: "devellopeur full", 
        technogies: [
        "HTML",
        "Tailwind CSS",
        "React Native"
        ],
        demoLink: "#", 
        repoLink: "#",
        image: imgPro5
     },
    {
        id: 6, 
        title: "Projet6",
        description: "devellopeur full", 
        technogies: [
        "HTML",
        "Tailwind CSS",
        "React Native"
        ],
        demoLink: "#", 
        repoLink: "#",
        image: imgPro6
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
                        <div key={project.id} className="col-12 col-lg-4">
                            <div className="bg-secondary text-light p-4 h-auto rounded-3 shadow-lg">
                               <img 
                               src={project.image} 
                               alt={project.title} 
                               className="w-100 rounded-3 h-100 object-cover"
                               />
                               <div>
                                 <h1 className="my-2 fw-bold">
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
                                <a href={project.demoLink} className="btn btn-sm btn-primary col-6 mx-2">Demo</a>
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
