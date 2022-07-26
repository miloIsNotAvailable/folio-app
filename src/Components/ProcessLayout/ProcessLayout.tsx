import { FC } from "react";
import ProcessLayoutCard from "./ProcessLayoutCard";
import ProcessLayoutDesc from "./ProcessLayoutDesc";
import { styles } from "./ProcessLayoutStyles";

interface ProcessLayoutProps {
    arr: {
        title: string;
        desc: string;
    }[]
}

const ProcesLayout: FC<ProcessLayoutProps> = ( { arr } ) => {

    return (
        <div className={ styles.process_wrap }>
            <ProcessLayoutDesc/>
            <div className={ styles.process_process_wrapper }>
                {
                    arr.map( ( { desc, title }, ind ) => (
                        <ProcessLayoutCard
                            desc={ desc }
                            title={ title } 
                            key={ ind }
                            ind={ ind + 1 }
                        />
                    ) )
                }
            </div>
        </div>       
    )
}

export default ProcesLayout