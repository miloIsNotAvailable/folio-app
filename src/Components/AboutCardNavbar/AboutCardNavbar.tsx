import { FC, useEffect, useState } from 'react';
import { styles } from './AboutCardNavbarStyles';
import AboutCardNavbarTile from './AboutCardNavbarTile';
import { motion } from 'framer-motion';

const AboutCardNavbar: FC = () => {

    const arr = [
        { title: 'about me', desc: "I'm milo, and I'm from Poland. I started coding in summer of 2020, and got into web dev in february of 2021. One of my favorite things about coding is that you keep discovering new things, as well as learning new stuff, since everything's constantly changing. I also love that with code you can make almost anything, with just math, and love the fact that you can make stuff easier. Outside of coding, I really like art, and music. I enjoy drawing, as well as photography and graphic design, as for music I play the guitar, and just like music, for guitar I especially love flamenco and classical music. As for sports I like playing footy, and swimming. I also love playing with my bear like creature named Bart.", bg: 'var(--dark-green)' },
        { title: 'education', desc: "As for education, I graduated high school in may of 2022. I've been also learning spanish since I was 11, and have been taking german in school for 6 years. I was in class with advanced bilogy and chemistry, but in my senior year I also took advanced math, and ended up taking the final in it, where I got 80 (average score was 20).", bg: 'var(--brown)' },
        { title: 'experience', desc: 'As for experience, I was mainly helping my dad with posters, or uploading stuff to websites. I also helped with directing scavenger hunt for foreign students. In middle school I was making posters for various school events, and in high school I was asked to direct a photoshoot for promotional posters for school.', bg: 'var(--dark-blue)' },
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