import { FC, lazy, Suspense } from "react";
// import BlobCard from "../BlobCard";
import TitleCard from "../TitleCard";
import NavCard from "../QuickNavigation/NavCard";
import { styles } from "./PagesStyles";
import SelectedProjects from "../SelectedProjects";
import DescriptionCard from "../DescriptionCard";
const BlobCard = lazy( () => import( '../BlobCard' ) )

const Home: FC = () => {

    return (
        <div className={ styles.pages_wrap }>
            <TitleCard/> 
            {/* <BlobCard/> */}
            <NavCard/>
            <SelectedProjects/>
            <DescriptionCard/>
        </div>
    )
}

export default Home