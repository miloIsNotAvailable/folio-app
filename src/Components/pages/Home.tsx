import { FC, lazy, Suspense } from "react";
// import BlobCard from "../BlobCard";
import TitleCard from "../TitleCard";
import NavCard from "../QuickNavigation/NavCard";
import { styles } from "./PagesStyles";
import SelectedProjects from "../SelectedProjects";
import DescriptionCard from "../DescriptionCard";
import { useLocation } from "react-router-dom";
const BlobCard = lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 2000)).then(
      () => import("../BlobCard")
    );
  });
  
const Home: FC = () => {

    const { pathname } = useLocation()

    return (
        <div className={ styles.pages_wrap }>
            <TitleCard/> 
            <Suspense fallback={ 
                <div className={ styles.fallback }>
                    
                </div> 
            }>
                <BlobCard/>
            </Suspense>
            <NavCard/>
            <SelectedProjects/>
            <DescriptionCard/>
        </div>
    )
}

export default Home