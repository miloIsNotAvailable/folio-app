import { FC, useEffect } from "react";
import ProcessLayoutCard from "./ProcessLayoutCard";
import ProcessLayoutDesc from "./ProcessLayoutDesc";
import { styles } from "./ProcessLayoutStyles";
import { motion } from 'framer-motion'

interface ProcessLayoutProps {
    arr: {
        title: string;
        desc: string;
    }[]
}

const ProcesLayout: FC<ProcessLayoutProps> = ( { arr } ) => {

    useEffect( () => {
        window.scrollTo( {
            left: 0,
            top: 0
        } )
    }, [] )

    return (
        <motion.div 
            className={ styles.process_wrap }
            transition={ { duration: 1, ease: [0.645, 0.550, 0.460, 0.930] } }
            initial={ { backgroundPosition: '0 100%' } }
            whileInView={ { backgroundPosition: '0 0%' } }
            exit={ { backgroundPosition: '0 100%' } }
        >
            <ProcessLayoutDesc/>
            <div className={ styles.process_process_wrapper }>
                {
                    arr.map( ( { desc, title }, ind ) => (
                        <ProcessLayoutCard
                            desc={ desc }
                            title={ title } 
                            key={ ind }
                            ind={ ind + 1 }
                        />
                    ) )
                }
            </div>
        </motion.div>       
    )
}

export default ProcesLayout