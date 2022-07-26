import { FC } from "react";
import ProjectLayout from "../ProjectLayout";
import { styles } from "./PagesStyles";
import { default as Img } from '../../graphics/notesapp.png'
import ProcessLayout from "../ProcessLayout";

const NotesApp: FC = () => {

    const arr = [
        { title: 'what I learned', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining" },
        { title: 'coding', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining" },
        { title: 'design', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining" },
    ]

    return (
        <div className={ styles.pages_wrap }>
            <ProjectLayout 
                desc={ "notes app for creating notes as text, drawings, or images. Project was made using react (typescript), redux & redux's RTK Query, SQL simple with custom ORM, and plain graphql and express (typescript) for backend" } 
                title={ "notes app" }
                num={ '02' } 
                img={ Img }   
            />
            <ProcessLayout arr={ arr } />
        </div>
    )
}

export default NotesApp