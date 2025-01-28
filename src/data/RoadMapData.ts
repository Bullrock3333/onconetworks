interface DataType {
   id: number;
   sub_title: string;
   title: string;
   desc: string;
}[];

const road_map_data: DataType[] = [
   {
      id: 1,
      sub_title: "Q4 2024",
      title: "Stage 1: Initial Launch",
      desc: "<ul><li>Conduct an Initial Coin Offering (ICO) to raise funds through *10 presale rounds* (400 Million tokens in total).</li><li>Launch a demo of the crowdfunding platform.</li> <li> Release a Telegram mini app game to engage the community.</li></ul>",
   },
   {
      id: 2,
      sub_title: "Q1 2025",
      title: "Stage 2: Platform Development",
      desc: "<ul><li>Develop and launch the ICO website, integrating staking and vesting features.</li><li>Establish dedicated research teams to focus on reducing the costs of cancer treatments.</li><li>Allocate funds raised from the ICO to support early-stage cancer research.</li><li>Launch the NFT collection to support fundraising for cancer treatment initiatives.</li></ul>",
   },
   {
      id: 3,
      sub_title: "Q2 2025",
      title: "Stage 3: Full Platform Rollout",
      desc: "<ul><li>Fully launch the Onconetwork platform with its own blockchain to facilitate data exchange between hospitals, improving research and treatment outcomes.</li><li>Integrate additional DeFi tools to enhance platform liquidity and expand financial support for cancer healthcare.</li></ul>",
   },
   {
      id: 4,
      sub_title: "Q3 2025",
      title: "Stage 4: Blockchain Development And Scaling",
      desc: "<ul><li>Focus on increasing the platform’s security and scalability to accommodate growing data and user demands.</li><li>Establish partnerships with global healthcare institutions to further strengthen the data exchange network.</li><li>Expand the platform’s infrastructure to support cross-chain compatibility, enabling greater access and interoperability across various blockchain networks.</li></ul>",
   },
];

export default road_map_data;