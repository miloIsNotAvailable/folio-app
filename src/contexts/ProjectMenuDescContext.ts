import { createContext, useContext } from "react";

type contextType = {
    desc: string
    img: string
    link: string
}

const ProjectMenuDescContext = createContext<contextType>( {
    desc: "",
    img: "",
    link: ""
} )

export const ProjectMenuDescContextProvider = ProjectMenuDescContext.Provider

export const useDescContext: () => [ contextType ] = () => {
    const context = useContext( ProjectMenuDescContext )
    return [ context ]
}