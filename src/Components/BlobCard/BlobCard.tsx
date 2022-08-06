import { FC, useCallback, useEffect, useRef, useState } from "react";
import { styles } from "./BlobCardStyles";
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, PlaneGeometry, ShaderMaterial, Vector2 } from 'three'
import { frag, vert } from "../../constants/shaders";
import { motion } from 'framer-motion'
import { useLocation } from "react-router-dom";

const BlobCard: FC = () => {

    const blobRef = useRef<HTMLDivElement | null>( null )
    const [ { height, width }, setParams ] = useState<{ width: number, height: number }>( { width: 0, height: 0 } )

    const { pathname } = useLocation()

    useEffect( () => {
        if( !blobRef.current ) return
        setParams( {
            width: blobRef.current!.offsetWidth,
            height: blobRef.current!.offsetHeight,
        } )
    }, [ blobRef.current?.offsetWidth ] )

    useEffect( () => {
        if( !blobRef.current ) return

        // const width = blobRef.current.offsetWidth;
        // const height = blobRef.current.offsetHeight;

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

        const render = () => {
            renderer.render( scene, camera );
        }

        let delta = 0;
        function animate() {
            delta += .02;
            material.uniforms.u_time.value = delta
            requestAnimationFrame( animate );
            render()
        }
        animate();

        // pathname !== "/" && renderer.dispose()

    }, [ blobRef.current ] )

    return (
        <div className={ styles.blob_card }>
            <div
                ref={ blobRef }
                className={ styles.blob_card_wrap }
            >
            </div>
        </div>
    )
}

export default BlobCard