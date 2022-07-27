import { FC } from "react";
import { styles } from "./PagesStyles";
import ProjectsCard from "../ProjectsCard";

const Projects: FC = () => {

    return (
        <div className={ styles.pages_wrap }>
            <ProjectsCard/>
        </div>
    )
}

export default Projects