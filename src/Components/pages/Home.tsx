import { FC, lazy, Suspense } from "react";
// import BlobCard from "../BlobCard";
import TitleCard from "../TitleCard";
import NavCard from "../QuickNavigation/NavCard";
import { styles } from "./PagesStyles";
import SelectedProjects from "../SelectedProjects";
import DescriptionCard from "../DescriptionCard";
import { useLocation } from "react-router-dom";
const BlobCard = lazy( () => import( '../BlobCard' ) )

const Home: FC = () => {

    const { pathname } = useLocation()

    return (
        <div className={ styles.pages_wrap }>
            <TitleCard/> 
            { pathname === "/" ? <BlobCard/> : <></> }
            {/* <BlobCard/> */}
            <NavCard/>
            <SelectedProjects/>
            <DescriptionCard/>
        </div>
    )
}

export default Home