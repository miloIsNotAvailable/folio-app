import { FC, useState } from 'react';
import { styles } from './AboutCardNavbarStyles';
import AboutCardNavbarTile from './AboutCardNavbarTile';

const AboutCardNavbar: FC = () => {

    const arr = [
        { title: 'about me', desc: 'lorem ipsum' },
        { title: 'education', desc: 'ipsum' },
        { title: 'experience', desc: 'lorem' },
    ] 

    const [ selected, setSelected ] = useState<{ 
        title: string, 
        desc: string 
    }>( {
        title: '',
        desc: ""
    } )

    return (
        <div className={ styles.about_navbar_wrap }>
            {
                arr.map( ( { desc, title } ) =>(
                    <AboutCardNavbarTile
                        title={ title }
                        desc={ desc }
                        onClick={ () => setSelected( { desc, title } ) }
                    />
                ) )
            }
        </div>
    )
}

export default AboutCardNavbar 