import { FC, useRef } from "react";
import AboutCardModal from "./AboutCardModal";
import { styles } from "./AboutCardNavbarStyles";

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
    console.log( ref )

    return (
        <div 
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
        </div>
    )
}

export default AboutCardNavbarTile