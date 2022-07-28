import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
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
            </Routes>
        </AnimatePresence>
    )
}

export default Pages