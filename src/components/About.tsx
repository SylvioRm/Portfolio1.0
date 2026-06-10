import Title from "./Title";
import img from '../assets/img.png'
import {motion} from "framer-motion"
import { LayoutDashboard, Database } from "lucide-react";
const aboutSection = [
    {
        id: 1,
        title: "Développeur frontend",
        description: "Passionné par la création d'interfaces utilisateurs modernes et interactives. Je m'efforce de concevoir des architectures d'applications fluides, esthétiques et entièrement responsives.",
        icon: <LayoutDashboard size={28} strokeWidth={2}></LayoutDashboard>
    },
    {
        id: 2,
        title: "Développeur backend",
        description: "Spécialisé dans la conception de structures logicielles robustes et sécurisées. Rigoureux sur l'architecture des données, je développe des systèmes de gestion et des solutions sur mesure.",
        icon: <Database size={28} strokeWidth={2}></Database> 
    },
    // {
    //     id: 3,
    //     title: "Développeur mobile",
    //     description: "Curieux et orienté vers l'innovation multiplateforme. Je m'intéresse de près au développement d'applications mobiles agiles et légères en utilisant des frameworks modernes.",
    //     icon: <i className="fa fa-letter text-primary scale-150"></i>
    // }
]


const About = () => {
    return (
        <>
            <div className="container-fluid" id="About">
                <Title> A propos</Title>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="d-none d-lg-block">
                        <img src={img} alt="profile" className='w-96 object-cover rounded-3'/>
                    </div>
                    <div className="mx-lg-4 mb-3 text-light">
                        {aboutSection.map((section) => (
                            <motion.div 
                            key={section.id} 
                            className="bg-secondary bg-opacity-25 d-flex flex-column flex-lg-row align-items-center p-3 rounded-3 mb-3 shadow-xl" 
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
                                <div className="mb-2 mb-lg-0">
                                    {section.icon}
                                </div>
                                <div className="mx-lg-4 text-center text-lg-start">
                                    <h2 className="fs-4 fs-lg-2 fw-bold mb-1">
                                        {section.title}
                                    </h2>
                                    <p className="fs-md fs-lg-3">
                                        {section.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;