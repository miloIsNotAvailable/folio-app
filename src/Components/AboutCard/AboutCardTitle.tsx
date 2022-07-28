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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
           </motion.div>
        </div>
    )
}

export default AboutCardTitle