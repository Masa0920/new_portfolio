import React from 'react'

const HobbyCard = (props) => {
   return (
      <div　className="w200 border-blueviolet margin10 padding10 back-white">
         <h3 className="blue"> {props.hobby} </h3>
         <div className="margin10"></div>
         <p className="pink font-weight-600"> {props.hobby_detail} </p>
      </div>
   )
}

export default HobbyCard
