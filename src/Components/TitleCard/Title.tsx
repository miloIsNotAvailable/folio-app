import { FC } from "react";
import { styles } from "./TitleCardStyles";
import { motion } from "framer-motion";

const Title: FC = () => {

    return (
        <div className={ styles.title_card_wrap }>
            <div className={ styles.title_card_upper }>
                <motion.div 
                    transition={ { 
                            duration: 1,
                            delay: .8,
                            ease: [ 0.850, -0.015, 0.360, 0.980 ]
                    } }
                    initial={ { transform: 'translate( 0, -100% )' } }
                    animate={ { transform: 'translate( 0, 0% )' } }
                    exit={ { transform: 'translate( 0, 100% )' } }
                >
                    {"hey \nI'm milo"}
                </motion.div>
            </div>
            <motion.div 
                className={ styles.title_card_line  } 
                transition={ {
                    duration: .8,
                    ease: [ 0.460, 0.100, 0.000, 0.960 ]
                } }
                initial={ { maxWidth: 0 } }
                animate={ { maxWidth: 'calc( 100% - 1rem - 14ch )' } }
                exit={ { maxWidth: 0 } }
            />
            <div className={ styles.title_card_bottom }>
                <motion.div
                    transition={ { 
                        duration: 1,
                        delay: .8,
                        ease: [ 0.850, -0.015, 0.360, 0.980 ]
                    } }
                    initial={ { transform: 'translate( 0, 100% )' } }
                    animate={ { transform: 'translate( 0, 0% )' } }
                    exit={ { transform: 'translate( 0, -100% )' } }    
                >
                    {"I like \nmaking stuff"}
                </motion.div>
            </div>
            <div className={ styles.title_card_footer }  >
            <motion.div
                transition={ { 
                    duration: 1,
                    delay: 1.8,
                    ease: [ 0.850, -0.015, 0.360, 0.980 ]
                } }
                initial={ { transform: 'translate( 0, 110% )' } }
                animate={ { transform: 'translate( 0, 0% )' } }
                exit={ { transform: 'translate( 0, 110% )' } }  
            >
                {"scroll down ↓"}
            </motion.div>
            </div>
        </div>
    )
}

export default Title