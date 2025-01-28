import Image from "next/image";
import Link from "next/link";   

interface ContentData {
   title_1: string;
   desc_1: JSX.Element; 
   social_icon: string[];
} 
 
const Disclaimer = ({ single_blog }: any) => {
   return (
      <section className="blog-details-area pt-60 pb-250">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="blog-details-wrap">
                     <div className="blog-details-content"> 
                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Disclaimer</h2>
                           <p>Welcome to OncoNetwork! By accessing or using our website (www.onconetwork.xyz) and services, you agree to comply with the terms outlined in this Disclaimer. This page aims to clearly explain the legal aspects, limitations, and responsibilities associated with OncoNetwork’s services.</p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">1. General Information</h2>
                           <p>The content provided on the OncoNetwork website is for informational and educational purposes only. We do not offer medical, financial, or investment advice. While we strive to ensure accuracy, the information on this platform may not always reflect the most current developments.</p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">2. No Medical Advice</h2>
                           <p>OncoNetwork is not a healthcare provider and does not offer medical diagnosis, treatment, or advice.<br />
                              The platform supports decentralized funding and research collaboration but is not a substitute for professional medical consultation.<br />
                              Always consult licensed medical professionals for your healthcare needs.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">3. No Investment Advice</h2>
                           <p>The information provided on this website, including details about presales, tokens, and crowdfunding, is not intended to constitute financial or investment advice.<br />
                              Cryptocurrency investments are inherently risky. Please perform thorough research and seek professional advice before participating in any financial activity.<br />
                              Past performance is not indicative of future results.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">4. Blockchain Transparency</h2>
                           <p>Due to the decentralized nature of blockchain, all transactions conducted via OncoNetwork are permanent and transparent on public ledgers.<br />
                              We are not responsible for losses or errors arising from your use of third-party wallets, blockchain interactions, or transactions.<br />
                              Double-check all wallet addresses, transactions, and contributions before submitting them.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">5. User Responsibilities</h2>
                           <p>By using OncoNetwork, you agree to:
                              <br />● Use the platform responsibly and in compliance with applicable laws.
                              <br />● Protect your account credentials, wallet information, and any sensitive data.
                              <br />● Understand the risks associated with cryptocurrency, including volatility, hacking, and loss of access to funds.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">6. Third-Party Services</h2>
                           <p>OncoNetwork may feature links to third-party platforms or services for transactions, partnerships, or other purposes.<br />
                              We do not endorse or assume responsibility for the accuracy, reliability, or security of third-party content or services.<br />
                              Any interactions with third-party services are solely at your discretion and risk.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">7. Limitation of Liability</h2>
                           <p>To the fullest extent permitted by law:
                              <br />● OncoNetwork is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our platform or services.
                              <br />● We are not responsible for losses due to market volatility, smart contract errors, or unauthorized access to your wallet.
                              <br />● Use of OncoNetwork is provided on an “as-is” basis without warranties of any kind, either express or implied.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">8. Regulatory Compliance</h2>
                           <p>OncoNetwork operates in compliance with relevant laws and regulations. However:
                              <br />● Users are responsible for ensuring compliance with local laws, including those related to cryptocurrencies, blockchain, and healthcare.
                              <br />● Certain jurisdictions may restrict or prohibit the use of blockchain-based services. Please verify legal requirements in your region before using our platform.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">9. Forward-Looking Statements</h2>
                           <p>Certain information on this website may include projections or forward-looking statements regarding OncoNetwork’s plans, goals, or anticipated performance.<br />
                              These statements are based on assumptions and subject to risks and uncertainties. Actual outcomes may differ significantly.<br />
                              OncoNetwork does not guarantee any specific results or achievements.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">10. Intellectual Property</h2>
                           <p>All content on this website, including text, graphics, logos, and trademarks, is the property of OncoNetwork or its licensors.<br />
                              Unauthorized use, reproduction, or distribution of any content is prohibited.<br />
                              Users may download or print content solely for personal and non-commercial use.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">11. Amendments to This Disclaimer</h2>
                           <p>OncoNetwork reserves the right to update or modify this Disclaimer at any time without prior notice.<br />
                              Continued use of the platform after changes are made constitutes acceptance of the updated Disclaimer.<br />
                              Please review this page periodically for updates.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">12. Contact Information</h2>
                           <p>For any questions or concerns regarding this Disclaimer, please contact us:<br />
                              Website: www.onconetwork.xyz
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Acknowledgment</h2>
                           <p>By accessing or using OncoNetwork’s services, you acknowledge that you have read, understood, and agreed to this Disclaimer.<br />
                              Your participation in the OncoNetwork platform signifies your acceptance of the risks and limitations associated with blockchain-based services.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <p>This Disclaimer is designed to protect both OncoNetwork and its users while promoting transparency and informed decision-making. Thank you for being part of our mission to revolutionize healthcare through blockchain and decentralized science! 🌟</p>
                        </div> 

                     </div>
                  </div>
               </div> 
            </div>
         </div>
      </section>
   )
}

export default Disclaimer;
