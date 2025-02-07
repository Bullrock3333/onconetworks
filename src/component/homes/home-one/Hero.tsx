"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaNetworkWired, 
  FaGamepad, 
  FaExternalLinkAlt 
} from "react-icons/fa";

import hero_thumb from "@/assets/img/update/hero/onconetwork-banner.gif";

const Hero = () => {
   const exchanges = [
     { url: "https://dexscreener.com", logo: "https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20232343/dex-screener-logo-png_seeklogo-527276.png", alt: "DEX Scanner" },
     { url: "https://bitmart.com", logo: "https://play-lh.googleusercontent.com/q-5m8NrzoaAuTcCDK9x6LSl-QlUegzG9Bt36b_HXMy_XnAjD-2T9mGtkbHQRkq7G264", alt: "BitMart" },
     { url: "https://okx.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/OKX_Logo.svg/2048px-OKX_Logo.svg.png", alt: "OKEx" },
     { url: "https://coinbase.com", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6hcTTU1A8Ymi2VldXqCsPkBu_ltAhIKiRg&s", alt: "Coinbase" },
     { url: "https://crypto.com", logo: "https://play-lh.googleusercontent.com/OhMXdCWVlKDPK-sMeMyd2PjwvFQ8d1gt5xLYtPVSyvLWxalI6bJpQz2sqGIZDIDXM4Y", alt: "Crypto.com" },
     { url: "https://bingx.com", logo: "https://seeklogo.com/images/B/bingx-logo-0C09A379A0-seeklogo.com.png", alt: "BingX" }
   ];

   const products = [
     { 
       title: "Onco Cure", 
       description: "A fundraising platform to support cancer patients.", 
       icon: <FaNetworkWired />,
       link: "https://oncocure.org"
     },
     { 
       title: "Tap Tap Game", 
       description: "Exciting game on Shark Arena platform.", 
       icon: <FaGamepad />,
       link: "https://t.me/OncoNetworkBot/SharkArenabyOncoNetwork"
     }
   ];

   return (
      <div className="hero-wrapper hero-1">
         <style>{`
            @keyframes slide {
               0% { transform: translateX(0); }
               100% { transform: translateX(calc(-50%)); }
            }
         `}</style>
         <div className="container">
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
                        JOIN THE PRESALE
                     </Link>
                  </div>
               </div>

               <div style={{ 
                  maxWidth: '100%', 
                  margin: '40px auto', 
                  textAlign: 'center', 
                  overflow: 'hidden' 
               }}>
                  <h2 style={{ 
                     fontSize: '24px', 
                     color: '#f0f0f0', 
                     marginBottom: '20px', 
                     letterSpacing: '2px' 
                  }}>
                     Soon Listing on These Exchanges
                  </h2>
                  <div style={{ 
                     position: 'relative', 
                     width: '100%', 
                     overflow: 'hidden' 
                  }}>
                     <div style={{
                        display: 'inline-flex',
                        animation: 'slide 15s linear infinite',
                        animationFillMode: 'forwards',
                        width: `calc(250px * ${exchanges.length * 2})`
                     }}>
                        {[...exchanges, ...exchanges].map((exchange, index) => (
                           <div key={index} style={{ 
                              flexShrink: 0, 
                              width: '250px', 
                              padding: '20px', 
                              textAlign: 'center' 
                           }}>
                              <a 
                                 href={exchange.url} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 style={{
                                    display: 'inline-block',
                                    transition: 'transform 0.3s'
                                 }}
                                 onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                 }}
                                 onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                 }}
                              >
                                 <img 
                                    src={exchange.logo} 
                                    alt={exchange.alt} 
                                    style={{ 
                                       width: '150px', 
                                       height: 'auto', 
                                       borderRadius: '10px',
                                       margin: '0 auto'
                                    }} 
                                 />
                              </a>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div style={{ margin: '40px auto', textAlign: 'center' }}>
                  <h2 style={{ 
                     fontSize: '24px', 
                     color: '#f0f0f0', 
                     marginBottom: '20px', 
                     letterSpacing: '2px' 
                  }}>
                     Live Products
                  </h2>
                  <div style={{ 
                     display: 'flex', 
                     justifyContent: 'center', 
                     gap: '30px',
                     flexWrap: 'wrap'
                  }}>
                     {products.map((product, index) => (
                        <Link 
                           key={index} 
                           href={product.link}
                           style={{ 
                              textDecoration: 'none', 
                              color: 'inherit', 
                              width: '300px' 
                           }}
                        >
                           <div 
                              style={{ 
                                 backgroundColor: '#242424', 
                                 borderRadius: '15px', 
                                 padding: '25px', 
                                 color: '#fff', 
                                 boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                 transform: 'translateY(0)',
                                 transition: 'all 0.3s ease',
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center'
                              }}
                              onMouseEnter={(e) => {
                                 e.currentTarget.style.transform = 'translateY(-10px)';
                                 e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
                              }}
                              onMouseLeave={(e) => {
                                 e.currentTarget.style.transform = 'translateY(0)';
                                 e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                              }}
                           >
                              <div style={{ 
                                 fontSize: '3rem', 
                                 marginBottom: '15px', 
                                 color: '#4a90e2' 
                              }}>
                                 {product.icon}
                              </div>
                              <h3 style={{ 
                                 fontSize: '1.5rem', 
                                 marginBottom: '10px', 
                                 fontWeight: 'bold' 
                              }}>
                                 {product.title}
                              </h3>
                              <p style={{ 
                                 textAlign: 'center', 
                                 marginBottom: '15px' 
                              }}>
                                 {product.description}
                              </p>
                              <div style={{ 
                                 display: 'flex', 
                                 alignItems: 'center', 
                                 color: '#4a90e2' 
                              }}>
                                 <span>Explore</span>
                                 <FaExternalLinkAlt style={{ marginLeft: '10px' }} />
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;