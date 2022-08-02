import { FC } from "react";
import ProjectLayout from "../ProjectLayout";
import { styles } from "./PagesStyles";
import { default as Img } from '../../graphics/docsapp.png'
import ProcessLayout from "../ProcessLayout";
import { Link } from "react-router-dom";

const DocsApp: FC = () => {

    const arr = [
        { title: 'design', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining" },
        { title: 'coding', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining" },
        { title: 'what I learned', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining" },
    ]

    return (
        <div className={ styles.pages_wrap }>
            <Link to="/">
                go back
            </Link>
            <ProjectLayout 
                desc={ "WYSWIG document editor that uses RNN LSTM model to generate text" } 
                title={ "docs app" }
                num={ '03' } 
                img={ Img }   
            />
            <ProcessLayout arr={ arr } />
        </div>
    )
}

export default DocsApp