import Image from "next/image";
import Link from "next/link";   

const Kyc = ({ single_blog }: any) => {
   return (
      <section className="blog-details-area pt-60 pb-250">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="blog-details-wrap">
                     <div className="blog-details-content"> 
                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Anti-Money Laundering (AML) Policy</h2>
                           <p>OncoNetwork is fully committed to complying with applicable global Anti-Money Laundering (AML) laws to prevent the platform from being used for illegal activities, including money laundering, fraud, and the financing of terrorism. To mitigate risks, we maintain a robust AML framework that involves the monitoring of all transactions and the identification of suspicious activities. If we detect or suspect illegal activity, we reserve the right to freeze accounts, block transactions, and report such activities to the relevant authorities.</p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h3>Know Your Customer (KYC) Policy</h3>
                           <p>In accordance with international regulatory standards, OncoNetwork implements a strict Know Your Customer (KYC) policy designed to verify the identity of all platform users. To ensure compliance with financial regulations and to reduce the risk of fraud, each user is required to provide valid identification documents during the registration process. These documents may include, but are not limited to, government-issued IDs, proof of address, and additional verification materials as needed. We also reserve the right to conduct periodic reviews of user accounts to ensure ongoing compliance. The KYC process is critical to ensure that all users are legitimate and to protect the platform from illegal activities.</p>
                            
                        </div>

                         

                     </div>
                  </div>
               </div> 
            </div>
         </div>
      </section>
   )
}

export default Kyc;
