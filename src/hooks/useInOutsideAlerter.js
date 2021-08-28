import { useEffect } from "react";
export default function useInOutsideAlerter(ref, insideCallBack, outsideCallBack) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClick(event) {
            // outside
            if (ref.current && !ref.current.contains(event.target)) {
                outsideCallBack()
            }

            if (ref.current && ref.current.contains(event.target)) {
                insideCallBack()
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClick);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClick);
        };
        // eslint-disable-next-line
    }, [ref]);
}