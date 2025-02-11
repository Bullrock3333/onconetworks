import Oncoblockchain from "@/component/blockchain";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
        <Oncoblockchain />
      </Wrapper>
   )
}

export default index