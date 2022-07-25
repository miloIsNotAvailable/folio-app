import { FC } from "react";
import ProjectLayout from "../ProjectLayout";
import { styles } from "./PagesStyles";
import { default as Img } from '../../graphics/notesapp.png'

const NotesApp: FC = () => {

    return (
        <div className={ styles.pages_wrap }>
            <ProjectLayout 
                desc={ "notes app for creating notes in form of drawings, images, and text and sharing them with friends." } 
                title={ "notes app" }
                num={ '02' } 
                img={ Img }   
            />
        </div>
    )
}

export default NotesApp