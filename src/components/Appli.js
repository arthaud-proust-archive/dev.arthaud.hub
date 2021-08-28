import {useState, useEffect, useContext} from 'react';
import Loader from "./Loader";

import { useSelector, useDispatch } from 'react-redux'
// import { dispositionReducer, applisReducer } from '../store';

import CaseName from './CaseName';
import CaseContent from "./CaseContent";

export default function Appli(props) {
    // const dispatch = useDispatch();
    // const disposition = useSelector(state => state.disposition.value)
    const applis = useSelector(state => state.applis.value)
    
    
    const [data, setData] = useState(null);

    useEffect(()=>{


        const handleContent = content=>{
            const missContent = m=>{throw new Error(`Hub appli need ${m} in manifest`)};

            let d = {};

            // console.log(content);
            d.name = content.short_name || missContent('short_name');
            d.url = applis[props.id];
            d.icon = content.icons.find(ico=>ico.sizes==="144x144") || missContent('one icon of size 144x144')

            setData(d);
        }

        async function fecthData() {
            try {
                if(!applis[props.id]) {
                    throw new Error("Can't get appli data")
                }
                const manifest = await fetch(applis[props.id]+'/manifest.json');
                const content = await manifest.json();
    
                handleContent(content)
            } catch(e) {
                console.error(e)
            }
        }

        fecthData();
        // eslint-disable-next-line
    }, []);

    return (
        <a className={`flex flex-col text items-center`} {...props.minimize? {}:{href:data?data.url:'/'} }>
            <CaseContent i={props.i}>
                <div className={`${props.minimize?'':' m-2'}`}>
                    {data ? 
                        <img className={`appli-img ${props.minimize?'rounded':'rounded-lg'}`} src={ new URL(data.icon.src, data.url) } />
                        :
                        <div className="appli-img">
                            <Loader/>
                        </div>
                    }
                </div>
                { data && !props.minimize &&
                    <CaseName name={data.name} />
                }
            </CaseContent>
        </a>
    );
};