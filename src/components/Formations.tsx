import Title from "./Title";
import {motion} from "framer-motion"
import { GraduationCap, School } from "lucide-react";

import imgHTML from "../assets/techno/html.png"
import imgCSS from "../assets/techno/css.png"
import imgJS from "../assets/techno/js.png"
import imgPHP from "../assets/techno/PHP.jpg"
import imgREACT from "../assets/techno/react.png"
import imgLAR from "../assets/techno/Laravel.jpg"
import imgBOOT from "../assets/techno/Bootstrap.jpg"
import imgPY from "../assets/techno/Python.jpg"
import imgDJA from "../assets/techno/Django.jpeg"

const skills = [
    {id: 1, name: "HTML", image: imgHTML},
    {id: 2,name: "CSS", image: imgCSS},
    {id: 3, name: "Javascript", image: imgJS},
    {id: 4, name: "PHP", image: imgPHP},
    {id: 5, name: "React", image: imgREACT},
    {id: 6, name: "Laravel", image: imgLAR},
    {id: 7, name: "Bootstrap", image: imgBOOT},
    {id: 8, name: "Python", image: imgPY},
    {id: 9, name: "Django", image: imgDJA },
]

const formations = [
    {
        id: 1, 
        name: "IS-INFO Ampasamadinika",
        period: "2023 - actuel", 
        description: "Actuellement, étudiant en troisième année en Informatique de Gestion",
        icon : <GraduationCap size={30} className="text-light" strokeWidth={2}></GraduationCap>
        // image: imgExp1
     },
    {
        id: 2,
        name: "Lycée Saint Michel Itaosy",
        period: "2020 - 2023", 
        description: "Obtention du baccalauréat en 2023 série D",
        icon : <School size={30} className="text-light" strokeWidth={2}></School>
        // image: imgExp2
     },
]



const Formations = () => {
    return (
        <>
            <div className="py-3" id="formations">
                <Title color="dark">
                    Formations
                </Title>
                <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center mb-2">
                    <div className="d-flex flex-wrap gap-4 justify-content-center mt-4 mt-lg-0 col-lg-4">
                        {skills.map((skill) => (
                            <motion.div 
                            key={skill.id} 
                            className="d-flex flex-column align-items-center m-2"
                            initial={{
                                opacity: 0,
                                scale: 0.5
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20, 
                                delay:  0.1
                            }}
                            whileHover={{
                                scale: 1.2,
                                rotate: 5
                            }}
                            >
                                <div className="d-flex justify-content-center align-items-center border border-2 border-primary rounded-circle p-2" style={{ width: '60px', height: "60px"}}>
                                    <img src={skill.image} alt={skill.name} className="object-cover rounded-circle w-100 h-100"/>
                                </div>
                                <span className="mt-2 small">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mx-lg-4 d-flex flex-column mx-5">
                        {formations.map((formation) => (
                            <motion.div 
                            key={formation.id} 
                            className="d-flex flex-column bg-dark p-2 rounded shadow-lg mb-2"
                            initial={{
                                opacity: 0,
                                x: 50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{
                                once : true,
                                margin: "-100px"
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                            >
                                <div className="d-flex align-items-center">
                                    <div className="rounded-circle bg-primary bg-opacity-10 p-2 me-3" 
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                    }}>
                                        <p className="d-flex justiy-content-center align-items-center fs-3">
                                            {formation.icon}
                                        </p>
                                    </div>
                                    <div className="mx-4">
                                        <h1 className="fs-4 fw-bold text-primary">
                                            {formation.name}
                                        </h1>
                                        <span className="text-secondary small">
                                            {formation.period}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-muted mx-3 mt-2 ps-4">
                                    {formation.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-4 w-100">
                    <motion.a 
                    href="#" 
                    className="btn btn-outline-dark shadow-sm px-4 py-2"
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#131d28"
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17
                    }}
                    >
                        Télecharger CV
                    </motion.a>
                </div>
            </div>
        </>
    )
}

export default Formations;