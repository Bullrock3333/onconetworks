import Image from "next/image";
import Link from "next/link";   

interface ContentData {
   title_1: string;
   desc_1: JSX.Element; 
   social_icon: string[];
}

const content_data: ContentData = {
   title_1: "Who We Are",
   desc_1: (
      <>
         OncoNetworks is a blockchain-powered platform revolutionizing cancer treatment by combining decentralized finance (DeFi) and artificial intelligence (AI). Our goal is to make advanced cancer treatment affordable, accessible, and transparent by leveraging cutting-edge blockchain technology and AI-based data models. Through secure and dynamic financial ecosystems, we aim to reduce the high costs of cancer care and transform the way healthcare is financed globally.
      </>
   ),
   social_icon: ["fab fa-facebook-f", "fab fa-linkedin-in", "fab fa-twitter", "fab fa-instagram"],
}

const { title_1, desc_1 } = content_data;

const AboutDetailsArea = ({ single_blog }: any) => {
   return (
      <section className="blog-details-area pt-60 pb-250">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="blog-details-wrap">
                     <div className="blog-details-content"> 

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">{single_blog?.title ? single_blog.title : title_1}</h2>
                           <p>{desc_1}</p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Our Mission</h2>
                           <p>Our mission is to develop a sustainable DeFi-based funding model that supports breakthrough cancer treatments at affordable costs. We strive to democratize access to advanced care by allowing individuals to invest in, fund, and benefit from revolutionary medical research through secure blockchain platforms.</p>
                        </div>  

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Our Vision</h2>
                           <p>At OncoNetworks, we aim to build a decentralized ecosystem that enables individuals to contribute to cancer research and treatment development in a transparent, accountable manner. By harnessing the power of blockchain, we provide a platform that ensures funds are tracked and directed toward meaningful progress in cancer care.</p>
                        </div>                

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Why Choose OncoNetworks?</h2>
                           <p>OncoNetworks is more than a DeFi platform; we are creating a holistic ecosystem that integrates blockchain with cutting-edge technologies like NFTs, AI, and decentralized exchanges. Our platform offers opportunities for investors, patients, and healthcare providers alike, reshaping how digital assets and healthcare funding converge.</p>
                        </div>                

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Case Study: Problem Statement</h2>
                           <p><b>Reducing Cancer Treatment Costs with Blockchain, NFTs, and Crypto Solutions</b></p>
                           <p>Cancer continues to burden millions worldwide, with treatment costs skyrocketing and access to advanced care often limited by financial constraints. Traditional healthcare financing models, particularly in developing regions, create barriers that prevent timely and effective treatment, leading to devastating outcomes for patients and their families.</p>
                        </div>                 

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">About Cancer</h2>
                           <p>Cancer is one of the leading global health crises, responsible for 16.8% of deaths worldwide. Treatment options, including chemotherapy, radiation, and surgeries, often result in exorbitant costs, with many patients unable to afford the care they need. These costs can range from $150,000 to over $1 million, depending on the type and severity of cancer, further compounded by diagnostic, medication, and follow-up care expenses.</p>
                           <p>The total global economic impact of cancer was $1.16 trillion in 2020, according to the World Health Organization (WHO), highlighting the urgency of finding alternative funding and care models.</p>
                        </div>

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Key Cancer Statistics and Insights (2022)</h2>
                           <p>The report emphasizes key cancer statistics:<br />
                              ● Global Death Impact: 16.8% of global deaths are cancer-related, accounting for 22.8% of deaths from noncommunicable diseases (NCDs) globally.<br />
                              ● Premature Deaths: Cancer is responsible for 30.3% of premature deaths (ages 30-69), making it one of the leading causes of death in this age group globally.<br />
                              ● Societal Impact: The economic and societal impact of cancer varies greatly by region, gender, and cancer type, severely limiting life expectancy and placing a financial strain on healthcare systems.
                           </p>
                        </div>                

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Objective of Research</h2>
                           <p>OncoNetworks aims to integrate cryptocurrency, NFTs, and DeFi solutions into cancer research funding. By utilizing crowdfunding platforms, blockchain, and gamification, we are developing new ways to make cancer treatment accessible to all socio-economic groups. We also explore the role of crypto exchanges in streamlining cross-border payments, reducing transaction fees, and accelerating treatment access.</p>
                        </div>    

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Challenges Addressed</h2>
                           <p>● High Treatment Costs: Introducing blockchain and DeFi solutions to reduce the financial burden of cancer treatments.<br />
                              ● Limited Access to Healthcare: Increasing global access to cancer treatment funds, especially for underserved populations.<br />
                              ● Lack of Transparency: Ensuring transparent fund distribution to healthcare providers, investors, and patients.<br />
                              ● Engagement with Crypto and DeFi Ecosystem: Utilizing NFTs, gaming, and digital assets to support healthcare fundraising and drive a more inclusive DeFi ecosystem.
                           </p>
                        </div>  

                        <div className="col-lg-12 pb-30">
                           <h2 className="title">Partnership and Growth Strategy</h2>
                           <p>OncoNetworks is collaborating with globally renowned healthcare institutions to enhance credibility and innovation in oncology research. We’ve also partnered with top blockchain professionals and DeFi platforms to ensure security, liquidity, and efficiency across our platform. Key partnership areas include decentralized finance, pharmaceutical companies, decentralized exchanges (DEXs), hospital chains, and AI blockchains.</p>
                        </div>  
                     </div>
                  </div>
               </div> 
            </div>
         </div>
      </section>
   )
}

export default AboutDetailsArea;
