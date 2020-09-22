import React from 'react'
import "../static/css/navbar.css"
import { Link } from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {

   const [click1, setClick1] = useState(true);
   const [count, setCount] = useState(0);
   const [click2, setClick2] = useState(false);
   const [click3, setClick3] = useState(false);
   const handleClick1 = () => {
      if(count!==0){setClick1(!click1)};
      setClick2(false);
      setClick3(false);
      setCount(count+1);
   } 
   const handleClick2 = () => {
      setClick2(!click2);
      setClick1(false);
      setClick3(false);
   } 
   const handleClick3 = () => {
      setClick3(!click3);
      setClick2(false);
      setClick1(false);
   }

   return (
      <div className="navbar border">
         <Link className="h-reverse border" to="/" ><h2 onClick={handleClick1} className={click1 ? "back-skyblue border padding10" : "padding10"}>Profile</h2></Link>
         <Link className="h-reverse border" to="/study" ><h2 onClick={handleClick2} className={click2 ? "back-skyblue border padding10" : "padding10"}>勉強記録</h2></Link>
         <Link className="h-reverse border" to="/hobby" ><h2 onClick={handleClick3} className={click3 ? "back-skyblue border padding10" : "padding10"}>趣味</h2></Link>
      </div>
   )
}

export default Navbar