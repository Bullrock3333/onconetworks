import Image from "next/image";
import Link from "next/link";   

const Policy = ({ single_blog }: any) => {
   return (
      <section className="blog-details-area pt-60 pb-250">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="blog-details-wrap">
                     <div className="blog-details-content"> 
                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Privacy Policy for OncoNetwork</h2>
                           <p>At OncoNetwork, we value and prioritize the privacy and security of our users' data. This Privacy Policy outlines how we collect, store, use, and protect your information when you interact with our website (<a href="https://onconetwork.xyz">www.onconetwork.xyz</a>), our blockchain-based services, and related platforms. By using our services, you agree to the terms outlined in this policy.</p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h3>1. Information We Collect</h3>
                           <p>We collect the following types of information to provide and improve our services:</p>
                           <h3>1.1 Personal Information</h3>
                           <p>
                              ● Name, email address, and contact information when you sign up for newsletters, accounts, or participate in airdrops and presales.<br />
                              ● Wallet addresses for transactions and rewards.<br />
                              ● Social media usernames if you engage with our promotional campaigns.
                           </p>
                           <h3>1.2 Non-Personal Information</h3>
                           <p>
                              ● Browser type, device information, and operating system.<br />
                              ● IP address and geolocation data (anonymized).<br />
                              ● Behavioral data such as interactions with the website (e.g., page visits, clicks).
                           </p>
                           <h3>1.3 Blockchain Data</h3>
                           <p>
                              ● Due to the nature of blockchain technology, your transactions and wallet addresses are recorded on a decentralized ledger.<br />
                              ● While this data is publicly accessible, OncoNetwork does not link this information to your personal identity unless you provide it voluntarily.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">2. How We Use Your Information</h2>
                           <p>
                              ● Facilitate access to our services, including presales, token rewards, and crowdfunding initiatives.<br />
                              ● Communicate updates, news, and promotional content about OncoNetwork.<br />
                              ● Improve website functionality and user experience.<br />
                              ● Ensure compliance with legal and regulatory requirements.<br />
                              ● Protect against fraud, security threats, and misuse of our platform.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">3. How We Store Your Information</h2>
                           <p>
                              ● Personal Data: Stored on encrypted servers managed by trusted third-party providers with robust security measures.<br />
                              ● Blockchain Data: Stored on decentralized ledgers, ensuring transparency and immutability.<br />
                              ● Anonymized Data: Aggregated and stored for analytical purposes without identifying individuals.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">4. How We Protect Your Information</h2>
                           <p>
                              ● Encryption: Advanced encryption for all personal data both in transit and at rest.<br />
                              ● Access Control: Restricted access to authorized personnel only.<br />
                              ● Regular Audits: Routine audits of our systems to identify and mitigate potential vulnerabilities.<br />
                              ● Secure Payments: Use of third-party payment gateways for presale and crowdfunding transactions to ensure compliance with financial standards.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">5. Sharing Your Information</h2>
                           <p>
                              ● Service Providers: Trusted partners who assist in delivering our services (e.g., hosting, email marketing).<br />
                              ● Legal Compliance: To comply with applicable laws, regulations, or legal processes.<br />
                              ● Community Transparency: Limited sharing of anonymized and aggregated data to showcase project performance and impact.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">6. User Rights</h2>
                           <p>
                              As a user, you have the following rights regarding your data:<br />
                              ● Access: Request a copy of the personal data we hold about you.<br />
                              ● Correction: Update or correct inaccuracies in your personal information.<br />
                              ● Deletion: Request the deletion of your data, subject to blockchain limitations.<br />
                              ● Opt-Out: Unsubscribe from promotional communications at any time.<br />
                              To exercise these rights, contact us.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">7. Cookies and Tracking Technologies</h2>
                           <p>
                              ● Essential Cookies: Necessary for website functionality.<br />
                              ● Analytics Cookies: Help us understand user behavior and improve our platform.<br />
                              You can control cookie preferences through your browser settings.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">8. Blockchain Transparency</h2>
                           <p>
                              Due to the immutable nature of blockchain, certain data (e.g., transactions, wallet addresses) cannot be altered or deleted.<br />
                              However, we ensure that personal data not required for blockchain functionality is stored securely off-chain.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">9. Third-Party Links</h2>
                           <p>
                              Our website may contain links to third-party websites or services. We are not responsible for their privacy practices and encourage you to review their policies before interacting with them.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">10. Data Retention</h2>
                           <p>
                              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.<br />
                              Blockchain data is retained indefinitely due to its decentralized nature.
                           </p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">11. Updates to This Privacy Policy</h2>
                           <p>
                              We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements.<br />
                              The updated policy will be posted on our website with the revised date.
                           </p>
                        </div>

                     </div>
                  </div>
               </div> 
            </div>
         </div>
      </section>
   )
}

export default Policy;
