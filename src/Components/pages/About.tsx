import { FC } from "react";
import AboutCard from "../AboutCard";
import AboutCardNavbar from "../AboutCardNavbar";
import { styles } from "./PagesStyles";

const About: FC = () => {

    return (
        <div className={ styles.pages_wrap }>
            <AboutCard/>
            <AboutCardNavbar/>
        </div>
    )
}

export default About