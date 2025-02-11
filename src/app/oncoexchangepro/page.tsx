
import Exchange from "@/component/exchange";

import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
         <Exchange />
      </Wrapper>
   )
}

export default index