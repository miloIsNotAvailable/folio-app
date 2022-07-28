import { FC, useState } from 'react';
import { styles } from './AboutCardNavbarStyles';
import AboutCardNavbarTile from './AboutCardNavbarTile';

const AboutCardNavbar: FC = () => {

    const arr = [
        { title: 'about me', desc: 'lorem ipsum', bg: 'var(--dark-green)' },
        { title: 'education', desc: 'ipsum', bg: 'var(--brown)' },
        { title: 'experience', desc: 'lorem', bg: 'var(--dark-blue)' },
    ] 

    const [ selected, setSelected ] = useState<{ 
        title: string, 
        desc: string 
    }>( {
        title: '',
        desc: ""
    } )

    console.log( selected )

    return (
        <div className={ styles.about_navbar_wrap }>
            {
                arr.map( ( { desc, title, bg } ) =>(
                    <AboutCardNavbarTile
                        title={ title }
                        desc={ desc }
                        bg={ bg }
                        onClick={ () => setSelected( { desc, title } ) }
                    />
                ) )
            }
        </div>
    )
}

export default AboutCardNavbar 