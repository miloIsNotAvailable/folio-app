import { FC } from "react";
import { styles } from "./ProcessLayoutStyles";
import { motion } from 'framer-motion'

const ProcessLayoutDesc: FC = () => {

    return (
        <div className={ styles.process_desc_wrap }>
            <div className={ styles.process_desc_title }>
                <motion.div
                    transition={ { delay: .5, duration: 1, ease: [0.785, 0.265, 0.225, 0.900] } }
                    initial={ { transform: 'translate( -100%, 0 )' } }
                    whileInView={ { transform: 'translate( 0%, 0 )' } }
                    exit={ { transform: 'translate( -100%, 0 )' } }
                >
                    process.
                </motion.div>
            </div>
            <div className={ styles.process_desc_desc }>
                <motion.div
                    transition={ { delay: 1, duration: 1, ease: [0.785, 0.265, 0.225, 0.900] } }
                    initial={ { transform: 'translate( 0, 100% )' } }
                    whileInView={ { transform: 'translate( 0, 0% )' } }
                    exit={ { transform: 'translate( 0, 100% )' } }
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining            
                </motion.div>
            </div>
        </div> 
    )
}

export default ProcessLayoutDesc