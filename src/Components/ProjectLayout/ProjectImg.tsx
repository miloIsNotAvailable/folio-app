import { FC } from "react";
import { styles } from "./ProjectLayoutStyles";
import { motion } from 'framer-motion'

interface ProjectImgProps {
    img: string
}

const ProjectImg: FC<ProjectImgProps> = ( { img } ) => {

    return (
        <motion.div 
            transition={ { 
                duration: .5, 
                ease: [ 0.535, 0.300, 0.185, 0.760 ],
                delay: .8
            } }
            initial={ { boxShadow: '0 2.5rem 0 0 var(--pink)' } }
            animate={ { boxShadow: '2.5rem 2.5rem 0 0 var(--pink)' } }
            exit={ { boxShadow: '0 2.5rem 0 0 var(--pink)' } }
            className={ styles.project_body_img_wrap }
        >
            <motion.img
                transition={ { 
                    duration: 1, 
                    ease: [ 0.535, 0.300, 0.185, 0.760 ],
                    delay: .3
                } }
                initial={ { transform: 'translate(0, 100%)' } } 
                animate={ { transform: 'translate(0, 0%)' } } 
                exit={ { transform: 'translate(0, -100%)' } } 
                className={ styles.project_body_img }
                src={ img }
            />
        </motion.div>
    )
}

export default ProjectImg