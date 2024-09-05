
import { useDispatch, useSelector } from "react-redux"
import Header from "./header";
import { useState } from "react";

export default function Home(){

    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const[status,setstatus] = useState(true);

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
    const storeMyDetails=()=>{
        dispatch({
            "type":"saveDetails",
            "data":{"name":"gay","email":"123@gmail.com"}
        })
    }
    return(
        <>
        <Header/>
        <h1>HOME PAGE</h1>
        <button onClick={ add }>ADDITION</button>
        <button onClick={ sub }>SUBTRACTION</button>
        <button onClick={ storeMyDetails }>STORE</button>
        <h1>from Redux {counterVal}</h1>
        {(status)?<p className="red">This is paragraph</p>:null}
        </>
    )
}
