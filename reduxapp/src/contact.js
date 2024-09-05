
import { useDispatch,useSelector } from "react-redux";
import Header from "./header";

export default function Contact(){
    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const add=()=>{
        dispatch({
            type:"add"
        })
    }
    const sub=()=>{
        dispatch({
            type:"sub"
        })
    }
    return(
        <>
        <Header/>
        <h1>CONTACT PAGE</h1>
        <button onClick={ add }>ADDITION</button>
        <button onClick={ sub }>SUBTRACTION</button>
        <h1>from Redux {counterVal}</h1>
        </>
    )
}
