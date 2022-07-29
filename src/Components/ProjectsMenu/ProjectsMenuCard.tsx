import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { styles } from "./ProjectsMenuStyles";
import { AnimatePresence, motion } from 'framer-motion'
import { useProjectMenuContext } from "../../contexts/ProjectsMenuContext";
import ProjectMenuDesc from "./ProjectsMenuDesc";

interface ProjectsMenuCardProps {
    title: string
    ind: number,
}

const ProjectsMenuCard: FC<ProjectsMenuCardProps> = ( { 
    title,
    ind,
} ) => {

    const [ { selected, setSelected } ] = useProjectMenuContext()
    const ref = useRef<HTMLDivElement | null>( null )

    return (
        <motion.div 
            ref={ ref } 
            className={ styles.projects_menu_card }
            initial={ { transform: 'translate( -100%, 0 )' } }
            animate={ { transform: 'translate( 0%, 0 )' } }
            exit={ { transform: 'translate( -100%, 0 )' } }
            tabIndex={ 1 }
            onFocus={ () => setSelected( title ) }
            onBlur={ () => setSelected( "" ) }
            style={ {
                maxHeight: `${ !selected ? '33%' : selected !== title ? "0%" : '100%' }`
            } }
        >
            <div className={ styles.projects_menu_card_title }>
                <div>
                    { title }
                </div>
                <div>
                    {selected === title ? 
                    <div
                        style={ { cursor: 'pointer' } }
                        onClick={ () => {
                            ref.current?.blur()
                            setSelected( "" ); 
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
                selected === title &&
                <ProjectMenuDesc/>
            }
        </motion.div>
    )
}

export default ProjectsMenuCard