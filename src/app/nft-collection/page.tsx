
import Nfc from "@/component/nfc";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
        <Nfc />
      </Wrapper>
   )
}

export default index
