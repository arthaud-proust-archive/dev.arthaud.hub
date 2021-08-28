import Case from "./components/Case";
// import "./App.css";

import { useSelector } from 'react-redux'
import { motion } from "framer-motion";
// import { dispositionReducer, applisReducer } from './store';


export default function App(props) {
    const disposition = useSelector(state => state.disposition.value)

    return (
        <div className="text-black bg-white flex flex-col items-center text-center ">
            <motion.div
                className="absolute top-0 left-0 right-0 "
                initial={{
                    height:0
                }}
                animate={{
                    height:'200px'
                }}
            />
            <motion.h1 
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1
                }}
                transition={{
                    delay:0.5
                }}
                className="pt-20 pb-5 text-8xl font-hand"
            >
                Le Hub.
            </motion.h1>
            <motion.h3 
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1
                }}
                transition={{
                    delay:3
                }}
                className="pb-5 text-2xl font-hand"
            >
                Alias, un concentré de mes sites.
            </motion.h3>
            <div className="m-auto px-4 w-full md:w-2/3 lg:1/3 py-12 lg:py-28 grid gap-2 grid-cols-4 grid-rows-6 auto-rows-min">
                {disposition.map((caseData, i)=>
                    <Case key={i} i={i} data={caseData}/>
                )}
            </div>
        </div>
    );
}


