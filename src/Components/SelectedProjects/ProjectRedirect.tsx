import { FC, MouseEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./SelectedProjectsStyles";
import{ motion } from 'framer-motion'

interface ProjectRedirectProps {
    to: string
    desc: string
    title: string
}

const ProjectRedirect: FC<ProjectRedirectProps> = ( {
    desc,
    to,
    title
} ) => {

    return (
        <Link 
            to={ to } 
            className={ styles.project }
        >
            <div className={ styles.project_desc }>
                { desc }
            </div>
            <div className={ styles.project_title }>
                {"→\n"}
                { title }
            </div>
        </Link>
    )
}

export default ProjectRedirect