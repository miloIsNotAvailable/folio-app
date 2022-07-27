import { FC, useState } from "react";
import { ProjectMenuProvider } from "../../contexts/ProjectsMenuContext";
import ProjectsMenuCard from "./ProjectsMenuCard";
import { styles } from "./ProjectsMenuStyles";

const ProjectsMenu: FC = () => {

    const arr = [ 
        { title: 'chat app' },
        { title: 'notes app' },
        { title: 'docs app' },
    ]

    const [ selected, setSelected ] = useState( "" )  

    return (
        <ProjectMenuProvider value={ {
            selected,
            setSelected
        } }>
            <div className={ styles.projects_menu_wrap }>
                {
                    arr.map( ( { title }, ind ) => (
                        <ProjectsMenuCard 
                            title={ title } 
                            ind={ ind  }
                        />
                    ) )
                }
            </div>
        </ProjectMenuProvider>
    )
}

export default ProjectsMenu