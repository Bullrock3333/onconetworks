"use client"
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import React, { useRef } from "react";
import pre_sale_data from "@/data/PreSaleData";

import choose_thumb_1 from "@/assets/img/update/bg/bg-gradient1-1.jpg"
import choose_thumb_2 from "@/assets/img/update/normal/why_1-1.png"

import icon_1 from "@/assets/img/update/icon/feature-icon1-1.svg"
import icon_2 from "@/assets/img/update/icon/feature-icon1-2.svg"
import icon_3 from "@/assets/img/update/icon/feature-icon1-3.svg"
import CountdownClock from "@/ui/CountDownClock";
 



interface DataType {
   id: number;
   title: string;
   price: string;
   skill: string;
   value: string;
   value_2: string;
}[];

interface DataType2 {
   id: number;
   icon: StaticImageData;
   title: string;
   price?: string;
   desc: string;
}[];

const amount_data: DataType[] = [
   {
      id: 1,
      title: "Expected ONCO price",
      price: "0.36 $",
      skill: "70%",
      value: "100",
      value_2: "100,000",
   },
   {
      id: 2,
      title: "Expected ONCO price",
      price: "0.36 $",
      skill: "80%",
      value: "100",
      value_2: "100,000",
   },
   {
      id: 3,
      title: "Calculation time",
      price: "Q3 2020",
      skill: "40%",
      value: "100",
      value_2: "100,000",
   },
];

const choose_data: DataType2[] = [
   {
      id: 1,
      icon: icon_1,
      title: "PRESALE 1",
      price: "0.05",
      desc: "160 Million $ONCO",
   },
   {
      id: 2,
      icon: icon_2,
      title: "PRESALE 2",
      price: "0.1",
      desc: "120 Million $ONCO",
   },
   {
      id: 3,
      icon: icon_3,
      title: "PRESALE 3",
      price: "0.15",
      desc: "120 Million $ONCO",
   },
   {
      id: 4,
      icon: icon_3,
      title: "PRESALE 4",
      price: "0.15",
      desc: "120 Million $ONCO",
   },
   {
      id: 5,
      icon: icon_3,
      title: "PRESALE 5",
      price: "0.15",
      desc: "120 Million $ONCO",
   },
   {
      id: 6,
      icon: icon_3,
      title: "PRESALE 6",
      price: "0.15",
      desc: "120 Million $ONCO",
   },
   {
      id: 7,
      icon: icon_3,
      title: "PRESALE 7",
      price: "0.15",
      desc: "120 Million $ONCO",
   },
   {
      id: 8,
      icon: icon_3,
      title: "PRESALE 8",
      price: "0.15",
      desc: "120 Million $ONCO",
   },
   {
      id: 9,
      icon: icon_3,
      title: "PRESALE 9",
      price: "0.15",
      desc: "120 Million $ONCO",
   },
   {
      id: 10,
      icon: icon_3,
      title: "PRESALE 10",
      price: "0.15",
      desc: "120 Million $ONCO",
   },
]


const settings = {
   dots: false,
   infinite: true,
   speed: 1000,
   autoplay: true,
   arrows: false,
   slidesToShow: 4,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
   ]
}

const ChooseArea = () => {

   const sliderRef = useRef<Slider | null>(null);

   const handlePrevClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };

   const handleNextClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };

   return (
      <div className="wcu-area-1 pt-0 pb-70 position-relative" id="invested">
         <div className="bg-gradient-1">
            <Image src={choose_thumb_1} alt="img" />
         </div>
         <div className="container">
            <div className="mb-25 pt-50">
               <div className="row gy-5">
                  <div className="col-lg-7">
                     <div className="section-title mb-0">
                        <h2 className="title style2">Why You Should Invest in OncoNetwork Today ?</h2>
                        <p className="sec-text">Seize the opportunity to invest in a groundbreaking healthcare project that transforms cancer treatment through blockchain and AI. Our platform unifies data and empowers crowdfunding for research, making a lasting impact. Invest today and join the fight against cancer!</p>
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="wcu-thumb text-center alltuchtopdown">
                        <Image src={choose_thumb_2} alt="img" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="row gy-5 justify-content-between">

               <div className="col-lg-10 col-sm-10">  
                  <div className="amount">
                     <h5 className="title">Blockchain: Ethereum Chain ERC-20 , Token Name: Onco Token $ONCO , Total Supply: 1.5 billion tokens</h5> 
                  </div> 
               </div> 

               <div className="col-sm-auto">
                  <div className="icon-box">
                     <button onClick={handlePrevClick} className="slider-arrow prev-btn default"><i className="fas fa-arrow-left"></i></button>
                     <button onClick={handleNextClick} className="slider-arrow next-btn default"><i className="fas fa-arrow-right"></i></button>
                  </div>
               </div>                  
               
            </div>
 
            <div className="container-fluid p-0 mt-30">
               <div className="slider-area position-relative">
                  <Slider {...settings} ref={sliderRef} className="row roadMap-active2 roadmap-slider1-a">
                     {pre_sale_data.map((item) => (
                        <div key={item.id} className="col-lg-4">
                           <div className="roadmap-item">
                              <span className="roadmap-title">{item.title}</span>
                              <div style={{ minHeight: '160px' }} className="roadmap-content">
                                 <h4 className="title"><span className="dot"></span>{item.title}</h4>
                                 <p dangerouslySetInnerHTML={{ __html: item.price }}></p>
                                 <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div> 

            {/*
            <div className="row gy-5 justify-content-between pt-30">               
               {choose_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                  <div className="feature-card">
                     <div className="feature-card-icon">
                        <Image src={item.icon} alt="img" />
                     </div>
                     <div className="feature-card-details">
                        <h4 className="feature-card-title">{item.title}</h4>
                        {item.price && <p className="feature-card-text">{item.price} $</p>}
                        <p className="feature-card-text">{item.desc}</p>
                     </div>
                  </div>
                  </div>  
               ))}              
            </div>  
            */}
             

            <div className="row gy-5 justify-content-between pt-60">
               <div className="banner-countdown-wrap">
                  <div className="coming-time" data-countdown="2025/2/10">
                  <CountdownClock />
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default ChooseArea
