import { FC } from "react";
import { styles } from "./AboutCardNavbarStyles";

interface AboutCardNavbarTileProps {
    title: string,
    desc: string,
    onClick: () => void
} 

const AboutCardNavbarTile: FC<AboutCardNavbarTileProps> = ( {
    desc, 
    title,
    onClick
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
        </div>
    )
}

export default AboutCardNavbarTile