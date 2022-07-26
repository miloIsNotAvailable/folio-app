import { FC } from "react";
import { styles } from "./ProcessLayoutStyles";
import { motion } from 'framer-motion'

interface ProcessLayoutCardProps {
    title: string,
    desc: string,
    ind: number
}

const ProcessLayoutCard: FC<ProcessLayoutCardProps> = ( {
    desc,
    title,
    ind
} ) => {

    return (
        <motion.div 
            className={ styles.process_process_wrap } 
            tabIndex={ 0 }
        >
            <div className={ styles.process_process_card }>
                <div className={ styles.process_process_title }>
                    { title } <sup>{`0${ ind }.`}</sup>
                </div>
                <div className={ styles.process_process_desc }>
                    { desc }
                </div>
                <div className={ styles.process_title_footer }>
                    { '0' + ind + "." }
                </div>
            </div>
        </motion.div>
    )
}

export default ProcessLayoutCard