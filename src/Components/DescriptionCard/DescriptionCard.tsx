import { FC, useRef } from "react";
import { useMouse } from "../../hooks/useMouse";
import { styles } from "./DescriptionCardStyles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DescriptionCard: FC = () => {

    const ref = useRef<HTMLAnchorElement | null>( null )
    const [ { pageX, pageY, mouseLeft } ] = useMouse<HTMLAnchorElement>( ref ) 

    return (
        <Link to={ "/about me" } className={ styles.desc_card_wrap } ref={ ref }>
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
            <div className={ styles.desc }>
                Lorem Ipsum is simply dummy text of the printing and typesetting <div className={ styles.circle }></div> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s <div className={ styles.round }></div>
            </div>
        </Link>
    )
}

export default DescriptionCard