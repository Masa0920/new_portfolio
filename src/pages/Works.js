import React from 'react'
import { motion } from "framer-motion";
import WorksContent from '../components/WorksContent'
import highschool from '../static/images/works/highschool.png'
import labo from '../static/images/works/13labo.png'

const Works = () => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div className="blank"></div>
         <div className='flex-wrap-left padding10 w700 works'>
            <WorksContent title='ランディングページ制作'  date='2020/9' img={highschool} h2={"私立中学・高校進学フェア"} desc={"北海道新聞社主催の私立中学・高校進学フェアランディングページ制作の手伝いをさせていただきました。サイト制作に必要なデータを最初にすべてもらえるわけではなかったので、後から送られてきたデータのために作り直すということが何回かありました。仕様変更のつらさを身をもって感じました。"} href="https://shingakufair.web.app/" />
            <WorksContent title='13LABOホームページ'  date='2020/9' img={labo} h2={"13LABOホームページ"} desc={"13laboは日頃から北大IT研究会がお世話になっている場所です。リニューアルの手伝いをさせていただきました。"} href="https://13labo.com/"/>
            {/* <WorksContent title='' date='' img={} h2={""} desc={""} /> */}
         </div>
      </motion.div>
   )
}

export default Works
