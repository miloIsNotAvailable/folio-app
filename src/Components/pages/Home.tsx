import { FC } from "react";
import BlobCard from "../BlobCard";
import TitleCard from "../TitleCard";
import NavCard from "../QuickNavigation/NavCard";
import { styles } from "./PagesStyles";

const Home: FC = () => {

    return (
        <div className={ styles.pages_wrap }>
            <TitleCard/> 
            {/* <div></div> */}
            <BlobCard/>
            <NavCard/>
        </div>
    )
}

export default Home