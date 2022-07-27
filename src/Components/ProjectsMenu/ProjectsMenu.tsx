import { FC, useState } from "react";
import { ProjectMenuDescContextProvider } from "../../contexts/ProjectMenuDescContext";
import { ProjectMenuProvider } from "../../contexts/ProjectsMenuContext";
import ProjectsMenuCard from "./ProjectsMenuCard";
import { styles } from "./ProjectsMenuStyles";
import { default as NotesApp } from '../../graphics/notesapp.png'

const ProjectsMenu: FC = () => {

    const arr = [ 
        { title: 'chat app', desc: 'lorem ipsum', img: NotesApp },
        { title: 'notes app', desc: 'lorem ',  img: NotesApp },
        { title: 'docs app', desc: 'lorem i',  img: NotesApp },
    ]

    const [ selected, setSelected ] = useState( "" )  

    return (
        <ProjectMenuProvider value={ {
            selected,
            setSelected
        } }>
            <div className={ styles.projects_menu_wrap }>
                {
                    arr.map( ( { title, desc, img }, ind ) => (
                        <ProjectMenuDescContextProvider value={ {
                            desc,
                            img,
                            link: "/notesapp"
                        } }>
                            <ProjectsMenuCard 
                                title={ title } 
                                ind={ ind  }
                            />
                        </ProjectMenuDescContextProvider>
                    ) )
                }
            </div>
        </ProjectMenuProvider>
    )
}

export default ProjectsMenu