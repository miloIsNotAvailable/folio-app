import { FC, HTMLAttributes, MutableRefObject } from "react";
import { styles } from "./AboutCardNavbarStyles";

interface AboutCardModalProps {
    desc: string, 
    title: string,
    onClick: () => void,
    style?: HTMLAttributes<HTMLDivElement>["style"]
}

const AboutCardModal: FC<AboutCardModalProps> = ( {
    desc,
    title,
    style,
    onClick
} ) => {

    return (
        <div 
            className={ styles.about_navbar_modal } 
            style={ style }
        >
            <div className={ styles.about_navbar_modal_content_wrap }>
                <div className={ styles.about_navbar_modal_title }> 
                    { title } 
                </div>
                <div className={ styles.about_navbar_modal_content }> 
                    { desc } 
                </div>
            </div>
            <div 
                className={ styles.modal_close }
                onClick={ onClick }
            >
                ✖
            </div>
            <div className={ styles.about_navbar_modal_nav }>
            
            </div>
        </div>
    )
}

export default AboutCardModal