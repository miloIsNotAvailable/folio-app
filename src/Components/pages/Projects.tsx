import { FC, useState } from "react";
import { styles } from "./PagesStyles";
import ProjectsCard from "../ProjectsCard";
import ProjectsMenu from "../ProjectsMenu";
import { arrType, ProjectsContextProvider } from "../../contexts/ProjectsContext";
import { default as NotesApp } from '../../graphics/notesapp.png'
import { default as ChatApp } from '../../graphics/chatapp.png'
import { default as DocsApp } from '../../graphics/docsapp.png'

const Projects: FC = () => {

    const [ selected, setSelected ] = useState<arrType>( { 
        desc: "", 
        img: "", 
        title: "",
        link: "" 
    } )  

    const arr = [ 
        { title: 'chat app', desc: 'chat app for sending messages, images and voice calling.', img: ChatApp, link: "/chatapp" },
        { title: 'notes app', desc: 'notes app for creating notes as draiwngs, text, or images and sharing them with friends.',  img: NotesApp, link: "/notesapp" },
        { title: 'docs app', desc: 'docs app that uses LSTM model for text generation.',  img: DocsApp, link: "/docsapp" },
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