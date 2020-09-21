import React from 'react'
import HobbyCard from '../components/HobbyCard'

const Hobby = () => {
   return (
      <div className="w90vh margin-auto ">
         <div className="blank"></div>
         <div className="flex-wrap">
            <HobbyCard hobby="フットサル" hobby_detail="IT研の人たちのサッカーに興味ある人たちで集まって月何回かやっています。" />
            <HobbyCard hobby="アニメ見る" hobby_detail="ご飯食べながらと寝る前に見るのが好きです。シリアス展開0の日常系が特に好きです。" />
            <HobbyCard hobby="好きな曲聞く" hobby_detail="作業中や移動中に聞くのが好きです。いろんな曲を聞きますがアニメで使われた曲が多いです。" />
            <HobbyCard hobby="筋トレ" hobby_detail="高校で体操部だったのでそのころから頃から好きになりました。" />
         </div>
         <div className="blank-small"></div>
      </div>
   )
}

export default Hobby
