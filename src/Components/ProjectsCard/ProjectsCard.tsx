import { FC } from "react";
import { styles } from "./ProjectsCardStyles";
import ProjectCardImgs from "./ProjectCardImgs";
import { motion } from "framer-motion";

const ProjectCard: FC = () => {

    return (
        <motion.div 
            transition={ {
                duration: 1,
                ease: [ 0.920, 0.395, 0.575, 0.920 ]
            } }
            initial={ { backgroundPosition: '0% 0' } }
            animate={ { backgroundPosition: '-100% 0' } }
            exit={ { backgroundPosition: '0% 0', transition: {
                delay: 1,
                duration: 1,
                ease: [ 0.920, 0.395, 0.575, 0.920 ]
            } } }
            className={ styles.projects_card_wrap }
        >
            <ProjectCardImgs/>
            <div className={ styles.projects_card_title }>
                <motion.div
                    transition={ {
                        delay: 1,
                        duration: 1,
                        ease: [ 0.700, 0.355, 0.060, 0.945 ]
                    } }
                    initial={ { transform: 'translate(0, -100%)' } }
                    animate={ { transform: 'translate(0, 0%)' } }
                    exit={ { transform: 'translate(0, -100%)' } }
                >
                    projects.
                </motion.div>
            </div>
            <div className={ styles.projects_card_footer }>
            <motion.div
                    transition={ {
                        delay: 1.5,
                        duration: 1,
                        ease: [ 0.700, 0.355, 0.060, 0.945 ]
                    } }
                    initial={ { transform: 'translate(0, -100%)' } }
                    animate={ { transform: 'translate(0, 0%)' } }
                    exit={ { transform: 'translate(0, -100%)' } }
                >
                    scroll down ↓
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ProjectCard