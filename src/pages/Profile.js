import React from 'react'
import { motion } from "framer-motion";

const Profile = () => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w90vh margin-auto">
         <div className="blank"></div>
         <h3>Masashige Hayashi</h3>
         <div className="margin10"></div>
         <div className="res border-black w600 margin-auto padding10 back-white">
            <h3>所属</h3>
            <p>北海道大学　情報エレクトロニクス学科　メディアネットワークコース 2年</p>
            <p>北海道大学IT研究会　科技大LTサークル</p>
            <p></p>
         </div>
         <div className="blank"></div>
         <div className="res border-black w600 margin-auto padding10 back-white">
            <h3>自己紹介</h3>
            <div className="left padding10">
               <p className="font-weight-600">基本情報</p>
               <p>1998年9月20日生まれ22歳　埼玉県出身</p>
               <p className="font-weight-600">大学受験</p>
               <p>医学部を目指し２浪をするも合格できず、１浪め２浪めの伸びから限界を感じ北海道大学に入学。</p>
               <p className="font-weight-600">大学1年</p>
               <p>新たな道を求めて競技プログラミングや、ドットインストールでのhtml,cssの勉強などプログラミング関係でいろいろやってみるもモチベが続かずぱっとしない1年を過ごしました。</p>
               <p className="font-weight-600">大学2年</p>
               <p>２年の６月IT研の活動場所である１３Laboのホームページ運用にかかわれることになりました。運用にするにあったて必要な知識を１からIT研の先輩に教えていただきました。</p>
               <p className="font-weight-600">これから</p>
               <p>現在はhtml、css、少しのjavascriptを使ったサイトを作ることしかできないですが、開発経験を通して学んでいきたいと思っています。</p>
               <p className="font-weight-600">以前作ったサイト</p>
               <p>
                  <a href="https://osamu-portfolio.web.app/" target="_blank" rel="noopener noreferrer">https://osamu-portfolio.web.app/</a>
               </p>
            </div>
         </div>
         <div className="blank"></div>
      </motion.div>
   )
}

export default Profile
