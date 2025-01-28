import Kyc from "@/component/aml-and-kyc";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
         <Kyc />
      </Wrapper>
   )
}

export default index