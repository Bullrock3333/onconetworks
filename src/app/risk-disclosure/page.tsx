import Disclosure from "@/component/risk-disclosure";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
         <Disclosure />
      </Wrapper>
   )
}

export default index