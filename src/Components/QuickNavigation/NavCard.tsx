import { FC } from "react";
import { styles } from "./NavCardStyles";
import Redirect from "./Redirect";

const NavCard: FC = () => {

    const arr = [
        { to: "/projects", title: "projects" },
        { to: "/about me", title: "about me" },
        { to: "/contact", title: "contact" },
    ]

    return (
        <div className={ styles.nav_card_wrap }>
            {
                arr.map( ( { title, to }, ind: number ) => (
                    <Redirect 
                        title={ title } 
                        to={ to } 
                        key={ ind }
                    />
                ) )
            }
        </div>
    )
}

export default NavCard