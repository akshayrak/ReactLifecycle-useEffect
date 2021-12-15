import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  const [data,setData]=useState();
  const [text,setText]=useState();
  const [apple,setApple]=useState();

  useEffect(function(){
    console.log("something")
  },[])

  useEffect(()=>{
    console.log("a")
    setApple(false)
  },[data])

  useEffect(()=>{
    console.log("b")
    setApple(true)
  },[text])

  useEffect(()=>{
    console.log("run")
    if(apple===true)
    console.log("clicked")
  },[apple])

  const clicked=()=>{
     setApple(!apple)
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={clicked}>button</button>
    </div>
  );
}
