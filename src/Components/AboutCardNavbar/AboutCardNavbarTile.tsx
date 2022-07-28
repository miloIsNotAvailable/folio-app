import { FC } from "react";
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

    return (
        <div 
            className={ styles.about_navbar_tile } 
            tabIndex={ 2 }
            onClick={ onClick }
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
                style={ {
                    backgroundColor: bg
                } }
             />
        </div>
    )
}

export default AboutCardNavbarTile