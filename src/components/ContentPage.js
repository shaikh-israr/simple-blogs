import React from 'react'
import '../App.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import dhoni from './static/1.png'
import virat from './static/2.png'
import rohit from './static/3.png'
import suresh from './static/4.png'


function ContentPage() {
  return (
    <div className="sliderimg">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={dhoni} alt="" className="sliderimg"/>
        <img src={virat} alt="" className="sliderimg"/>
        <img src={rohit} alt="" className="sliderimg"/>
        <img src={suresh} alt="" className="sliderimg"/>
      </AliceCarousel>
    </div>
  )
}

export default ContentPage
