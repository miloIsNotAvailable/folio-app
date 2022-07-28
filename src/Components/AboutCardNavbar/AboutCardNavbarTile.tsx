import { FC } from "react";
import { styles } from "./AboutCardNavbarStyles";

interface AboutCardNavbarTileProps {
    title: string,
    desc: string
} 

const AboutCardNavbarTile: FC<AboutCardNavbarTileProps> = ( {
    desc, 
    title
} ) => {

    return (
        <div className={ styles.about_navbar_tile } tabIndex={ 2 }>
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