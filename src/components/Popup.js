import { useRef, useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence} from "framer-motion"

import useOutsideAlerter from "../hooks/useOutsideAlerter";

import Appli from "./Appli";

export default function Popup(props) {
    const popupRef = useRef(null);
    const bgAnimation = useAnimation();
    const popupAnimation = useAnimation();

    const [name, applis] = props.data;
    const gridC = applis.length<=4?3:3;

    const popupVariants = {
        open: {
            scale:1,
            // opacity:1,
        },
        close: {
            scale:0,
            // opacity:0,
        },
    };

    const bgVariants = {
        open: {
            opacity:1,
            scale:1,
            transition: {duration:0.05}
        },
        close: {
            opacity:0,
            scale:0,
            transition: {duration:0.1}
        },
    };

    useOutsideAlerter(popupRef, ()=>{
        props.onClose();
    });
    
    
    useEffect(()=>{
        popupAnimation.start(popupVariants[props.isOpen?'open':'close']);
        bgAnimation.start(bgVariants[props.isOpen?'open':'close']);
    }, [props.isOpen]);

    
    return (
        <AnimatePresence>
            <motion.div
                key={1}
                className="z-50 fixed w-screen h-screen top-0 left-0 backdrop-filter backdrop-blur-sm backdrop-brightness-75"
                animate={bgAnimation}
                initial={{
                    opacity:0,
                    scale:0
                }}
            />
            <motion.div
                key={2}
                className="z-50 fixed w-screen h-screen top-0 left-0 flex flex-col items-center"
                animate={popupAnimation}
                initial={{
                    scale:0,
                    // opacity:0
                }}
            >
                <div 
                    ref={popupRef} 
                    className={`popup m-auto w-3/4 md:w-1/3 lg:w-1/3 xl:w-1/4 relative group flex flex-col text items-center justify-start`} 
                >   
                    <span className="-mt-10 pb-4 text-xl text-white" >{name}</span>
                    <div className={`grid grid-cols-${gridC} grid-rows-${gridC} gap-2 p-2 bg-gray-100 rounded-2xl p-4`}>
                        {
                            applis.map((appli,i)=><Appli key={props.key+'-'+i} id={appli}/>)
                        }
                    </div>
                </div>
            </motion.div>
           
        </AnimatePresence>

    );
};