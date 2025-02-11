import Image from "next/image";
import Link from "next/link";   
import { 
  Shield,
  Wallet, 
  Rocket, 
  Zap, 
  Box, 
  Coins, 
  Upload,
  ShoppingBag,
  Gift,
  Search,
  Users
} from "lucide-react";

const styles = {
  section: {
    padding: '60px 0 250px'
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
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  featureIcon: {
    marginRight: '0.5rem',
    color: '#9333ea'
  }
};

const Blockchain = () => {
   return (
      <section style={styles.section}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="blog-details-wrap">
                     <div className="blog-details-content"> 
                        <div className="col-lg-12" style={{paddingBottom: '30px'}}>
                           <div style={styles.iconWrapper}>
                              <div style={styles.gradientBg}>
                                <Rocket style={{width: '8rem', height: '8rem', color: 'white'}} />
                              </div>
                           </div>
                           <h2 style={styles.title}>Welcome to OncoBlockchain 2.0</h2>
                           <p>A next-generation blockchain network designed for enhanced security, speed, and scalability. With OncoBlockchain 2.0, experience faster transactions, lower fees, and seamless smart contract integration.</p>
                        </div>
                        
                        <div className="col-lg-12" style={{paddingBottom: '30px'}}>
                           <h2 style={styles.title}>Key Features</h2>
                           <ul style={styles.featureList}>
                              {[
                                {icon: <Shield />, text: 'Advanced security layers for cyber protection'},
                                {icon: <Wallet />, text: 'Secure wallet integration and transaction processing'},
                                {icon: <Zap />, text: 'High-speed transactions with low fees'},
                                {icon: <Coins />, text: 'Decentralized finance and smart contract support'},
                                {icon: <Box />, text: 'Seamless cross-chain compatibility'}
                              ].map((feature, index) => (
                                <li key={index} style={styles.featureItem}>
                                  <span style={styles.featureIcon}>{feature.icon}</span>
                                  {feature.text}
                                </li>
                              ))}
                           </ul>
                        </div>

                        <div className="col-lg-12" style={{paddingBottom: '30px'}}>
                           <h2 style={styles.title}>How It Works</h2>
                           <ul style={styles.featureList}>
                              {[
                                {icon: <Upload />, text: 'Deploy smart contracts effortlessly'},
                                {icon: <ShoppingBag />, text: 'Trade assets securely on-chain'},
                                {icon: <Gift />, text: 'Earn staking rewards and incentives'},
                                {icon: <Search />, text: 'Transparent and auditable transactions'},
                                {icon: <Users />, text: 'Community-driven governance model'}
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
   )
}

export default Blockchain;
