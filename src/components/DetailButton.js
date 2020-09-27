import React, { useState } from 'react'
import "../static/css/study.css"


const DetailButton = (props) => {

   const [showModal, setShowModal] = useState(false);
   const handleClick = () => setShowModal(!showModal);

   return (
      <div>
         <p className="detailbutton font-weight-600 border" onClick={handleClick}>やってみた感想</p>
         <div onClick={handleClick} className= { showModal ? "modal z2" : "none"} >
            <div className="modalsp border padding10 w300">
               <h2> {props.h2} </h2>
               <p className="font-weight-600"> {props.desc} </p>
            </div>
         </div>
      </div>
   )
}

export default DetailButton
