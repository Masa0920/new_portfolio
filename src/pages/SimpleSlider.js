import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../static/css/simpleslider.css"
import ss1 from "../static/images/simplislider/ss1.JPG"
import ss2 from "../static/images/simplislider/ss2.JPG"
import ss3 from "../static/images/simplislider/ss3.JPG"
// import ss4 from "../static/images/simplislider/ss4.JPG"
import ss5 from "../static/images/simplislider/ss5.JPG"
import ss6 from "../static/images/simplislider/ss6.JPG"
import ss7 from "../static/images/simplislider/ss7.JPG"

const SimpleSlider = () => {

   const settings = {
      // dots: true,
      infinite: true,
      speed: 3000, 
      autoplay: true,
      autoplaySpeed: 7000,
      slidesToShow: 1,
      slidesToScroll: 1
   };

   return (
      <div className="simpleslider">
         <Slider {...settings}>
            <div className="img-cover"> <img src={ss1} alt="" /> </div>
            <div className="img-cover"> <img src={ss2} alt="" /> </div>
            <div className="img-cover"> <img src={ss3} alt="" /> </div>
            {/* <div className="img-cover"> <img src={ss4} alt="" /> </div> */}
            <div className="img-cover"> <img src={ss5} alt="" /> </div>
            <div className="img-cover"> <img src={ss6} alt="" /> </div>
            <div className="img-cover"> <img src={ss7} alt="" /> </div>
         </Slider>
      </div>
   )
}

export default SimpleSlider
