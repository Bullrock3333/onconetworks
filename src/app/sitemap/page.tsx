import Sitemap from "@/component/sitemap";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Onco Network DATA THAT FIGHTS CANCER",
};

const index = () => {
   return (
      <Wrapper>
         <Sitemap />
      </Wrapper>
   )
}

export default index
