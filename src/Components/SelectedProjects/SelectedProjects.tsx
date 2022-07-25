import { FC, MouseEvent, useRef, useState } from "react";
import ProjectRedirect from "./ProjectRedirect";
import { styles } from "./SelectedProjectsStyles";
import { motion } from "framer-motion";
import { useMouse } from "../../hooks/useMouse";

const SelectedProjectCard: FC = () => {

    const arr = [
        { to: '/chatapp', title: 'chat\napp', desc: 'discord, escept more bubbly' },
        { to: '/notesapp', title: 'notes\napp', desc: 'notes app for creating notes in form of drawings, images, and text and sharing them with friends.' },
        { to: '/docsapp', title: 'docs\napp', desc: 'google docs, that can generate text using LSTM RNN ai model.' },
    ]

    const ref = useRef<HTMLDivElement | null>( null )
    
    const [ { pageX, pageY, mouseLeft } ] = useMouse<HTMLDivElement>( ref ) 

    return (
        <motion.div 
            transition={ { delay: 1.8, ease: [0.605, 0.180, 0.195, 0.925] } }
            exit={ { backgroundPosition: '0 100%' } }
            className={ styles.selected_projects_wrap }    
        >
            <motion.div 
                transition={ { duration: .5, ease: [0.605, 0.180, 0.195, 0.925] } }
                initial={ { opacity: 0, transform: 'translate(-100%, 0)' } }
                whileInView={ { opacity: 1, transform: 'translate(0, 0)' } }
                exit={ { opacity: 0, transform: 'translate(-100%, 0)' } }
                className={ styles.project_redirect_title }
            >
                {"selected \nprojects."}
            </motion.div>
            <div 
                ref={ ref }
                className={ styles.projects }
                // onMouseMove={ getMouseCoords }
            >
                <motion.div
                    initial={ { opacity: 0 } }
                    whileInView={ { opacity: 1 } } 
                    exit={ { opacity: 0 } }
                    style={ {
                        left: pageX,
                        top: pageY,
                        visibility: mouseLeft ? 'collapse' : 'visible'
                    } }
                    className={ styles.mouse }
                >go to</motion.div>
                {
                    arr.map( ( { desc, title, to }, ind ) => (
                        <motion.div
                            transition={ { delay: .4 + ind * .1 } }
                            className={ styles.project_redirect_wrap }
                            initial={ { opacity: 0, transform: 'translate( 0, 100% )' } }
                            whileInView={ { opacity: 1, transform: 'translate( 0, 0% )' } }
                            exit={ { opacity: 0, transform: 'translate( 0, -10% )' } }
                            key={ ind }
                        >
                            <ProjectRedirect 
                                desc={ desc} 
                                title={ title }
                                to={ to } 
                            />
                        </motion.div>
                    ) )
                }
            </div>
        </motion.div>
    )
}

export default SelectedProjectCard