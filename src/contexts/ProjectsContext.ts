import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type arrType = { 
    title: string, 
    desc: string, 
    img: string, 
    link: string
}

type contextType = {
    arr: arrType[],
    selected: arrType,
    setSelected: Dispatch<SetStateAction<arrType>>
}
export const ProjectsContext = createContext<contextType>( {
    arr: [
        {
            desc: '',
            img: "",
            title: "",
            link: ""
        }
    ],
    selected: {
        desc: "",
        title: "",
        img: "",
        link: ""
    },
    setSelected: () => ""
} ) 

export const ProjectsContextProvider = ProjectsContext.Provider

export const useProjectContext: () => [
    arrType[], 
    arrType, 
    Dispatch<SetStateAction<arrType>>
] = () => {
    
    const { arr, selected, setSelected } = useContext( ProjectsContext )
    return [ arr, selected, setSelected ]
}