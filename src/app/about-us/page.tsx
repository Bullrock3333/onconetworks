import AboutDetails from "@/component/about-us/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Medi Shark Finance is a decentralized finance (DeFi) platform",
};

const index = () => {
   return (
      <Wrapper>
         <AboutDetails />
      </Wrapper>
   )
}

export default index