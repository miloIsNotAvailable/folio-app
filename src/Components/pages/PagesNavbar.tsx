import { FC } from 'react'
import { Link } from 'react-router-dom'
import { styles } from './PagesStyles'
import { AnimatePresence, motion } from 'framer-motion'

const PagesNavbar: FC = () => {

    const arr = [
        { name: 'projects', link: "/projects" },
        { name: 'about', link: "/aboutme" },
        { name: 'home', link: "/" }
    ]

    return (
        <div className={ styles.navbar_wrap }>
            <div className={ styles.navbar_items }>
                <AnimatePresence exitBeforeEnter>
                    {
                        arr.map( ( { link, name }, ind ) => (
                            <motion.div
                                key={ link } 
                                className={ styles.navbar_item }
                                style={  {
                                    height: `${ ind * 2 + 1 }rem`
                                } }
                                transition={ {
                                    delay: ind * .1 + 1.5,
                                    ease: [0.645, 0.290, 0.060, 0.715]
                                } }
                                initial={ { transform: 'translate(0, -100%)' } }
                                animate={ { transform: 'translate(0, 0%)' } }
                                exit={ { transform: 'translate(0, -100%)' } }
                            >
                                <Link to={ link }
                                    className={ styles.navbar_item }
                                >
                                    { name }  
                                </Link>
                            </motion.div>
                        ) )
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default PagesNavbar