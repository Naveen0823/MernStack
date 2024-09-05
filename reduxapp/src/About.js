
import { useDispatch,useSelector } from "react-redux";
import Header from "./header";

export default function About(){
    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const myDetails = useSelector((state) => state.myDetails);

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
        <h1>ABOUT PAGE</h1>
        <button onClick={ add }>ADDITION</button>
        <button onClick={ sub }>SUBTRACTION</button>
        <h1>from Redux {counterVal}</h1>
        <h1>FROM REDUX {myDetails.name}</h1>
        <h1>FROM REDUX {myDetails.email}</h1>
        </>
    )
}
