import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BlobCard from "../BlobCard/BlobCard";
import TitleCard from "../TitleCard";

const Pages: FC = () => {

    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter >
            <Routes key={ location.pathname } location={ location }>
                <Route path="/" element={ 
                <div>
                    <TitleCard/> 
                    <BlobCard/>
                </div>
                }/>
                <Route path="/home" element={ <div>hey</div> }/>
            </Routes>
        </AnimatePresence>
    )
}

export default Pages