import Image from "next/image";
import Link from "next/link";   
import { 
  Palette, 
  Wallet, 
  DollarSign, 
  Zap, 
  Box, 
  Coins, 
  Upload,
  ShoppingBag,
  Gift,
  Paintbrush,
  Gamepad,
  Crown,
  Shield,
  Search,
  Rocket,
  Users
} from "lucide-react";

interface ContentData {
   title_1: string;
   desc_1: JSX.Element; 
   social_icon: string[];
} 

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
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  gridItem: {
    padding: '2rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
  benefitRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  iconCircle: {
    padding: '1rem',
    borderRadius: '50%',
    marginRight: '1rem'
  },
  greenBg: {
    backgroundColor: '#dcfce7'
  },
  yellowBg: {
    backgroundColor: '#fef9c3'
  },
  twoColGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    marginBottom: '1.5rem'
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
  },
  centerContent: {
    textAlign: 'center'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    color: 'white',
    cursor: 'pointer'
  },
  blueButton: {
    backgroundColor: '#3b82f6'
  },
  greenButton: {
    backgroundColor: '#22c55e'
  }
};
 
const NfcMarketplace = ({ single_blog }: any) => {
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
                                <Palette style={{width: '8rem', height: '8rem', color: 'white'}} />
                              </div>
                           </div>
                           <h2 style={styles.title}>Welcome to ONCO NFT Marketplace</h2>
                           <p>Discover an exclusive decentralized NFT marketplace where creators and collectors unite to trade unique, utility-based NFTs. Our platform revolutionizes digital ownership through blockchain technology, ensuring transparency, fair royalties, and minimal transaction fees.</p>
                        </div>

                        <div className="col-lg-12" style={{paddingBottom: '30px'}}>
                           <h2 style={styles.title}>Featured Collections</h2>
                           <div style={styles.gridContainer}>
                              <div style={{...styles.gridItem, ...styles.purpleBg}}>
                                <Paintbrush style={{width: '5rem', height: '5rem', color: '#9333ea'}} />
                              </div>
                              <div style={{...styles.gridItem, ...styles.blueBg}}>
                                <Gamepad style={{width: '5rem', height: '5rem', color: '#2563eb'}} />
                              </div>
                           </div>
                           <p>Explore our curated collections featuring stunning digital art, metaverse assets, and exclusive NFTs from renowned creators worldwide.</p>
                        </div>

                        <div className="col-lg-12" style={{paddingBottom: '30px'}}>
                           <h2 style={styles.title}>Creator Benefits</h2>
                           <div style={styles.benefitRow}>
                              <div style={{...styles.iconCircle, ...styles.greenBg}}>
                                <DollarSign style={{width: '2rem', height: '2rem', color: '#16a34a'}} />
                              </div>
                              <p>Earn continuous royalties on secondary sales and participate in our creator rewards program.</p>
                           </div>
                           <div style={styles.benefitRow}>
                              <div style={{...styles.iconCircle, ...styles.yellowBg}}>
                                <Zap style={{width: '2rem', height: '2rem', color: '#ca8a04'}} />
                              </div>
                              <p>Enjoy gas-free minting as a verified creator, reducing barriers to entry.</p>
                           </div>
                           <div style={styles.benefitRow}>
                              <div style={{...styles.iconCircle, ...styles.blueBg}}>
                                <Gift style={{width: '2rem', height: '2rem', color: '#2563eb'}} />
                              </div>
                              <p>Stake your NFTs to earn passive income through our innovative staking program.</p>
                           </div>
                        </div>

                        <div className="col-lg-12" style={{paddingBottom: '30px'}}>
                           <h2 style={styles.title}>How It Works</h2>
                           <div style={styles.twoColGrid}>
                              <div>
                                <div style={{...styles.gridItem, ...styles.purpleBg, marginBottom: '1rem'}}>
                                  <Upload style={{width: '4rem', height: '4rem', color: '#9333ea'}} />
                                </div>
                                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Create & Mint</h3>
                                <p>Upload your artwork, set royalties, and mint your NFTs with ease.</p>
                              </div>
                              <div>
                                <div style={{...styles.gridItem, ...styles.blueBg, marginBottom: '1rem'}}>
                                  <ShoppingBag style={{width: '4rem', height: '4rem', color: '#2563eb'}} />
                                </div>
                                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Trade & Earn</h3>
                                <p>Buy, sell, and trade NFTs while earning rewards through staking.</p>
                              </div>
                           </div>
                        </div>

                        <div className="col-lg-12" style={{paddingBottom: '30px'}}>
                           <h2 style={styles.title}>Marketplace Features</h2>
                           <ul style={styles.featureList}>
                              {[
                                {icon: <Shield />, text: 'Transparent pricing and fair royalty distribution'},
                                {icon: <Wallet />, text: 'Secure wallet integration and transaction processing'},
                                {icon: <Search />, text: 'Advanced search and filtering options'},
                                {icon: <Box />, text: 'Real-time bidding and auction system'},
                                {icon: <Users />, text: 'Community governance and voting rights'}
                              ].map((feature, index) => (
                                <li key={index} style={styles.featureItem}>
                                  <span style={styles.featureIcon}>{feature.icon}</span>
                                  {feature.text}
                                </li>
                              ))}
                           </ul>
                        </div>

                        <br></br><br></br>
                     </div>
                  </div>
               </div> 
            </div>
         </div>
      </section>
   )
}

export default NfcMarketplace;