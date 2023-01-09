import React, { useEffect } from 'react'

const Secondclass = () => {

    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log("child componentDidmount");
        },2000);
        return()=>{
            console.log("child componentWillUnmount");
            clearInterval(interval);
        }
    },[]);

  return (
    <div>Secondclass

    </div>
  )
}

export default Secondclass