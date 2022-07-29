import { FC } from 'react'
import { motion } from 'framer-motion' 
import { styles } from './ContactPageStyles'

const ContactPage: FC = () => {

    return (
        <motion.div
            transition={ {
                duration: 1,
                ease: [ 0.730, 0.345, 0.350, 0.750 ]
            } }
            className={ styles.contact_page_wrap }
            initial={ { backgroundPosition: '0 0' } }
            animate={ { backgroundPosition: '-100% 0' } }
            exit={ { backgroundPosition: '0 0' } }
        >
            <div className={ styles.contact_page_wrap_title }>
                <motion.div
                    transition={ {
                        delay: .5,
                        duration: 1,
                        ease: [ 0.730, 0.345, 0.350, 0.750 ]
                    } }
                    initial={ { transform: 'translate( 0, -100% )' } }
                    animate={ { transform: 'translate( 0, 0% )' } }
                    exit={ { transform: 'translate( 0, -100% )' } }
                >
                    {"contact \nme."}
                </motion.div>
            </div>

            <div className={ styles.contact_page_wrap_content }>
                <motion.div
                    transition={ {
                        delay: 1,
                        duration: 1,
                        ease: [ 0.730, 0.345, 0.350, 0.750 ]
                    } }
                    initial={ { transform: 'translate( 0, -100% )' } }
                    animate={ { transform: 'translate( 0, 0% )' } }
                    exit={ { transform: 'translate( 0, -100% )' } }
                >
                    {"email \nhello@gmail.com"}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ContactPage