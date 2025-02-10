"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaNetworkWired, 
  FaGamepad, 
  FaExternalLinkAlt, 
  FaExchangeAlt,
  FaCube
} from "react-icons/fa";

import hero_thumb from "@/assets/img/update/hero/onconetwork-banner.gif";

const Hero = () => {
  const ourProducts = [
    { 
      title: "OncoBlockchain", 
      description: "Our own blockchain network for secure transactions.", 
      icon: <FaNetworkWired />, 
      link: "#"
    },
    { 
      title: "OncoExchange", 
      description: "A centralized exchange for seamless crypto trading.", 
      icon: <FaExchangeAlt />, 
      link: "#"
    },
    { 
      title: "NFT Collection", 
      description: "Exclusive NFT collection for our community.", 
      icon: <FaCube />, 
      link: "#"
    }
  ];

  const exchanges = [
    { url: "https://dexscreener.com", logo: "https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20232343/dex-screener-logo-png_seeklogo-527276.png", alt: "DEX Scanner" },
    { url: "https://bitmart.com", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWCKDbc4qvrftdgzYp4-FC-8nXgGGzozSbA&s", alt: "BitMart" },
    { url: "https://okx.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/OKX_Logo.svg/2048px-OKX_Logo.svg.png", alt: "OKEx" },
    { url: "https://coinbase.com", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6hcTTU1A8Ymi2VldXqCsPkBu_ltAhIKiRg&s", alt: "Coinbase" },
    { url: "https://crypto.com", logo: "https://play-lh.googleusercontent.com/OhMXdCWVlKDPK-sMeMyd2PjwvFQ8d1gt5xLYtPVSyvLWxalI6bJpQz2sqGIZDIDXM4Y", alt: "Crypto.com" },
    { url: "https://bingx.com", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGtmJ6mmLD4WA/company-logo_200_200/company-logo_200_200/0/1696493822943?e=2147483647&v=beta&t=VKQ2KQ9b_JEV0weaD_BrG8gpAry3z5sR6awgnCVaKEE", alt: "BingX" }
  ];

  const liveProducts = [
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
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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

        {/* Hero Main Section */}
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

        {/* Presale Button Section */}
        <div className="iframe-container">
          <div className="btn-wrap">
            <Link target="_blank" href="https://presale.onconetwork.xyz/" className="btn btn-two">
              JOIN THE PRESALE
            </Link>
          </div>
        </div>

        {/* Exchanges Section */}
        <div className="section-padding">
          <h2 className="section-title">
            Soon Listing on These Exchanges
          </h2>
          <div className="exchanges-slider">
            <div className="slider-content">
              {[...exchanges, ...exchanges].map((exchange, index) => (
                <div key={index} className="exchange-item">
                  <a 
                    href={exchange.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="exchange-link"
                  >
                    <img 
                      src={exchange.logo} 
                      alt={exchange.alt} 
                      className="exchange-logo"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Products Section */}
        <div className="section-padding">
          <h2 className="section-title">
            Live Products
          </h2>
          <div className="products-grid">
            {liveProducts.map((product, index) => (
              <Link 
                key={index} 
                href={product.link}
                className="product-card-link"
              >
                <div className="product-card">
                  <div className="product-icon">{product.icon}</div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-explore">
                    <span>Explore</span>
                    <FaExternalLinkAlt className="explore-icon" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Our Products Section */}
        <div className="section-padding">
          <h2 className="section-title">
            Our Products
          </h2>
          <div className="products-grid">
            {ourProducts.map((product, index) => (
              <Link 
                key={index} 
                href={product.link}
                className="product-card-link"
              >
                <div className="product-card">
                  <div className="product-icon">{product.icon}</div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-explore">
                    <span>Explore</span>
                    <FaExternalLinkAlt className="explore-icon" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-padding {
          padding: 60px 0;
          position: relative;
        }

        .section-title {
          font-size: 24px;
          color: #f0f0f0;
          margin-bottom: 40px;
          letter-spacing: 2px;
          text-align: center;
        }

        .products-grid {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .product-card-link {
          text-decoration: none;
          color: inherit;
          width: 300px;
        }

        .product-card {
          background-color: #242424;
          border-radius: 15px;
          padding: 25px;
          color: #fff;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          transform: translateY(0);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
        }

        .product-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          color: #4a90e2;
        }

        .product-title {
          font-size: 1.5rem;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .product-description {
          text-align: center;
          margin-bottom: 15px;
        }

        .product-explore {
          display: flex;
          align-items: center;
          color: #4a90e2;
        }

        .explore-icon {
          margin-left: 10px;
        }

        .exchanges-slider {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .slider-content {
          display: inline-flex;
          animation: slide 15s linear infinite;
          animation-fill-mode: forwards;
        }

        .exchange-item {
          flex-shrink: 0;
          width: 250px;
          padding: 20px;
          text-align: center;
        }

        .exchange-link {
          display: inline-block;
          transition: transform 0.3s;
        }

        .exchange-link:hover {
          transform: scale(1.1);
        }

        .exchange-logo {
          width: 150px;
          height: auto;
          border-radius: 10px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Hero;
