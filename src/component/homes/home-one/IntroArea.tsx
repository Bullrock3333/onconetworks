import Image from "next/image";

import intro_thumb from "@/assets/img/update/normal/intro_1-1.png";
import tokenomics_thumb from "@/assets/img/update/normal/tokenomics.png";

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
}[];

const intro_data: DataType[] = [
   {
      id: 1,
      title: "Who We Are",
      desc: (<>OncoNetwork is a revolutionary blockchain-based project designed to transform cancer treatment. Our platform leverages blockchain technology and AI to unify hospital data, create a base layer to train large language models (LLMs), and foster collaboration between patients, doctors, and researchers. We&apos;re also building a crowdfunding platform to support cancer research and treatment, alongside NFT collections with a meaningful impact.</>),
   },
   {
      id: 2,
      title: "Empowering Better Health",
      desc: (<>With OncoNetwork, you contribute to a mission with real-world impact: <br/>● Lower transaction fees for users participating in the network. <br/>● Increased project value driven by demand for innovative healthcare technologies. <br/>● By holding ONCO tokens, you hold a stake in a global movement to fight cancer.</>),
   },
   
]

const IntroArea = () => {
   return (
      <div className="pt-130 overflow-hidden bg-black2" id="feature">
         <div className="container">
            <div className="row">
               <div className="col-xl-6">
                  <div className="section-title mb-45">
                     <h2 className="title style2">Introducing OncoNetwork</h2>
                     <p className="sec-text">Empowering healthcare innovation through blockchain and AI</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-between">
               <div className="col-xl-4">
                  {intro_data.map((item) => (
                     <div key={item.id} className="intro-wrap">
                        <h6 className="intro-wrap-title">{item.title}</h6>
                        <p className="intro-wrap-text">{item.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="col-xl-6">
                  <div className="intro-thumb1 alltuchtopdown">
                     <Image src={intro_thumb} alt="img" />
                  </div>
                  <div className="intro-wrap mt-50">
                     <h6 className="intro-wrap-title">A Community-Driven Initiative</h6>
                     <p className="intro-wrap-text">Our growth is powered by the community, driving progress in cancer research and treatment. As more individuals and organizations join, the value and impact of OncoNetwork increase. Together, we aim to revolutionize how cancer data is shared and utilized globally.</p>
                  </div>
                  <div className="intro-wrap mt-50">
                     <h6 className="intro-wrap-title">Our Mission & Vision</h6>
                     <p className="intro-wrap-text">OncoNetwork is committed to creating a future where cancer treatment is faster, smarter, and more accessible. By leveraging cutting-edge technologies like blockchain and AI, we aim to build a global platform that unifies healthcare data, supports research, and empowers patients.</p>
                     <p className="intro-wrap-text mt-40">Join us in building <b>Data that fights cancer.</b></p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-between">
               <div className="col-xl-12 pt-70 text-center"> 
                     <Image src={tokenomics_thumb} alt="img" /> 
               </div>                
            </div>

         </div>
      </div>
   )
}

export default IntroArea
