import Disclaimer from "@/component/disclaimer";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
         <Disclaimer />
      </Wrapper>
   )
}

export default index