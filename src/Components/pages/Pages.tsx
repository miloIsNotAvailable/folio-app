import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NotesApp from "./NotesApp";
import Projects from "./Projects";

const Pages: FC = () => {

    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter >
            <Routes key={ location.pathname } location={ location }>
                <Route path="/" element={ <Home/> }/>
                <Route path="/notesapp" element={ <NotesApp/> }/>
                <Route path="/projects" element={ <Projects/> }/>
                <Route path="/aboutme" element={ <About/> }/>
                <Route path="/contact" element={ <Contact/> }/>
            </Routes>
        </AnimatePresence>
    )
}

export default Pages