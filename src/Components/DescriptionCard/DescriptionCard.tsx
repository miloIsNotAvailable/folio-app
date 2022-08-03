import { FC, useRef } from "react";
import { useMouse } from "../../hooks/useMouse";
import { styles } from "./DescriptionCardStyles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DescriptionCard: FC = () => {

    const ref = useRef<HTMLAnchorElement | null>( null )
    const [ { pageX, pageY, mouseLeft } ] = useMouse<HTMLAnchorElement>( ref ) 

    return (
        <Link to={ "/aboutme" } className={ styles.desc_card_wrap } ref={ ref }>
            <motion.div
                initial={ { opacity: 0 } }
                whileInView={ { opacity: 1 } } 
                exit={ { opacity: 0 } }
                style={ {
                    left: pageX,
                    top: pageY,
                    visibility: mouseLeft ? 'collapse' : 'visible'
                } }
                className={ styles.mouse }
            >{"see \nmore"}</motion.div>
            <motion.div 
                className={ styles.desc }
                transition={ { duration: .5 } }
                initial={ { opacity: 0 } }
                whileInView={ { opacity: 1 } }
                exit={ { opacity: 0 } }
            >
                I started webdev in february of 2021, and I loved it ever since. From <motion.div 
                className={ styles.circle }
                transition={ { delay: .5 } }
                initial={ { opacity: 0 } }
                whileInView={ { opacity: 1 } }
                exit={ { opacity: 0 } }
                ></motion.div> designing websites and web apps, to actually creating them, and making them work... <motion.div 
                className={ styles.round }
                transition={ { delay: 1 } }
                initial={ { opacity: 0 } }
                whileInView={ { opacity: 1 } }
                exit={ { opacity: 0 } }
                ></motion.div>
            </motion.div>
        </Link>
    )
}

export default DescriptionCard