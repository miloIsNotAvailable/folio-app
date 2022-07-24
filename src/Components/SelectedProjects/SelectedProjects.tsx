import { FC, MouseEvent, useRef, useState } from "react";
import ProjectRedirect from "./ProjectRedirect";
import { styles } from "./SelectedProjectsStyles";

const SelectedProjectCard: FC = () => {

    const arr = [
        { to: '/chatapp', title: 'chat\napp', desc: 'discord, escept more bubbly' },
        { to: '/notesapp', title: 'notes\napp', desc: 'notes app for creating notes in form of drawings, images, and text and sharing them with friends.' },
        { to: '/docsapp', title: 'docs\napp', desc: 'google docs, that can generate text using LSTM RNN ai model.' },
    ]

    const [ { pageX, pageY }, setMouseCoords ] = useState<{ pageX: number, pageY: number }>( { pageX: 0, pageY: 0 } )
    const ref = useRef<HTMLDivElement | null>( null )

    const getMouseCoords: 
    ( e: MouseEvent<HTMLDivElement> ) => void = ( { nativeEvent, pageX, pageY } ) => {
        setMouseCoords( { pageX, pageY } )
        console.log(  nativeEvent.offsetX, pageX, ref.current?.offsetLeft )
    }

    return (
        <div 
        className={ styles.selected_projects_wrap }    
        >
            <div className={ styles.project_redirect_title }>
                {"selected \nprojects."}
            </div>
            <div 
                ref={ ref }
                className={ styles.projects }
                onMouseMove={ getMouseCoords }
            >
                <div 
                    style={ {
                        left: ref.current?.offsetLeft ? pageX - ref.current!.offsetLeft - 50 + "px" : 0,
                        top: ref.current?.offsetTop ? pageY - ref.current!.offsetTop - 100 + "px" : 0
                    } }
                    className={ styles.mouse }
                >go to</div>
                {
                    arr.map( ( { desc, title, to }, ind ) => (
                        <ProjectRedirect 
                            desc={ desc} 
                            title={ title }
                            to={ to } 
                            key={ ind }
                        />
                    ) )
                }
            </div>
        </div>
    )
}

export default SelectedProjectCard