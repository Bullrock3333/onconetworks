import Cookies from "@/component/cookies-policy";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
         <Cookies />
      </Wrapper>
   )
}

export default index