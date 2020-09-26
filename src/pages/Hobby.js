import React from 'react'
import HobbyCard from '../components/HobbyCard'
import { motion } from "framer-motion";

const Hobby = () => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w90vh margin-auto ">
         <div className="blank"></div>
         <div className="flex-wrap">
            <HobbyCard font="far fa-futbol" hobby="フットサル" hobby_detail="IT研の人たちのサッカーに興味ある人たちで集まって月何回かやっています。" />
            <HobbyCard font="fas fa-tv" hobby="アニメ見る" hobby_detail="ご飯食べながらと寝る前に見るのが好きです。シリアス展開0の日常系が特に好きです。" />
            <HobbyCard font="fas fa-headphones" hobby="好きな曲聞く" hobby_detail="作業中や移動中に聞くのが好きです。いろんな曲を聞きますがアニメで使われた曲が多いです。" />
            <HobbyCard font="fas fa-hiking" hobby="筋トレ" hobby_detail="高校で体操部だったのでそのころから頃から好きになりました。" />
         </div>
         <div className="blank-small"></div>
      </motion.div>
   )
}

export default Hobby
