"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaNetworkWired, 
  FaGamepad, 
  FaExternalLinkAlt, 
  FaExchangeAlt, 
  FaCube,
  FaRocket,
  FaChevronDown
} from "react-icons/fa";
import { motion } from "framer-motion";
import hero_thumb from "@/assets/img/update/hero/oncotransparent.gif";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('products-section');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  const ourProducts = [
    {
      title: "OncoBlockchain",
      description: "Our own blockchain network built with cutting-edge technology for secure and transparent transactions.",
      icon: <FaNetworkWired />,
      link: "/blockchain",
      color: "#4361ee"
    },
    {
      title: "OncoExchange",
      description: "A centralized exchange platform with advanced trading tools and seamless crypto integration.",
      icon: <FaExchangeAlt />,
      link: "/oncoexchangepro",
      color: "#3a86ff"
    },
    {
      title: "NFT Collection",
      description: "Exclusive limited edition NFT collection with unique benefits for our community members.",
      icon: <FaCube />,
      link: "/nft-collection",
      color: "#4cc9f0"
    }
  ];

  const exchanges = [
    { url: "https://dexscreener.com", logo: "https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20232343/dex-screener-logo-png_seeklogo-527276.png", alt: "DEX Scanner" },
    { url: "https://bitmart.com", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn9GcSeWCKDbc4qvrftdgzYp4-FC-8nXgGGzozSbA&s", alt: "BitMart" },
    { url: "https://okx.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/OKX_Logo.svg/2048px-OKX_Logo.svg.png", alt: "OKEx" },
    { url: "https://coinbase.com", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbngGQF6hcTTU1A8Ymi2VldXqCsPkBu_ltAhIKiRg&s", alt: "Coinbase" },
    { url: "https://crypto.com", logo: "https://play-lh.googleusercontent.com/OhMXdCWVlKDPK-sMeMyd2PjwvFQ8d1gt5xLYtPVSyvLWxalI6bJpQz2sqGIZDIDXM4Y", alt: "Crypto.com" },
    { url: "https://bingx.com", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGtmJ6mmLD4WA/company-logo_200_200/company-logo_200_200/0/1696493822943?e=2147483647&v=beta&t=VKQ2KQ9b_JEV0weaD_BrG8gpAry3z5sR6awgnCVaKEE", alt: "BingX" }
  ];

  const liveProducts = [
    {
      title: "Onco Cure",
      description: "An innovative fundraising platform connecting donors directly with cancer patients in need.",
      icon: <FaNetworkWired />,
      link: "https://oncocure.org",
      color: "#f72585"
    },
    {
      title: "Tap Tap Game",
      description: "Exciting play-to-earn game on Telegram with tournaments and daily rewards.",
      icon: <FaGamepad />,
      link: "https://t.me/OncoNetworkBot/SharkArenabyOncoNetwork",
      color: "#7209b7"
    }
  ];

  return (
    <div className="hero-wrapper hero-1">
      <div className="container">
        <div className="hero-bg-gradient"></div>
        <div className="animated-bg">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
        
        <div className="ripple-shape">
          <span className="ripple-1"></span>
          <span className="ripple-2"></span>
          <span className="ripple-3"></span>
          <span className="ripple-4"></span>
          <span className="ripple-5"></span>
        </div>

        <motion.div 
          className="hero-style1"
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="row flex-column-reverse flex-lg-row-reverse align-items-center">
            <motion.div 
              className="col-lg-5 col-12"
              initial={{ x: 100, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="hero-thumb-container">
                <div className="hero-glow"></div>
                <div className="hero-thumb alltuchtopdown">
                  <Image 
                    src={hero_thumb} 
                    alt="Onco Network" 
                    priority 
                    className="animated-image"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="floating-icons">
                  <div className="floating-icon icon-1"><FaCube /></div>
                  <div className="floating-icon icon-2"><FaNetworkWired /></div>
                  <div className="floating-icon icon-3"><FaExchangeAlt /></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-lg-7 col-12 hero-content"
              initial={{ x: -100, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="hero-subtitle">Welcome to Onco Network</span>
                <h1 className="hero-title">
                  <span className="highlight">Next-Gen</span> Blockchain Gaming <br />
                  <span className="gradient-text">Starts Here!</span>
                </h1>
                <p className="hero-description">
                  Dive into the world of crypto gaming with our revolutionary ecosystem – 
                  <span className="text-highlight">simple, fun, and rewarding!</span> Join the future of blockchain entertainment.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">10K+</span>
                    <span className="stat-label">Community Members</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Live Products</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3</span>
                    <span className="stat-label">Upcoming Releases</span>
                  </div>
                </div>
                <div className="btn-wrap">
                  <Link target="_blank" href="/assets/onconetwork.pdf" className="btn btn-paper">
                    <span className="btn-text">White Paper</span>
                    <span className="btn-icon"><FaExternalLinkAlt /></span>
                  </Link>
                  <Link target="_blank" href="https://presale.onconetwork.xyz/" className="btn btn-presale">
                    <span className="btn-text">JOIN PRESALE</span>
                    <span className="btn-icon"><FaRocket /></span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="scroll-indicator" onClick={scrollToContent}>
            <span className="scroll-text">Discover More</span>
            <FaChevronDown className="scroll-icon" />
          </div>
        </motion.div>

        <div id="products-section" className="section-padding animate-on-scroll exchanges-section">
          <h2 className="section-title">
            <span className="title-accent"></span>
            Soon Listing on These Exchanges
            <span className="title-line"></span>
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

        <div className="section-padding animate-on-scroll">
          <h2 className="section-title">
            <span className="title-accent"></span>
            Live Products
            <span className="title-line"></span>
          </h2>
          <div className="products-row">
            {liveProducts.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="product-card-link"
                target="_blank"
              >
                <div className="product-card" style={{"--product-color": product.color}}>
                  <div className="product-card-glow"></div>
                  <div className="product-icon" style={{backgroundColor: product.color}}>{product.icon}</div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-explore">
                    <span>Explore Now</span>
                    <FaExternalLinkAlt className="explore-icon" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="section-padding animate-on-scroll">
          <h2 className="section-title">
            <span className="title-accent"></span>
            Our Products
            <span className="title-line"></span>
          </h2>
          <div className="products-row">
            {ourProducts.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="product-card-link"
              >
                <div className="product-card" style={{"--product-color": product.color}}>
                  <div className="product-card-glow"></div>
                  <div className="product-icon" style={{backgroundColor: product.color}}>{product.icon}</div>
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
        .hero-wrapper {
          position: relative;
          overflow: hidden;
          color: #fff;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          min-height: 100vh;
        }
        
        .container {
          position: relative;
          z-index: 2;
          padding: 0 15px;
        }
        
        .hero-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(75, 0, 130, 0.5), rgba(0, 0, 0, 0.8));
          z-index: -1;
        }
        
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -2;
        }
        
        .cube {
          position: absolute;
          top: 80vh;
          left: 45vw;
          width: 8px;
          height: 8px;
          border: 1px solid rgba(127, 255, 255, 0.25);
          transform-origin: top left;
          transform: scale(0) rotate(0deg) translate(-50%, -50%);
          animation: cube 12s ease-in forwards infinite;
          border-radius: 2px;
        }
        
        .cube:nth-child(2) { animation-delay: 2s; left: 25vw; border-color: rgba(127, 150, 255, 0.25); }
        .cube:nth-child(3) { animation-delay: 4s; left: 75vw; border-color: rgba(255, 127, 255, 0.25); }
        .cube:nth-child(4) { animation-delay: 6s; left: 90vw; border-color: rgba(255, 255, 127, 0.25); }
        .cube:nth-child(5) { animation-delay: 8s; left: 10vw; border-color: rgba(127, 255, 127, 0.25); }
        
        @keyframes cube {
          from { transform: scale(0) rotate(0deg) translate(-50%, -50%); opacity: 1; }
          to { transform: scale(15) rotate(960deg) translate(-50%, -50%); opacity: 0; }
        }
        
        .ripple-shape span {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          pointer-events: none;
        }
        
        .ripple-1 { width: 400px; height: 400px; top: -20%; right: -10%; animation: ripple 12s linear infinite; }
        .ripple-2 { width: 300px; height: 300px; bottom: -10%; left: -10%; animation: ripple 12s linear 3s infinite; }
        .ripple-3 { width: 200px; height: 200px; top: 30%; right: 20%; animation: ripple 12s linear 6s infinite; }
        .ripple-4 { width: 150px; height: 150px; bottom: 30%; left: 30%; animation: ripple 12s linear 9s infinite; }
        .ripple-5 { width: 80px; height: 80px; top: 10%; left: 10%; animation: ripple 12s linear 1.5s infinite; }
        
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(0.8); opacity: 0.3; }
        }
        
        .hero-style1 {
          padding: 80px 0 40px;
          position: relative;
        }
        
        .hero-thumb-container {
          position: relative;
          margin: 0 auto 20px;
          text-align: center;
          width: 100%;
          max-width: 300px;
        }
        
        .hero-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(66, 138, 255, 0.3) 0%, rgba(66, 138, 255, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
        }
        
        .animated-image {
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          animation: pulse 3s ease-in-out infinite;
          max-width: 100%;
          height: auto;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); }
          50% { transform: scale(1.03); box-shadow: 0 12px 30px rgba(66, 138, 255, 0.4); }
          100% { transform: scale(1); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); }
        }
        
        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .floating-icon {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          border-radius: 50%;
          color: #fff;
          font-size: 18px;
        }
        
        .icon-1 { top: 15%; right: 5%; animation: float 6s ease-in-out infinite; }
        .icon-2 { bottom: 25%; left: 5%; animation: float 7s ease-in-out 1s infinite; }
        .icon-3 { top: 60%; right: 10%; animation: float 5s ease-in-out 0.5s infinite; }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        
        .hero-content {
          padding: 20px 0;
          text-align: center;
        }
        
        .hero-subtitle {
          display: inline-block;
          background: linear-gradient(90deg, #4cc9f0, #4361ee);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
          position: relative;
          padding-left: 30px;
        }
        
        .hero-subtitle:before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 20px;
          height: 2px;
          background: linear-gradient(90deg, #4cc9f0, #4361ee);
          transform: translateY(-50%);
        }
        
        .hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 15px;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .highlight {
          position: relative;
          display: inline-block;
          z-index: 1;
          color: #fff;
        }
        
        .highlight:after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 0;
          width: 100%;
          height: 8px;
          background: linear-gradient(90deg, #f72585, #7209b7);
          z-index: -1;
          opacity: 0.6;
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #f72585, #7209b7, #3a86ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientAnimation 8s linear infinite;
          background-size: 200% auto;
        }
        
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .hero-description {
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 20px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 100%;
        }
        
        .text-highlight {
          font-weight: 600;
          color: #4cc9f0;
        }
        
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
        }
        
        .stat-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
        }
        
        .btn-wrap {
        margin-left: -80px;
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        
        .btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          text-decoration: none;
          width: 100%;
          max-width: 200px;
        }
        
        .btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(-100%) rotate(45deg);
          transition: all 0.6s ease-out;
        }
        
        .btn:hover:before {
          transform: translateX(100%) rotate(45deg);
        }
        
        .btn-text {
          z-index: 1;
          margin-right: 8px;
        }
        
        .btn-icon {
          z-index: 1;
          font-size: 0.8rem;
        }
        
        .btn-paper {
          margin-left: -80px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn-paper:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
        
        .btn-presale {
          background: linear-gradient(45deg, #f72585, #7209b7);
          color: #fff;
          box-shadow: 0 4px 12px rgba(247, 37, 133, 0.4);
        }
        
        .btn-presale:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(247, 37, 133, 0.6);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          animation: bounce 2s infinite;
        }
        
        .scroll-text {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .scroll-icon {
          font-size: 1rem;
          color: #fff;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        
        .section-padding {
          padding: 60px 0;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .section-padding.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 40px;
          text-align: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .title-accent {
          display: block;
          width: 40px;
          height: 4px;
          margin-right: 10px;
          background: linear-gradient(90deg, #f72585, #7209b7);
          border-radius: 4px;
        }
        
        .title-line {
          display: block;
          width: 40px;
          height: 4px;
          margin-left: 10px;
          background: linear-gradient(90deg, #7209b7, #3a86ff);
          border-radius: 4px;
        }
        
        .exchanges-slider {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 15px 0;
        }
        
        .slider-content {
          display: inline-flex;
          animation: slide 20s linear infinite;
          animation-fill-mode: forwards;
        }
        
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .exchange-item {
          flex-shrink: 0;
          width: 150px;
          padding: 15px;
          text-align: center;
        }
        
        .exchange-link {
          display: inline-block;
          transition: all 0.3s ease;
          filter: grayscale(100%);
          opacity: 0.7;
        }
        
        .exchange-link:hover {
          transform: scale(1.1);
          filter: grayscale(0%);
          opacity: 1;
        }
        
        .exchange-logo {
          width: 100px;
          height: 50px;
          object-fit: contain;
          border-radius: 8px;
          margin: 0 auto;
        }
        
        .products-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        
        .product-card-link {
          text-decoration: none;
          color: inherit;
          width: 100%;
          max-width: 350px;
          perspective: 1000px;
        }
        
        .product-card {
          background: rgba(20, 20, 30, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 25px;
          color: #fff;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          transition: all 0.5s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          height: 100%;
        }
        
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          border-color: var(--product-color, #4a90e2);
        }
        
        .product-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 0%, var(--product-color, #4a90e2), transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
        }
        
        .product-card:hover .product-card-glow {
          opacity: 0.15;
        }
        
        .product-icon {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: #fff;
          background-color: var(--product-color, #4a90e2);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        
        .product-card:hover .product-icon {
          transform: scale(1.1);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.4);
        }
        
        .product-title {
          font-size: 1.3rem;
          margin-bottom: 12px;
          font-weight: bold;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .product-description {
          text-align: center;
          margin-bottom: 15px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          line-height: 1.5;
          position: relative;
          z-index: 1;
        }
        
        .product-explore {
          display: flex;
          align-items: center;
          color: var(--product-color, #4a90e2);
          font-weight: 600;
          margin-top: auto;
          padding-top: 15px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        
        .explore-icon {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        
        .product-card:hover .product-explore {
          transform: translateX(5px);
        }
        
        .product-card:hover .explore-icon {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (min-width: 992px) {
          .hero-style1 {
            padding: 120px 0 60px;
          }
          
          .hero-thumb-container {
            margin: 0;
            max-width: 350px;
          }
          
          .hero-content {
            text-align: left;
            padding-right: 30px;
          }
          
          .hero-title {
            font-size: 3.5rem;
          }
          
          .hero-stats {
            justify-content: flex-start;
          }
          
          .btn {
            width: auto;
          }
          
          .products-row {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .animated-image {
            width: 300px;
            height: 300px;
          }
        }
        
        @media (max-width: 991px) {
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-description {
            font-size: 0.95rem;
          }
          
          .stat-number {
            font-size: 1.6rem;
          }
        }
        
        @media (max-width: 767px) {
          .hero-style1 {
            padding: 60px 0 30px;
          }
          
          .hero-title {
            font-size: 1.8rem;
          }
          
          .hero-description {
            font-size: 0.9rem;
          }
          
          .hero-subtitle {
            font-size: 0.9rem;
          }
          
          .stat-number {
            font-size: 1.4rem;
          }
          
          .section-padding {
            padding: 40px 0;
          }
          
          .section-title {
            font-size: 1.5rem;
            margin-bottom: 30px;
          }
          
          .exchange-item {
            width: 120px;
            padding: 10px;
          }
          
          .exchange-logo {
            width: 80px;
            height: 40px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.6rem;
          }
          
          .hero-thumb-container {
            max-width: 200px;
          }
          
          .floating-icon {
            width: 30px;
            height: 30px;
            font-size: 16px;
          }
          
          .btn {
            padding: 10px 20px;
            font-size: 0.8rem;
          }
          
          .product-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
          
          .product-title {
            font-size: 1.2rem;
          }
          
          .product-description {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;