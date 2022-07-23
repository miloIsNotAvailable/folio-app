import { FC, useCallback, useEffect, useRef } from "react";
import { styles } from "./BlobCardStyles";
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, PlaneGeometry, ShaderMaterial, Vector2 } from 'three'
import { frag, vert } from "../../constants/shaders";

const BlobCard: FC = () => {

    const blobRef = useRef<HTMLDivElement | null>( null )

    useEffect( () => {
        if( !blobRef.current ) return

        const width = blobRef.current.offsetWidth;
        const height = blobRef.current.offsetHeight;

        const scene = new Scene()
        const camera = new PerspectiveCamera( 
            75, 
            width/height, 
            .1, 
            100 
        )

        const renderer = new WebGLRenderer()
        renderer.setSize( width, height )
        blobRef.current.appendChild( renderer.domElement )

        const geometry = new PlaneGeometry( width, height );
        // const material = new MeshBasicMaterial( { color: 'tomato' } );
        const material = new ShaderMaterial( {
            uniforms: {
                u_time: { value: 0. },
                u_resolution: { value: new Vector2( width, height ) },
                u_mouse: { value: 1. },
            },
            fragmentShader: frag,
            vertexShader: vert
        } )

        const cube = new Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 1;

        let delta = 0;
        function animate() {
            delta += .02;
            material.uniforms.u_time.value = delta
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }
        animate();

    }, [ blobRef.current ] )

    return (
        <div 
            ref={ blobRef }
            className={ styles.blob_card_wrap }
        >

        </div>
    )
}

export default BlobCard