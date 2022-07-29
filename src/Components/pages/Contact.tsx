import { FC } from "react";
import ContactPage from "../ContactPage";
import { styles } from "./PagesStyles";

const Contact: FC = () => {

    return (
        <div className={ styles.pages_wrap }>
            <ContactPage/>
        </div>
    )
}

export default Contact