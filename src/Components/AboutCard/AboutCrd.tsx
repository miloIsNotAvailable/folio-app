import { FC } from "react";
import AboutCardTitle from "./AboutCardTitle";
import { styles } from "./AboutStyles";
import { motion } from "framer-motion";

const AboutCard: FC = () => {

    return (
        <motion.div 
            className={ styles.about_card_wrap }
            transition={ {
                duration: 1,
                ease: [ 0.795, 0.275, 0.395, 0.825 ]  
            } }
            initial={ { backgroundPosition: '0% 0' } }
            animate={ { backgroundPosition: '-100% 0' } }
            exit={ { backgroundPosition: '0% 0' } }
        >
            <AboutCardTitle/>
        </motion.div>
    )
}

export default AboutCard