import { FC } from "react";
import { styles } from "./NavCardStyles";
import Redirect from "./Redirect";

const NavCard: FC = () => {

    const arr = [
        { to: "/project", title: "project" },
        { to: "/about me", title: "about me" },
        { to: "/contact", title: "contact" },
    ]

    return (
        <div className={ styles.nav_card_wrap }>
            {
                arr.map( ( vals ) => (
                    <Redirect { ...vals } />
                ) )
            }
        </div>
    )
}

export default NavCard