import React from 'react'
import DetailButton from './DetailButton'
import "../static/css/study.css"

const WorksContent = (props) => {
   return (
      <div className='border-blueviolet w200 margin10 padding10 back-white'>
         <div className='container flex-wrap w250 center'>
            <h3 className="back-skyblue">{props.index}</h3>
            <div className='containerleft'>
               <p className='title font-weight-600 blue'>{props.title}</p>
               <p className='date pink font-weight-600'>{props.date}</p>
            </div>
         </div>
         <img className="w150 img-contain margin10" src={props.img} alt=""/>
         <DetailButton h2={props.h2} desc={props.desc}/>
      </div>
   )
}

export default WorksContent
