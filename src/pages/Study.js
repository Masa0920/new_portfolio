import React from 'react'
import Menu from '../static/images/study/menyu.JPG'
import apple from '../static/images/study/apple.png'
import ELMS from '../static/images/study/ELMS.png'
import Dental from '../static/images/study/Dental.JPG'
import iSara from '../static/images/study/iSara.png'
import portfolio1 from '../static/images/study/portfolio1.png'
import StudyContent from '../components/StudyContent'
import { motion } from "framer-motion";

const Study = () => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}  className='w70vw margin-auto'>
         <div className="blank"></div>
         <div className='flex-wrap padding10 border'>
            <StudyContent title='menu tabel' index='1' date='6/11~6/13' img={Menu} h2={"メニュー表作り"} desc={"html cssを使って何かを作るのが初めてだったので何とか作れたという感じでした。それだけに、作成後簡単にスタイリングする技を教えてもらった時の印象が大きかったです。"}/>
            <StudyContent title='navbar' index='2' date='6/13~6/14' img={apple} h2={"nabvar作り"} desc={"appleのサイトのnavbarをつくりました。アイコンの入れ方、display: flex;での横並び、ホバーの使い方を学びましたした。"} />
            <StudyContent title='ELMS' index='3' date='6/14~6/16' img={ELMS} h2={"ELMS部分模写"} desc={"ELMSは、北大の講義のお知らせなどに使われているサイトです。posotionでのサイドバーの固定、tableの使い方を学びました。"} />
            <StudyContent title='Dental Clnic' index='4' date='6/16~6/21' img={Dental} h2={"Dental Clinicのサイト模写"} desc={"写真の入れ方やその調整法を学びました。また、レスポンシブもはじめてつけました。navbar,futter,tableなどいろんなstyleの復習にもなりました。"} />
            <StudyContent title='iSara' index='5' date='6/21~7/1' img={iSara} h2={"iSaraのサイト模写"} desc={"とても長いサイトで途中で終わるのかどうか心配になりましたが、大枠を作ってから細かくスタイリングしていくという方法で、くじけず作ることができました。本格的なサイト作成の考え方を学べました。"} />
            <StudyContent title='Mysite1' index='6' date='7/1~' img={portfolio1} h2={"自分のサイト"} desc={"Reactを使って制作しました。component化やmaterial-uiの使い方などReactでのサイト制作の基本を学べました。"} />
         </div>
      </motion.div>
   )
}

export default Study
