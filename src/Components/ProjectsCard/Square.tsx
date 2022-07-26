import { FC, useEffect, useRef } from "react";

const Square: FC = () => {

    const ref = useRef<SVGCircleElement | null>( null )

    useEffect( () => {
        if( !ref.current ) return 

        window.onmousemove = ( { 
            offsetX, 
            offsetY, 
            pageX, 
            pageY 
        } ) => {
            if( !ref.current ) return
            const x = ref.current.getBoundingClientRect().left
            const y = ref.current.getBoundingClientRect().top

            const rad = Math.atan2( pageX - x, pageY - y )
            const rot = rad * Math.cos( 180/Math.PI ) * -100 + 180

            ref.current.style.transform = `rotate( ${ rot }deg )`
        }
    } )

    return (
        <>
            <svg width="100%" height="100%" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="square">
                    <circle ref={ ref } id="Ellipse10" cx="75" cy="60" r="13.5" fill="black"/>
                    <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M5.56493 60.0122C-1.85499 67.4322 -1.85499 79.4623 5.56499 86.8823L60.0122 141.329C67.4321 148.749 79.4623 148.749 86.8823 141.329L141.329 86.8823C148.749 79.4623 148.749 67.4322 141.329 60.0122L86.8823 5.56496C79.4623 -1.85499 67.4321 -1.85499 60.0122 5.56496L5.56493 60.0122ZM75.4534 52.947C59.61 53.0423 40.4473 73.4531 40.4473 73.4531C40.4473 73.4531 59.61 93.8639 75.4534 93.9592C91.4613 94.0555 110.947 73.4531 110.947 73.4531C110.947 73.4531 91.4613 52.8507 75.4534 52.947Z" fill="#86DDA8"/>
                </g>
            </svg>
        </>
    )
}

export default Square