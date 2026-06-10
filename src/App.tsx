import About from "./components/About";
import Formations from "./components/Formations";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projets from "./components/Projects";
import Footer from "./components/Footer";

function App(){
  return (
    <>
      <div className="bg-dark w-100 h-auto p-2">
        <Navbar onSelectItem={(item: string) => {
          console.log(item);
        } } />
      </div>
      <div>
        <Home />
      </div>
      <div className="bg-dark p-3 p-lg-5">
        <About />
      </div>
      <div className="py-3">
        <Formations />
      </div>
      <div className="bg-dark p-3 p-lg-5">
        <Projets />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App;
