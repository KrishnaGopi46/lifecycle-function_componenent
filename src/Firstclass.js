import React, { useEffect, useState } from 'react'
import Secondclass from './Secondclass';

const Firstclass = () => {
   
const[name,setName]=useState("gopi");
const[age,setAge]=useState(23);
const[show,setShow]=useState(true);

    useEffect(()=>{
        console.log("componentDidMount");
    },[]);

    useEffect(()=>{
        console.log("componentDidupdate");
    },[name,age]);

  return (
    <div>Firstclass{name}

    <button onClick={()=>setName("krish")}>ChangeName</button>
    <button onClick={()=>setAge("24")}>ChangeAge</button>
    <button onClick={()=>setShow(! show)}>Show/Hide</button>
    {show ? <Secondclass/> : null}
    </div>
  )
}

export default Firstclass