import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { styles } from "./NavCardStyles";
import { motion, useScroll } from 'framer-motion'

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
        <motion.div 
            className={ styles.nav_redirect_wrap }
            initial={ { opacity: 0, transform: 'translate(-100%, 0)' } }
            whileInView={ { opacity: 1, transform: 'translate(0, 0)' } }
            exit={ { opacity: 0, transform: 'translate(100%, 0)' } }
        >
            <Link 
                to={ to as string }
                className={ styles.nav_redirect_text }
            >
                <div>
                    { title }
                </div>
                <div className={ styles.arrow }>
                    {"→"}
                </div>
            </Link>
        </motion.div>
    )
}

export default Redirect