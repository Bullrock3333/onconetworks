import Policy from "@/component/privacy-policy";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
         <Policy />
      </Wrapper>
   )
}

export default index