import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import ChatApp from "./ChatApp";
import Contact from "./Contact";
import DocsApp from "./DocsApp";
import Home from "./Home";
import NotesApp from "./NotesApp";
import PagesNavbar from "./PagesNavbar";
import { styles } from "./PagesStyles";
import Projects from "./Projects";

const Pages: FC = () => {

    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter >
            <PagesNavbar/>
            <Routes key={ location.pathname } location={ location }>
                <Route path="/" element={ <Home/> }/>
                <Route path="/chatapp" element={ <ChatApp/> }/>
                <Route path="/notesapp" element={ <NotesApp/> }/>
                <Route path="/docsapp" element={ <DocsApp/> }/>
                <Route path="/projects" element={ <Projects/> }/>
                <Route path="/aboutme" element={ <About/> }/>
                <Route path="/contact" element={ <Contact/> }/>
            </Routes>
        </AnimatePresence>
    )
}

export default Pages