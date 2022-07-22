import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import TitleCard from "../TitleCard";

const Pages: FC = () => {

    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter onExitComplete={ () => console.log( 'exited' ) }>
            <Routes key={ location.pathname } location={ location }>
                <Route path="/" element={ <TitleCard/> }/>
                <Route path="/home" element={ <div>hey</div> }/>
            </Routes>
        </AnimatePresence>
    )
}

export default Pages