import { FC, MouseEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./SelectedProjectsStyles";

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
            className={ styles.project_redirect_wrap }
        >
                <div className={ styles.border }/>
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