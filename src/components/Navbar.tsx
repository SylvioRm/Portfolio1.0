import { useState } from "react"

interface Props {
    onSelectItem : (item : string) => void
}

const Navbar = ({onSelectItem} : Props) => {
    const [activateLink, setAvtivateLink] = useState(1);
    const items = [
        {
            id: 1,
            name: "Accueil",
            link: "#Home"
        },
        {
            id: 2,
            name: "A propos",
            link: "#About"
        },
        {
            id: 3,
            name: "Mes Formations",
            link: "#formations"
        },
        {
            id: 4,
            name: "Mes projets",
            link: "#Projects"
        },

    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <div className="position-relative d-inline-block px-4 py-2 m-2"> 
                        <div 
                        className="position-absolute top-0 end-0 border-top border-end border-primary border-5"
                        style={{ 
                            width: "15px", 
                            height: "15px"
                            }}
                        ></div>
                        <div 
                        className="position-absolute bottom-0 start-0 border-bottom border-start border-primary border-5" 
                        style={{ 
                            width: "15px", 
                            height: "15px"
                            }}></div>
                        <a 
                        className="navbar-brand fs-3 fw-bold text-white" 
                        href="#Home"
                        style={{
                            fontFamily: "Edwardian Script ITC cursive",
                        }}
                        >
                            <i><span className="text-primary fs-2">S</span>Dev</i>
                        </a>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown" aria-controls="navbarDropdown" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarDropdown">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        {
                            items.map((item) => (
                                <li key={item.id} className="nav-item"> 
                                    <a 
                                    className={activateLink === item.id ? "nav-link fs-5 fs-lg-2 active" : "nav-link fs-5 fs-lg-2"} 
                                    href={item.link}
                                    onClick={()=>{
                                        setAvtivateLink(item.id);
                                        onSelectItem(item.name);   
                                    }}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                        </ul>
                    </div>       
                </div>
            </nav>
        </>
    )
}

export default Navbar;