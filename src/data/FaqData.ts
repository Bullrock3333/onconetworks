interface DataType{
   id:number;
   page:string;
   title:string;
   desc:string;
}[];

const faq_data:DataType[]=[
   {
      id:1,
      page:"home_1",
      title:"How will Onconetworks partner with healthcare providers and research institutions?",
      desc:"We aim to create collaborations through blockchain-based data sharing and funding incentives for research.",
   },
   {
      id:2,
      page:"home_1",
      title:"How will you ensure funds raised reach cancer patients and research projects?",
      desc:"Smart contracts will automate fund distribution directly to verified projects and patient accounts.",
   },
   {
      id:3,
      page:"home_1",
      title:"How will Onconetworks be accessible to non-crypto users?",
      desc:"Our platform will feature an easy-to-use interface with fiat-to-crypto gateways for smooth access.",
   },
   {
      id:4,
      page:"home_1",
      title:"Which cancer types or research areas will Onconetworks focus on?",
      desc:"We are initially focusing on rare cancers with limited research funding and unifying data for AI-based treatments.",
   },
   {
      id:5,
      page:"home_1",
      title:"What is the play-to-earn gaming element, and how does it support cancer research?",
      desc:"Players earn ONC tokens by completing health-related challenges, which are then used to fund cancer research projects.",
   },
   {
      id:6,
      page:"home_1",
      title:"How will Onconetworks ensure equitable access across different regions and socioeconomic groups?",
      desc:"We’re focusing on low-cost solutions, global collaborations, and ensuring that token access is affordable for all.",
   },
   {
      id:7,
      page:"home_1",
      title:"What metrics will Onconetworks use to measure its impact on reducing cancer treatment costs?",
      desc:"Metrics include the number of funded projects, patient outcomes, treatment affordability, and research breakthroughs.",
   },
    
];

export default faq_data;