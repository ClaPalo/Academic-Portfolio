import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Research from "./components/Research";
import Market from "./components/Market";
import Projects from "./components/Projects";
import { useState, useRef } from "react";

function App() {
    const [currentSection, setCurrentSection] = useState("1");

    const about = useRef(null);
    const research = useRef(null);
    const contact = useRef(null);
    const marketcomments = useRef(null);
    const projects = useRef(null);

    const handleSelection = (key) => {
        //setCurrentSection(key);
        setTimeout(() => {
            switch (key) {
                case "1":
                    about.current.scrollIntoView();
                    break;
                case "2":
                    research.current.scrollIntoView();
                    break;
                case "3":
                    marketcomments.current.scrollIntoView();
                    break;
                case "4":
                    projects.current.scrollIntoView();
                    break;
                case "5":
                    contact.current.scrollIntoView();
                    break;
                default:
                    break;
            }
        }, 0);
    };
    return (
        <div className="scroll-smooth">
            <Navigation
                active={currentSection}
                handleSelection={handleSelection}
            />
            <div className="overflow-scroll snap-y snap-mandatory sm:snap-mandatory h-screen noScrollbar scroll-smooth">
                <div ref={about}>
                    <About waypointCallback={setCurrentSection} />
                </div>
                <div ref={research}>
                    <Research waypointCallback={setCurrentSection} />
                </div>
                <div ref={marketcomments}>
                    <Market waypointCallback={setCurrentSection} />
                </div>
                <div ref={projects}>
                    <Projects waypointCallback={setCurrentSection} />
                </div>
                <div ref={contact}>
                    <Contact waypointCallback={setCurrentSection} />
                </div>
            </div>
        </div>
    );
}

export default App;
