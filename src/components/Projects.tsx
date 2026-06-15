import Title from "./Title";

import imgPro1 from "../assets/projects/projet1.png"
import imgPro2 from "../assets/projects/projet2.png"
import imgPro3 from "../assets/projects/projet3.png"
import imgPro4 from "../assets/projects/projet4.png"
import imgPro5 from "../assets/projects/projet5.png"
import imgPro6 from "../assets/projects/6.png"

const projects = [
    {
        id: 1, 
        title: "Portfolio",
        description: "Une site web qui présente mes réalisations, mes compétences, mes études. ", 
        technogies: [
        "React",
        "Bootstrap",
        ],
        demoLink: "#", 
        repoLink: "https://github.com/SylvioRm/Portfolio1.0",
        image: imgPro1
     },
    {
        id: 2, 
        title: "Soloprofit",
        description: "Une application web destiné pour les PME Malagasy qui gère leurs tâches et leurs profit avec des notifications intégrés pour le suivi des tâches et des alertes pour les échéances importantes. Gère aussi les calcules de leurs bénefice et dépense en temps réel.", 
        technogies: [
        "HTML",
        "Bootstrap",
        "JS",
        "PHP"

        ],
        demoLink: "#", 
        repoLink: "https://github.com/SylvioRm/SoloProfit",
        image: imgPro2
     },
    {
        id: 3, 
        title: "Gestion de paiement d'écolage",
        description: "Un projet académique qui permet de gérer le paiement des écolages dans une établissement scolaire. Il gère aussi la géneration des reçus, les listes des étudiants dans une année scolaire.", 
        technogies: [
        "Laravel",
        "HTML",
        "Bootstrap",
        "JS"
        ],
        demoLink: "#", 
        repoLink: "https://github.com/SylvioRm/gestion_ecolage_laravel",
        image: imgPro3
     },
    {
        id: 4, 
        title: "Alexia",
        description: "Une application qui porte le nom d'Alexia qui n'est qu'une simple assistante vocal. En cours de développement.", 
        technogies: [
        "Python",
        "Customtkinter",
        "vosk"
        ],
        demoLink: "#", 
        repoLink: "#",
        image: imgPro4
     },
    {
        id: 5, 
        title: "Foodie",
        description: "Intégration d'une maquette de restaurant qui porte le nom de Foodie. En utilisant la structure BEM et qui est responsive.", 
        technogies: [
        "HTML",
        "CSS",
        "Photoshop"
        ],
        demoLink: "#", 
        repoLink: "#",
        image: imgPro5
     },
    // {
    //     id: 6, 
    //     title: "Projet6",
    //     description: "devellopeur full", 
    //     technogies: [
    //     "HTML",
    //     "Tailwind CSS",
    //     "React Native"
    //     ],
    //     demoLink: "#", 
    //     repoLink: "#",
    //     image: imgPro6
    //  },
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
                            <div className="bg-secondary text-light p-4 h-auto rounded-3 shadow-lg">
                               <img 
                               src={project.image} 
                               alt={project.title} 
                               className="w-100 rounded-3 h-100 object-cover"
                               />
                               <div>
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
