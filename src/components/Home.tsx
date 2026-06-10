import img from '../assets/img.png'
import {motion} from 'framer-motion'

const Home = () => {
    return (
        <>
            <div className="container-fluid" id='Home'>
                <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center my-5 h-100">
                    <div className="d-flex flex-column d-lg-inline-block">
                        <h2 className="fw-bold fs-2 fs-lg-2 text-center text-lg-start mt-4 mt-lg-0">
                            Bonjour , je suis<br />  {" "}
                            <span className="text-primary">
                                <motion.h1 
                                initial={{ 
                                    opacity: 0, 
                                    y: -30
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    duration: 0.8
                                }}
                                >
                                    Sylvio RAMIANDRISOA
                                </motion.h1>
                            </span>
                        </h2>
                        <p className="my-4 fs-md text-justify">
                            Je suis un développeur débutant qui veut acquérir de l'éxperience. <br /> 
                            Je travaille avec HTML, CSS, Bootstrap, JavaScript, Python et PHP, et
                            <br /> je suis prêt à transformer vos idées en pages web fonctionnelles  et soignées.<br /> Je suis sérieux, à l'écoute, et toujours prêt à apprendre pour mieux vous satisfaire.
                        </p>
                        <motion.a 
                        href="" 
                        className="btn btn-outline-primary shadow-sm transition-all"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "#0056b3"
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
                            <i className="fa fa-mail w-5 h-5"></i>
                            Contactez-moi
                        </motion.a>
                    </div>

                    <div className='mx-lg-5'>
                        <img src={img} alt="profile" className='mw-100 w-96 h-96 object-cover border border-5 border-primary shadow-xl'
                        style={{
                            borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
                        }}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;