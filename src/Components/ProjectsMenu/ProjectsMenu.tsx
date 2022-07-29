import { FC, useEffect, useState } from "react";
import { ProjectMenuDescContextProvider } from "../../contexts/ProjectMenuDescContext";
import { ProjectMenuProvider } from "../../contexts/ProjectsMenuContext";
import ProjectsMenuCard from "./ProjectsMenuCard";
import { styles } from "./ProjectsMenuStyles";
import { default as NotesApp } from '../../graphics/notesapp.png'
import { motion } from "framer-motion";

const ProjectsMenu: FC = () => {

    const arr = [ 
        { title: 'chat app', desc: 'lorem ipsum', img: NotesApp },
        { title: 'notes app', desc: 'lorem ',  img: NotesApp },
        { title: 'docs app', desc: 'lorem i',  img: NotesApp },
    ]

    const [ selected, setSelected ] = useState( "" )  

    useEffect( () => {
        window.scrollTo( {
            left: 0,
            top: 0
        } )
    }, [] )

    return (
        <ProjectMenuProvider value={ {
            selected,
            setSelected
        } }>
            <motion.div 
                className={ styles.projects_menu_wrap }
                initial={ { backgroundColor: 'var(--bg)' } }
                animate={ { backgroundColor: 'white' } }
                exit={ { backgroundColor: 'var(--bg)' } }
            >
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
            </motion.div>
        </ProjectMenuProvider>
    )
}

export default ProjectsMenu