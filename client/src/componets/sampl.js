import React,{useMemo, useState,useEffect} from 'react';

const ExpandBlog = () => {
    const[add,setAdd]=useState(0);
    const[minus,setMinus]=useState(100);

    const Multi=()=>useMemo(()=>{
        console.log('function multi started')
        return add*10;
    },[minus])

    useEffect(()=>{
        console.log('function multi started inside useefeect')
    },[add])
    
    const sample=()=>{
        console.log("muje kyu toda")
    }


    return (
        <div>
            {Multi()}<br/>
            {sample()}<br/>
            <button className="my-3 mx-3 md-5"onClick={()=>setAdd(add+1)}>addition </button>
            <span>{add}</span>
            <br/>
            <button className="my-3 mx-3 md-5" onClick={()=>setMinus(minus-1)}>substraction </button>
            <span>{minus}</span>
        </div>
    ) 
}

export default ExpandBlog;

