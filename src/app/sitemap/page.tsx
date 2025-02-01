import Sitemap from "@/component/sitemap";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
         <Sitemap />
      </Wrapper>
   )
}

export default index
