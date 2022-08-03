import { FC } from "react";
import ProjectLayout from "../ProjectLayout";
import { styles } from "./PagesStyles";
import { default as Img } from '../../graphics/chatapp.png'
import ProcessLayout from "../ProcessLayout";
import { Link } from "react-router-dom";

const ChatApp: FC = () => {

    const arr = [
        { title: 'design', desc: "I started with the design in figma. I wanted something that was kinda like discord, but also included stuff like viewing all the images sent in chat, kinda like on facebook messenger. I went with darker colors for the layout itself, I used darker tones of blue and and grey since blue gives off the feeling of calmness. I also added a bunch of rounded corners to make app feel more bubbly." },
        { title: 'coding', desc: "After thinking about what to use I decided to use nextjs, because of SSR, and decided to go with cockroachDB for my database, sunce it attempts to make SQL work for quickly changing data (which PostgresSQL, and Cassandra are good for ) unorganized data. For realtime updates I decided to use socket.io amd RxJs. For voice calls I decided to use webRTC to learn how it all work. I started coding with making the layout for login and adding JWT auth, then I implemented the layout for mainscreen and decided to add basic stuff such as reltime messages etc. After that I used firebase to store and retreive images, and made custom markdown function for colorful text." },
        { title: 'what I learned', desc: "By making this project I learned how SSR works, as well as how sockets and peer to peer connections work. I also learned how to implement basic JWT auth, and learned more about planning my workflow/code. I deployed project to heroku(vercel uses SaaS thus can't host webscokets), and by doing so I learned a bit more abo0ut deploying projects and what a CI/CD pipeline is. I also learned how to prevent prop drilling in react." },
    ]

    return (
        <div className={ styles.pages_wrap }>
            <Link to="/">
                go back
            </Link>
            {/* change that to useContext instead of props */}
            <ProjectLayout 
                desc={ "chat app, with options such as voice call, private messaging, which incudes sending messages and edited text using markdown, and custom markdown function for colored text ( ex. :r:your text here:r: will give you red text ). App was made using next.js, socket.io and RxJS for realtime messaging, prisma for database and data menagement, and webRTC for peer to peer voice calls." } 
                title={ "chat app" }
                num={ '01' } 
                img={ Img } 
                link={ "https://milos-awesomness-app.herokuapp.com/" }  
            />
            <ProcessLayout arr={ arr } />
        </div>
    )
}

export default ChatApp