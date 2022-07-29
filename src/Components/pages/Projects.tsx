import { FC, useState } from "react";
import { styles } from "./PagesStyles";
import ProjectsCard from "../ProjectsCard";
import ProjectsMenu from "../ProjectsMenu";
import { arrType, ProjectsContextProvider } from "../../contexts/ProjectsContext";
import { default as NotesApp } from '../../graphics/notesapp.png'

const Projects: FC = () => {

    const [ selected, setSelected ] = useState<arrType>( { 
        desc: "", 
        img: "", 
        title: "",
        link: "" 
    } )  

    const arr = [ 
        { title: 'chat app', desc: 'lorem ipsum', img: NotesApp, link: "/notesapp" },
        { title: 'notes app', desc: 'lorem ',  img: NotesApp, link: "/notesapp" },
        { title: 'docs app', desc: 'ipsum',  img: NotesApp, link: "/notesapp" },
    ]

    return (
        <ProjectsContextProvider value={ {
            arr,
            selected,
            setSelected
        } }>
            <div className={ styles.pages_wrap }>
                <ProjectsCard/>
                <ProjectsMenu/>
            </div>
        </ProjectsContextProvider>
    )
}

export default Projects