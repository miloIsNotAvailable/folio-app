import { FC } from "react";
import { styles } from "./PagesStyles";
import ProjectsCard from "../ProjectsCard";
import ProjectsMenu from "../ProjectsMenu";

const Projects: FC = () => {

    return (
        <div className={ styles.pages_wrap }>
            <ProjectsCard/>
            <ProjectsMenu/>
        </div>
    )
}

export default Projects