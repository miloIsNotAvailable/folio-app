import { FC } from "react";
import ProjectLayout from "../ProjectLayout";
import { styles } from "./PagesStyles";
import { default as Img } from '../../graphics/docsapp.png'
import ProcessLayout from "../ProcessLayout";
import { Link } from "react-router-dom";

const DocsApp: FC = () => {

    const arr = [
        { title: 'design', desc: "for this project I wanted to try something esle. Google docs or Microsoft Word have sharp edges, I went with sharp edges hoping that the design would seem more bubbly and friendly thus making you wanna start working. For colors I also went with blues and greys to make it calmer. I also decided tomake the navbar like in photoshop, 'cause it just seems better to me (everything's in one place)." },
        { title: 'coding', desc: "In this project I felt confident enough with my JWT auth making skills, and decided to go a step further and implement JWT auth with refresh tokens. For the app itself I used cockroachDB, redux, RTKQuery, express and react (both use typescript). I used separate api made in flask, to handle all the stuff regarding LSTM model (loading it and generating text). I could've used a noSQL db like firebase or mongoDB so I could save edited document as JSON, alas I used SQL and decided to stick with it, and stringified the JSON, then just parsed it." },
        { title: 'what I learned', desc: "By making this project I learned more about JWT auth (tho implementation isnt the best), and remembered that there are other databases you can use. I also learned how to save and deploy ai models to the web. I also got to practice making everything work with itself on the frontend." },
    ]

    return (
        <div className={ styles.pages_wrap }>
            <Link to="/">
                go back
            </Link>
            <ProjectLayout 
                desc={ "online text editor, with basic functions(such as changing font, font size, font weight) that uses LSTM model to generate text from already existing content. Project was made using flask for the ai api, Express(typescript) for backend, and React(typescript) for frontend with SQL, graphql, and RTK Query for managing data and redux for state management" } 
                title={ "docs app" }
                num={ '03' } 
                img={ Img }   
                link={ "https://docs-app-miloisnotavailable.vercel.app/" }
            />
            <ProcessLayout arr={ arr } />
        </div>
    )
}

export default DocsApp