import { FC } from "react";
import { styles } from "./AboutStyles";
import { motion } from "framer-motion";

const AboutCardTitle: FC = () => {

    return (
        <div className={ styles.about_card_title }>
           <motion.div
            transition={ {
                delay: 1,
                duration: 1,
                ease: [ 0.795, 0.275, 0.395, 0.825 ]  
            } }
            initial={ { transform: 'translate( 0, -100% )' } }
            animate={ { transform: 'translate( 0, 0% )' } }
            exit={ { transform: 'translate( 0, -100% )' } }
           >
                I started webdev in february of 2021, and I loved it ever since. From designing websites and web apps, to actually creating them, and making them work... 
           </motion.div>
        </div>
    )
}

export default AboutCardTitle