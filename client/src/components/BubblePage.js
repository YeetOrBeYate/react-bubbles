import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const [changed, setChange] = useState(false);

  const Changy = ()=>{
    setChange(!changed);
  }

   const axiosWithAuth = ()=>{
    return axios.create({
         headers:{
             authorization: localStorage.getItem("token")
         }
     });
 }

 useEffect(()=>{

    const Auth = axiosWithAuth();
 
    Auth.get("http://localhost:5000/api/colors")
     .then((res)=>{
       console.log("nice, data",res.data)
       setColorList(res.data)
     })
     .catch((err)=>{
       console.log(err);
     })
  
 },[changed])



  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setChange={Changy} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
