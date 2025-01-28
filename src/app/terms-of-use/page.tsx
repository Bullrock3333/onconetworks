import Terms from "@/component/terms-of-use";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
         <Terms />
      </Wrapper>
   )
}

export default index