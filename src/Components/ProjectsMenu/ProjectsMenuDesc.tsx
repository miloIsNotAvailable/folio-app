import { FC } from "react";
import { useDescContext } from "../../contexts/ProjectMenuDescContext";
import { motion } from "framer-motion";
import { styles } from "./ProjectsMenuStyles";
import { Link, useNavigate } from "react-router-dom";

const ProjectMenuDesc: FC = () => {

    const [ { desc, img, link } ] = useDescContext()
    const navigate = useNavigate()

    return (
        <motion.div className={ styles.project_menu_desc_wrap }>
            <div className={ styles.project_menu_desc_img }>
                <motion.img 
                    transition={ {
                        duration: 1,
                        delay: 1
                    } }
                    initial={ { maxHeight: 0, transform: 'translate( 0, -100% )' } }
                    animate={ { maxHeight: '100%', transform: 'translate( 0, 0% )' } }
                    exit={ { maxHeight: 0, transform: 'translate( 0, -100% )', transition: {
                        delay: 0,
                        duration: 1
                    } } }
                    className={ styles.project_menu_desc_img } 
                    src={ img }
                />
            </div>
            <div className={ styles.project_menu_desc }>
                <div className={ styles.project_menu_desc_title }>
                    <motion.div
                        initial={ { maxHeight: 0, transform: 'translate( 0, -100% )' } }
                        animate={ { maxHeight: '100%', transform: 'translate( 0, 0% )' } }
                        exit={ { maxHeight: 0, transform: 'translate( 0, -100% )', transition: {
                            delay: 0,
                            duration: 1
                        } } }    
                    >
                        quick description.
                    </motion.div>
                </div>
                <div className={ styles.project_menu_desc_desc }>
                    <motion.div
                        initial={ { maxHeight: 0, transform: 'translate( 0, -100% )' } }
                        animate={ { maxHeight: '100%', transform: 'translate( 0, 0% )' } }
                        exit={ { maxHeight: 0, transform: 'translate( 0, -100% )', transition: {
                            delay: 0,
                            duration: 1
                        } } }    
                    >
                        { desc }
                    </motion.div>
                </div>
                <div className={ styles.project_menu_desc_redirect }>
                    <motion.div
                        onClick={ () => navigate( link ) }
                        initial={ { maxHeight: 0, transform: 'translate( 0, -100% )' } }
                        animate={ { maxHeight: '100%', transform: 'translate( 0, 0% )' } }
                        exit={ { maxHeight: 0, transform: 'translate( 0, -100% )', transition: {
                            delay: 0,
                            duration: 1
                        } } }                        
                    >
                        find out more →
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectMenuDesc