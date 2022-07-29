import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { styles } from "./ProjectsMenuStyles";
import { AnimatePresence, motion } from 'framer-motion'
import { useProjectMenuContext } from "../../contexts/ProjectsMenuContext";
import ProjectMenuDesc from "./ProjectsMenuDesc";
import { useProjectContext } from "../../contexts/ProjectsContext";

interface ProjectsMenuCardProps {
    title: string
    desc: string
    img: string
    link: string
    ind: number,
}

const ProjectsMenuCard: FC<ProjectsMenuCardProps> = ( { 
    title,
    desc, 
    img,
    link,
    ind,
} ) => {

    const [ arr, { title: currentTitle }, setSelected ] = useProjectContext()
    // const [ { selected, setSelected } ] = useProjectMenuContext()
    const ref = useRef<HTMLDivElement | null>( null )

    return (
        <motion.div 
            ref={ ref } 
            className={ styles.projects_menu_card }
            initial={ { transform: 'translate( -100%, 0 )' } }
            animate={ { transform: 'translate( 0%, 0 )' } }
            exit={ { transform: 'translate( -100%, 0 )' } }
            tabIndex={ 1 }
            onFocus={ () => setSelected( { title, desc, img, link } ) }
            onBlur={ () => setSelected( { 
                title: "", 
                desc: "", 
                img: "",
                link: "" 
            } ) }
            style={ {
                maxHeight: `${ !currentTitle ? '33%' : currentTitle !== title ? "0%" : '100%' }`
            } }
        >
            <div className={ styles.projects_menu_card_title }>
                <div>
                    { title }
                </div>
                <div>
                    {currentTitle === title ? 
                    <div
                        style={ { cursor: 'pointer' } }
                        onClick={ () => {
                            ref.current?.blur()
                            setSelected( { 
                                title: "", 
                                desc: "", 
                                img: "",
                                link: "" 
                            } ); 
                        } }>
                        { '✖' }
                    </div>: 
                    <div>
                        { "→" }
                    </div>
                    }
                </div>
            </div>
            {
                currentTitle === title &&
                <ProjectMenuDesc/>
            }
        </motion.div>
    )
}

export default ProjectsMenuCard