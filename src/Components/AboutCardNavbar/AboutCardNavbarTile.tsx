import { FC, useRef } from "react";
import AboutCardModal from "./AboutCardModal";
import { styles } from "./AboutCardNavbarStyles";
import { motion } from 'framer-motion'

interface AboutCardNavbarTileProps {
    title: string,
    desc: string,
    onClick: () => void,
    bg: string
} 

const AboutCardNavbarTile: FC<AboutCardNavbarTileProps> = ( {
    desc, 
    title,
    onClick,
    bg
} ) => {

    const ref = useRef<HTMLDivElement | null>( null )

    return (
        <motion.div 
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            className={ styles.about_navbar_tile } 
            tabIndex={ 2 }
            onClick={ onClick }
            ref={ ref }
      >
            <div className={  styles.about_navbar_tile_title }>
                <div>
                    { title }
                </div>
                <div>
                    →
                </div>
            </div>
            <AboutCardModal 
                title={ title }
                desc={ desc }
                onClick={ () => ref.current?.blur() }
                style={ {
                    backgroundColor: bg
                } }
             />
        </motion.div>
    )
}

export default AboutCardNavbarTile