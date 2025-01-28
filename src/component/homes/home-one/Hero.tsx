import Image from "next/image";
import Link from "next/link";

import hero_thumb from "@/assets/img/update/hero/onconetwork-banner.gif";
import CountdownClock from "@/ui/CountDownClock";

const Hero = () => {
   return (
      <div className="hero-wrapper hero-1">
         <div className="hero-bg-gradient"></div>
         <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
         </div>

         <div className="container">
            <div className="hero-style1">
               <div className="row flex-row-reverse">
                  <div className="col-lg-3">
                     <div className="hero-thumb alltuchtopdown">
                        <Image src={hero_thumb} alt="img" />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <h1 className="hero-title">Data That Fights Cancer</h1>
                     <p>Transform the fight against cancer.</p>
                     <div className="btn-wrap">
                        <Link target="_blank" href="/assets/onconetwork.pdf" className="btn btn-two">
                           White Paper
                        </Link>
                     </div>
                  </div>
               </div>
            </div>


            <div className="iframe-container">
            <div className="btn-wrap">
                        <Link target="_blank" href="https://presale.onconetwork.xyz/" className="btn btn-two">
                        OIN THE PRESALE
                        </Link>
                     </div>
            </div>

            

            {/* Responsive and Centered iFrame */}
            {/*
            <div className="iframe-container">
               <iframe
                  src="https://gempad.app/embed?address=0x933796c017cfA25083b466e4aA647A1A7FAC8161&bgColor=%2312181F&fgColor=%23161D27&hasAnimation=true&hasBanner=true&hasSocialLinks=true&network=Ethereum&padding=30&refer=&responsive=true&saleType=presale&theme=dark&txtColor=%23FFFFFF"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
               ></iframe>
            </div>
            */}
         </div>
      </div>
   );
};

export default Hero;
