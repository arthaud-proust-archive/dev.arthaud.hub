import { motion, useAnimation} from "framer-motion"
import { useEffect } from "react";

const CaseContent = (props, ref)=>{
    const controls = useAnimation()
    const variants = {
        pop: {
            scale:1,
            opacity:1,
        },
        unpop: {
            scale:0,
            opacity:0
        }
    }
    const pop = ()=>controls.start(variants.pop);
    const unpop = ()=>controls.start(variants.unpop);

    useEffect(()=>{
        (props.show!==false)?pop():unpop()
    }, [props.show])


    return (
        <motion.div
            initial={{
                scale:0,
                opacity:0
            }}
            animate={{
                scale:1,
                opacity:1,
            }}
            transition={{
                delay: 1+props.i * 0.1,
            }}
            className="flex flex-col w-full m-auto  overflow-hidden"
        >
            <motion.div
                initial={{
                    scale:0,
                    opacity:0
                }}
                animate={controls}
                className="flex flex-col w-full m-auto bordere border-red-100 relative overflow-hidden"
                ref={ref}
            >
                { props.children }
            </motion.div>
        </motion.div>

    );
};
export default CaseContent;