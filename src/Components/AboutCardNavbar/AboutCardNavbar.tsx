import { FC, useEffect, useState } from 'react';
import { styles } from './AboutCardNavbarStyles';
import AboutCardNavbarTile from './AboutCardNavbarTile';
import { motion } from 'framer-motion';

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

    useEffect( () => {
        window.scrollTo( {
            left: 0,
            top: 0
        } )
    }, [] )

    return (
        <motion.div 
            className={ styles.about_navbar_wrap }
            initial={ { backgroundColor: "var(--bg)"} }
            animate={ { backgroundColor: "white" } }
            exit={ { backgroundColor: "var(--bg)"} }
        >
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
        </motion.div>
    )
}

export default AboutCardNavbar 