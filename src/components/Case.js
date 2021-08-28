import Appli from "./Appli";
import Group from "./Group";


export default function Case(props) {
    const isGroup = Array.isArray(props.data);

    return (
        isGroup ?
            <Group i={props.i} data={props.data}/>
        :
            <Appli i={props.i} id={props.data}/> 
    );
}