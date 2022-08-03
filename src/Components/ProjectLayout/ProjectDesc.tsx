import { FC } from "react";
import { Link } from "react-router-dom";
import { styles } from "./ProjectLayoutStyles";
import { motion } from 'framer-motion'

interface ProjectDescProps {
    desc: string
    link: string
}

const ProjectDesc: FC<ProjectDescProps> = ( { desc, link } ) => {

    return (
        <div className={ styles.project_body_desc_wrap }>
            <div className={ styles.project_body_desc_title }>
                <motion.div
                    transition={ { 
                        duration: 1, 
                        ease: [ 0.535, 0.300, 0.185, 0.760 ],
                        delay: 1.3
                    } }
                    initial={ { transform: 'translate(0, 100%)' } } 
                    animate={ { transform: 'translate(0, 0%)' } } 
                    exit={ { transform: 'translate(0, -100%)' } } 
                >
                    project description.
                </motion.div>
            </div>
            <div className={ styles.project_body_desc_body }>
                <motion.div
                    transition={ { 
                        duration: 1, 
                        ease: [ 0.535, 0.300, 0.185, 0.760 ],
                        delay: 1.5
                    } }
                    initial={ { transform: 'translate(0, 100%)' } } 
                    animate={ { transform: 'translate(0, 0%)' } } 
                    exit={ { transform: 'translate(0, -100%)' } } 
                >
                    { desc }
                </motion.div>
            </div>
                <a href={ link }>
                    <motion.div
                        transition={ { 
                            duration: 1, 
                            ease: [ 0.535, 0.300, 0.185, 0.760 ],
                            delay: 1.7
                        } }
                        initial={ { transform: 'translate(0, 100%)' } } 
                        animate={ { transform: 'translate(0, 0%)' } } 
                        exit={ { transform: 'translate(0, -100%)' } } 
                    >
                        see project →                
                    </motion.div>
                </a>
        </div>
    )
}

export default ProjectDesc