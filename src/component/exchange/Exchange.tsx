"use client";
import Image from "next/image";
import { Rocket, DollarSign, Shield, Wallet, Upload, ShoppingBag, Coins, Zap, Crown } from "lucide-react";

const styles = {
  section: {
    padding: '60px 0 100px',
    backgroundColor: '#1a202c', // Dark background
    color: 'white', // White text for contrast
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem'
  },
  gradientBg: {
    background: 'linear-gradient(to right, #9333ea, #2563eb)',
    padding: '3rem',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#fff'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    marginBottom: '2rem'
  },
  gridItem: {
    padding: '2.5rem',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  purpleBg: {
    backgroundColor: '#f3e8ff'
  },
  blueBg: {
    backgroundColor: '#dbeafe'
  },
  pinkBg: {
    backgroundColor: '#fce7f3'
  },
  twoColGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    fontSize: '1rem',
    color: '#fff'
  },
  featureIcon: {
    marginRight: '1rem',
    color: '#9333ea',
    fontSize: '1.5rem'
  },
  image: {
    borderRadius: '8px',
    width: '100%',
    height: 'auto'
  }
};

const OncoExchangePro = () => {
  return (
    <section style={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-wrap">
              <div className="content-section">
                {/* Top Image */}
                <div className="col-lg-12" style={{ paddingBottom: '30px' }}>
                  <Image
                    src="https://www.techmagic.co/blog/content/images/2022/04/cover-Cryptocurrency-Exchange-1.png"
                    width={1200} // Set the width for better responsiveness
                    height={600} // Set the height for better responsiveness
                    alt="Cryptocurrency Exchange"
                    style={styles.image} // Ensures the image is responsive
                  />
                </div>

                <div className="col-lg-12" style={{ paddingBottom: '30px' }}>
                  <div style={styles.iconWrapper}>
                    <div style={styles.gradientBg}>
                      <Rocket style={{ width: '8rem', height: '8rem', color: 'white' }} />
                    </div>
                  </div>
                  <h2 style={styles.title}>OncoExchange Pro</h2>
                  <p>A powerful centralized and decentralized hybrid exchange that bridges the gap between traditional crypto trading and Web3 innovation. OncoExchange Pro will introduce AI-driven trade analytics, staking options, and real-time market insights, ensuring an intuitive trading experience for professionals and beginners alike.</p>
                </div>

                <div className="col-lg-12" style={{ paddingBottom: '30px' }}>
                  <h2 style={styles.title}>Key Enhancements</h2>
                  <div style={styles.gridContainer}>
                    <div style={{ ...styles.gridItem, ...styles.purpleBg }}>
                      <DollarSign style={{ width: '5rem', height: '5rem', color: '#9333ea' }} />
                      <h3>AI-Powered Risk Assessment</h3>
                      <p>Ensure secure trading with AI-driven analytics.</p>
                    </div>
                    <div style={{ ...styles.gridItem, ...styles.blueBg }}>
                      <Shield style={{ width: '5rem', height: '5rem', color: '#2563eb' }} />
                      <h3>Multi-layer Security</h3>
                      <p>Protect your assets with advanced security protocols.</p>
                    </div>
                    <div style={{ ...styles.gridItem, ...styles.pinkBg }}>
                      <Wallet style={{ width: '5rem', height: '5rem', color: '#f72585' }} />
                      <h3>Seamless Fiat-to-Crypto Onboarding</h3>
                      <p>Easy onboarding for all users.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12" style={{ paddingBottom: '30px' }}>
                  <h2 style={styles.title}>How It Works</h2>
                  <div style={styles.twoColGrid}>
                    <div>
                      <div style={{ ...styles.gridItem, ...styles.purpleBg, marginBottom: '1rem' }}>
                        <Upload style={{ width: '4rem', height: '4rem', color: '#9333ea' }} />
                      </div>
                      <h3>Create & Trade</h3>
                      <p>Use AI insights to make informed trades.</p>
                    </div>
                    <div>
                      <div style={{ ...styles.gridItem, ...styles.blueBg, marginBottom: '1rem' }}>
                        <ShoppingBag style={{ width: '4rem', height: '4rem', color: '#2563eb' }} />
                      </div>
                      <h3>Track & Optimize</h3>
                      <p>Monitor your portfolio with real-time data and analytics.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12" style={{ paddingBottom: '30px' }}>
                  <h2 style={styles.title}>Additional Features</h2>
                  <ul style={styles.featureList}>
                    {[
                      { icon: <Coins />, text: 'Real-time market insights and analytics' },
                      { icon: <Zap />, text: 'AI-driven trade optimization' },
                      { icon: <Crown />, text: 'Exclusive professional tools for advanced traders' }
                    ].map((feature, index) => (
                      <li key={index} style={styles.featureItem}>
                        <span style={styles.featureIcon}>{feature.icon}</span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OncoExchangePro;
