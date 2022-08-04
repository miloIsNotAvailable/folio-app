import { FC } from "react";
import ProjectLayout from "../ProjectLayout";
import { styles } from "./PagesStyles";
import { default as Img } from '../../graphics/notesapp.png'
import ProcessLayout from "../ProcessLayout";
import { Link } from "react-router-dom";

const NotesApp: FC = () => {

    const arr = [
        { title: 'design', desc: "For this web app, I wanted a design that resembled google keep, but was still bubbly and felt friendlier. On the other hand for I used brighter but still pastel-esque colors to mimic how bright they usually are" },
        { title: 'coding', desc: "I started by again, creatig basic JWT auth, for some reason I still had no idea you could add multiple reducers to one slice, so I made 3 separate slices and use combineReducers. By making chat app (and my friend breaking it on the first try because I did not add any error handling) I realised I need to handle incorrect data somehow, and decided to use regex for checking if email includes @ and .com etc. After handling authentication I decided to make the layout for the app itself, this time I divided it into 3 parts: navbar, note creation(input), and displaying notes. Navbar didn't create any problems. But for Input, I decided to divide it in a way that they could be stored into database without any major changes, and could be created without suing a bunch of different qeuries, so I dvided them into type, content, author etc.. For images and hand drawn notes I used firebase and saved them as images, for hand drawn notes I could just skip saving them in a bucket then getting a link, and just save the content of the note. For querying I decided to use RTKQuery, and graphql server made from scratch (I wanted to know better why apollo works the way it does). For database I used cockroachDB which uses SQL, but this time I made my own ORM because after using prisma I was just curious to know how those work, and is it hard to build one (it is not, it's hard to make it good tho)." },
        { title: 'what I learned', desc: "After making this project I learned more about how redux works, learned a bit more about organizing work. I thought more about making everything with eachother, but divided file structure into too many subfolders which sometimes made it annoying to add new files." },
    ]

    return (
        <div className={ styles.pages_wrap }>
            <ProjectLayout 
                desc={ "notes app for creating notes as text, drawings, or images. Project was made using react (typescript), redux & redux's RTK Query, SQL with simple custom ORM, and plain graphql and express (typescript) for backend" } 
                title={ "notes app" }
                num={ '02' } 
                img={ Img } 
                link={ "https://notes-app-three-beta.vercel.app/" }  
                git={ "https://github.com/miloIsNotAvailable/notesApp" }
            />
            <ProcessLayout arr={ arr } />
        </div>
    )
}

export default NotesApp