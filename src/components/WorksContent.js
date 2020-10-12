import React from 'react'
import DetailButton from './DetailButton'
import "../static/css/works.css"

const WorksContent = (props) => {
   return (
      <div className='border-blueviolet w250 margin10 padding10 back-white flex-column'>
         <div className='container w250 center'>
            <p className='title font-weight-600 blue'>{props.title}</p>
            <p className='pink font-weight-600'>{props.date}</p>
         </div>
         <img className="w250 img-contain margin10-auto" src={props.img} alt=""/>
         <div className="flex-grow1"></div>
         <DetailButton h2={props.h2} desc={props.desc}/>
         <a className="works-link w100" href={props.href} target="_blank" rel="noopener noreferrer">LINK</a>
      </div>
   )
}

export default WorksContent
