import React from 'react'
import "../static/css/navbar.css"
import { Link } from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {

   const [click1, setClick1] = useState(true);
   const [click2, setClick2] = useState(false);
   const [click3, setClick3] = useState(false);
   const [click4, setClick4] = useState(false);
   const handleClick1 = () => {
      setClick1(true);
      setClick2(false);
      setClick3(false);
      setClick4(false);
   } 
   const handleClick2 = () => {
      setClick2(true);
      setClick1(false);
      setClick3(false);
      setClick4(false);
   } 
   const handleClick3 = () => {
      setClick3(true);
      setClick2(false);
      setClick1(false);
      setClick4(false);
   }
   const handleClick4 = () => {
      setClick4(true);
      setClick3(false);
      setClick2(false);
      setClick1(false);
   }

   return (
      <div className="navbar">
         <Link className="h-reverse" to="/" ><h2 onClick={handleClick1} className={click1 ? "back-skyblue padding10 fade-in" : "fade-out padding10"}>Profile</h2></Link>
         <Link className="h-reverse" to="/study" ><h2 onClick={handleClick2} className={click2 ? "back-skyblue padding10 fade-in" : "fade-out padding10"}>勉強記録</h2></Link>
         <Link className="h-reverse" to="/works" ><h2 onClick={handleClick3} className={click3 ? "back-skyblue padding10 fade-in" : "fade-out padding10"}>実務経験</h2></Link>
         <Link className="h-reverse" to="/hobby" ><h2 onClick={handleClick4} className={click4 ? "back-skyblue padding10 fade-in" : "fade-out padding10"}>趣味</h2></Link>
      </div>
   )
}

export default Navbar