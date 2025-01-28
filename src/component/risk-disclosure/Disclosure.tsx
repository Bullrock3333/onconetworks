import Image from "next/image";
import Link from "next/link";   

const Disclosure = ({ single_blog }: any) => {
   return (
      <section className="blog-details-area pt-60 pb-250">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="blog-details-wrap">
                     <div className="blog-details-content"> 
                     <div className="col-lg-12 pb-30">
   <h3>Risk Disclosure</h3>
   <p>By engaging with OncoNetwork’s blockchain platform and cryptocurrency offerings, you recognize the potential risks associated with digital assets. These risks include:</p>

   <ul>
      <li><strong>Market Volatility:</strong> Cryptocurrencies and digital assets are subject to significant price fluctuations. Such volatility can lead to substantial gains or losses.</li>
      <li><strong>Regulatory Uncertainty:</strong> The regulatory environment for blockchain and cryptocurrency remains evolving, which may result in changes that could affect the platform, token usage, or the overall market.</li>
      <li><strong>Security Vulnerabilities:</strong> While blockchain technology is secure, vulnerabilities, such as hacking or technical errors, could expose participants to financial loss.</li>
      <li><strong>Investment Risk:</strong> Investments in cryptocurrencies and blockchain-based tokens carry a high degree of risk, and there is no assurance of profitability. Investors should carefully consider their risk tolerance and consult with a financial advisor if needed.</li>
      <li><strong>Technology Risks:</strong> Blockchain systems, while generally considered secure, are still evolving and could face technical issues, including bugs, network failures, or unforeseen flaws in the infrastructure.</li>
   </ul>

   <p><strong>No Guarantee of Returns:</strong> Participation in blockchain activities through the OncoNetwork platform does not guarantee financial gain, and past performance is not indicative of future results. You should only invest funds you are prepared to lose, understanding that blockchain technology and cryptocurrencies remain speculative and high-risk assets.</p>

   <p>For more detailed information about the risks, please consult with a financial advisor before making any investments.</p>
</div>

                         

                     </div>
                  </div>
               </div> 
            </div>
         </div>
      </section>
   )
}

export default Disclosure;
