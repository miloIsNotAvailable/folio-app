import { FC } from 'react'
import { styles } from './ProjectLayoutStyles'
import { motion, transform } from 'framer-motion'
import ProjectDesc from './ProjectDesc'
import ProjectImg from './ProjectImg'

interface ProjectLayoutProps {
    title: string | JSX.Element
    num?: string
    desc: string
    img: string
}

const ProjectLayout: FC<ProjectLayoutProps> = ( { 
    desc,
    num,
    title,
    img
 } ) => {

    return (
        <div className={ styles.project_layout_wrap }>
            <div 
                className={ styles.project_wrap_title }
            >
            <motion.div
                transition={ { duration: 1, ease: [ 0.535, 0.300, 0.185, 0.760 ] } }
                initial={ { transform: 'translate( 0, 100% )' } }
                animate={ { transform: 'translate( 0, 0% )' } }
                exit={ { transform: 'translate( 0, 100% )' } }
            >
                { title } <sup>{ num }</sup>
            </motion.div>  
            </div>
            <div className={ styles.project_body_wrap }>
                <ProjectImg img={ img }/>
                <ProjectDesc desc={ desc } />
            </div>
        </div>
    )
}

export default ProjectLayout
