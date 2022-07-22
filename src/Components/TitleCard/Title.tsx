import { FC } from "react";
import { styles } from "./TitleCardStyles";

const Title: FC = () => {

    return (
        <div className={ styles.title_card_wrap }>
            <div className={ styles.title_card_upper }>
                {"hey \nI'm milo"}
            </div>
            <div className={ styles.title_card_bottom }>
                {"I like \nmaking stuff"}
            </div>
        </div>
    )
}

export default Title