import { FC, useEffect, useState } from "react";
import { ProjectMenuDescContextProvider } from "../../contexts/ProjectMenuDescContext";
import { ProjectMenuProvider } from "../../contexts/ProjectsMenuContext";
import ProjectsMenuCard from "./ProjectsMenuCard";
import { styles } from "./ProjectsMenuStyles";
import { default as NotesApp } from '../../graphics/notesapp.png'
import { motion } from "framer-motion";
import { useProjectContext } from "../../contexts/ProjectsContext";

const ProjectsMenu: FC = () => {

    const [ arr, { desc, img, title }, setSelected ] = useProjectContext()

    // const [ selected, setSelected ] = useState( "" )  

    useEffect( () => {
        window.scrollTo( {
            left: 0,
            top: 0
        } )
    }, [] )

    return (
        // <ProjectMenuProvider value={ {
        //     selected,
        //     setSelected
        // } }>
            <motion.div 
                className={ styles.projects_menu_wrap }
                initial={ { backgroundColor: 'var(--bg)' } }
                animate={ { backgroundColor: 'white' } }
                exit={ { backgroundColor: 'var(--bg)' } }
            >
                {
                    arr.map( ( { title, desc, img, link }, ind ) => (
                        // <ProjectMenuDescContextProvider value={ {
                        //     desc,
                        //     img,
                        //     link: "/notesapp"
                        // } }>
                            <ProjectsMenuCard 
                                title={ title } 
                                desc={ desc }
                                img={ img } 
                                link={ link }
                                ind={ ind  }
                            />
                        // </ProjectMenuDescContextProvider>
                    ) )
                }
            </motion.div>
        // </ProjectMenuProvider>
    )
}

export default ProjectsMenu