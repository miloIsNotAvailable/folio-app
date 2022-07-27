import { FC } from "react";
import { default as Star } from '../../graphics/Star.svg' 
import { default as Ellipse } from '../../graphics/Ellipse.svg' 
// import { default as Square } from '../../graphics/Square.svg' 
import { styles } from "./ProjectsCardStyles";
import Square from "./Square";
import { motion } from "framer-motion";

const ProjectCardImgs: FC = () => {

    const arr = [
        { src: Star, style: { top: '20%', left: '10%' } },
        // { src: Square, style: { top: '45%', left: '45%' } },
        { src: Ellipse, style: { top: '60%', left: '80%' } },
    ]

    return (
        <>
            {
                arr.map( ( { src, style }, ind ) => (
                    <motion.img
                        transition={ {
                            delay: 1.5 + ind * .4,
                            duration: .5
                        } }
                        initial={ { opacity: 0, transform: 'translate(0, -100%)' } }
                        animate={ { opacity: 1, transform: 'translate(0, 0%)' } }
                        exit={ { opacity: 0, transform: 'translate(0, -100%)', 
                        transition: {
                            delay: ind * .4
                        }
                    } }
                        key={ src }
                        className={ styles.projects_img }
                        src={ src }
                        style={ style }
                    />
                ) )
            }
            <motion.div 
                className={ styles.projects_img }
                style={ {
                    top: '45%', 
                    left: '45%'
                } }
                transition={ {
                    delay: 1.7,
                    duration: .5
                } }
                initial={ { opacity: 0, transform: 'translate(0, -100%)' } }
                animate={ { opacity: 1, transform: 'translate(0, 0%)' } }
                exit={ { opacity: 0, transform: 'translate(0, -100%)',
                    transition: {
                        delay: .7
                    }                   
                } }
            >
                <Square/>
            </motion.div>
        </>
    )
}

export default ProjectCardImgs