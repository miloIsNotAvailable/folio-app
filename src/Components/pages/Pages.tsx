import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import NotesApp from "./NotesApp";

const Pages: FC = () => {

    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter >
            <Routes key={ location.pathname } location={ location }>
                <Route path="/" element={ <Home/> }/>
                <Route path="/notesapp" element={ <NotesApp/> }/>
            </Routes>
        </AnimatePresence>
    )
}

export default Pages