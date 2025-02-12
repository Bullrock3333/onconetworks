"use client"
import Image from "next/image";
import Link from "next/link";   
import { 
  Heart,
  Star,
  Shield,
  Stethoscope,
  Timer,
  Sparkles,
  Syringe,
  BadgePlus,
  Pill,
  Crown,
  Wallet,
  Users,
  Beaker
} from "lucide-react";
import { CSSProperties } from 'react';

interface ContentData {
   title_1: string;
   desc_1: JSX.Element; 
   social_icon: string[];
} 

const styles: Record<string, CSSProperties> = {
  section: {
    padding: '60px 0 250px',
    background: 'linear-gradient(to bottom, #0f172a, #1e293b)'
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem'
  },
  gradientBg: {
    background: 'linear-gradient(to right, #0ea5e9, #2563eb)',
    padding: '3rem',
    borderRadius: '1rem',
    boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#e2e8f0',
    textAlign: 'center' as const
  },
  description: {
    color: '#94a3b8',
    textAlign: 'center' as const,
    fontSize: '1.1rem',
    maxWidth: '800px',
    margin: '0 auto 2rem'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  gridItem: {
    padding: '2rem',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease'
  },
  benefitRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    padding: '1.5rem',
    borderRadius: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease'
  },
  iconCircle: {
    padding: '1rem',
    borderRadius: '50%',
    marginRight: '1rem',
    background: 'rgba(14, 165, 233, 0.2)',
    border: '1px solid rgba(14, 165, 233, 0.3)'
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
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '0.75rem',
    background: 'rgba(255, 255, 255, 0.05)',
    transition: 'transform 0.3s ease',
    color: '#e2e8f0'
  },
  featureIcon: {
    marginRight: '1rem',
    color: '#0ea5e9'
  },
  categoryTitle: {
    color: '#e2e8f0',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginTop: '1rem',
    textAlign: 'center' as const
  },
  categoryText: {
    color: '#94a3b8',
    marginTop: '0.5rem',
    textAlign: 'center' as const
  }
};

const NfcMarketplace = ({ single_blog }: { single_blog?: any }) => {
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
                                <Stethoscope style={{width: '8rem', height: '8rem', color: 'white'}} />
                              </div>
                           </div>
                           <h2 style={styles.title}>MediShark NFT Collection</h2>
                           <p style={styles.description}>
                             Dive into the world of medical innovation with our exclusive collection of 10,000 unique MediShark NFTs, where ocean meets medicine in a revolutionary digital experience.
                           </p>
                        </div>

                        <div className="col-lg-12" style={{paddingBottom: '30px'}}>
                           <h2 style={styles.title}>Rarity Categories</h2>
                           <div style={styles.gridContainer}>
                              <div style={styles.gridItem}>
                                <Crown style={{width: '5rem', height: '5rem', color: '#0ea5e9'}} />
                                <h3 style={styles.categoryTitle}>Specialist Sharks</h3>
                                <p style={styles.categoryText}>Elite tier (10%)</p>
                              </div>
                              <div style={styles.gridItem}>
                                <BadgePlus style={{width: '5rem', height: '5rem', color: '#0ea5e9'}} />
                                <h3 style={styles.categoryTitle}>Resident Sharks</h3>
                                <p style={styles.categoryText}>Advanced tier (30%)</p>
                              </div>
                              <div style={styles.gridItem}>
                                <Beaker style={{width: '5rem', height: '5rem', color: '#0ea5e9'}} />
                                <h3 style={styles.categoryTitle}>Intern Sharks</h3>
                                <p style={styles.categoryText}>Entry tier (60%)</p>
                              </div>
                           </div>
                        </div>

                        <div className="col-lg-12" style={{paddingBottom: '30px'}}>
                           <h2 style={styles.title}>Holder Benefits</h2>
                           <div style={styles.benefitRow}>
                              <div style={styles.iconCircle}>
                                <Syringe style={{width: '2rem', height: '2rem', color: '#0ea5e9'}} />
                              </div>
                              <p style={{color: '#e2e8f0'}}>Access to exclusive MediShark DAO for healthcare-related NFT initiatives</p>
                           </div>
                           <div style={styles.benefitRow}>
                              <div style={styles.iconCircle}>
                                <Pill style={{width: '2rem', height: '2rem', color: '#0ea5e9'}} />
                              </div>
                              <p style={{color: '#e2e8f0'}}>Priority whitelist for future medical-themed NFT collections</p>
                           </div>
                           <div style={styles.benefitRow}>
                              <div style={styles.iconCircle}>
                                <Heart style={{width: '2rem', height: '2rem', color: '#0ea5e9'}} />
                              </div>
                              <p style={{color: '#e2e8f0'}}>Portion of sales donated to ocean conservation and medical research</p>
                           </div>
                        </div>

                        <div className="col-lg-12" style={{paddingBottom: '30px'}}>
                           <h2 style={styles.title}>Collection Details</h2>
                           <ul style={styles.featureList}>
                              {[
                                {icon: <Timer />, text: 'Launching Q2 2025'},
                                {icon: <Sparkles />, text: 'Mint Price: TBA'},
                                {icon: <Shield />, text: 'Smart Contract Audited by Leading Firms'},
                                {icon: <Star />, text: '200+ Unique Medical Traits'},
                                {icon: <Wallet />, text: 'Secure Wallet Integration'},
                                {icon: <Users />, text: 'Community Governance Rights'}
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
