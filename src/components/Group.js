import { useRef, useState, useEffect } from "react";
import Appli from "./Appli";
import { motion, useAnimation} from "framer-motion"

import CaseName from "./CaseName";
import CaseContent from "./CaseContent";
import Popup from "./Popup";

export default function Group(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [name, applis] = props.data;
    const gridC = applis.length<=4?3:3;
      

    return (<>
        <div 
            className={`flex flex-col text items-center`}
            onClick={()=>setIsPopupOpen(true)}
        >   
            <CaseContent i={props.i} show={!isPopupOpen}>
                <div className={`grid grid-cols-${gridC} grid-rows-${gridC} gap-px m-auto p-2 bg-gray-100 rounded-xl`}>
                    {
                        applis.map((appli,j)=><Appli i={props.i*5+j} key={props.j+'-'+j} minimize={true} id={appli}/>)
                    }
                </div>
                <CaseName name={name} />
            </CaseContent>
        </div>

        <Popup data={props.data} isOpen={isPopupOpen} onClose={()=>setIsPopupOpen(false)}/>
    </>);
};
