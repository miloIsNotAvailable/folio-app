import { FC } from "react";
import { Link } from "react-router-dom";
import { styles } from "./NavCardStyles";

type redirects = "/projects" | "/about" | "/contact"
type titles = "projects" | "about" | "contact"

interface RedirectProps {
    to: redirects | Omit<redirects, string>
    title: titles | Omit<titles, string>

}

const Redirect: FC<RedirectProps> = ( {
    title,
    to
} ) => {

    return (
        <div className={ styles.nav_redirect_wrap }>
            <Link 
                to={ to as string }
                className={ styles.nav_redirect_text }
            >
                <div>
                    { title }
                </div>
                <div>
                    {"→"}
                </div>
            </Link>
        </div>
    )
}

export default Redirect