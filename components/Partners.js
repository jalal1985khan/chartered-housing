import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


class App extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    return(
      <div className="mainContainer container text-center mt-5">
        <h2>Our Banking Partners</h2>
        <Slider {...settings}>
          <div className="container">
          <Image src="/assets/images/partners/axis-bank.svg" width={190} height={50}/>
          </div>
          <div className="container">
          <Image src="/assets/images/partners/hdfc-bank.svg" width={190} height={50}/>
          </div>
          <div className="container">
          <Image src="/assets/images/partners/lvb-bank.svg" width={190} height={50}/>
          </div>
          <div className="container">
          <Image src="/assets/images/partners/lic-logo.svg" width={190} height={50}/>
          </div>
          <div className="container">
          <Image src="/assets/images/partners/pnb-bank.svg" width={190} height={50}/>
          </div>
          <div className="container">
          <Image src="/assets/images/partners/sbi-bank.svg" width={190} height={50}/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;