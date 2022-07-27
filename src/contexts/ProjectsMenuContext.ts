import { createContext, Dispatch, SetStateAction, useContext } from "react";

type contextType = {
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>
}
export const CreateProjectContext = createContext<contextType>( {
    selected: "",
    setSelected: () => ""
} ) 

export const ProjectMenuProvider = CreateProjectContext.Provider

export const useProjectMenuContext: () => [contextType] = () => {
    
    const context = useContext( CreateProjectContext )
    return [ context ]
}