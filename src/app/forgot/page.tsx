import ResetPassWord from "@/component/reset-password";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Reset PassWord Onco Network",
};
const index = () => {
   return (
      <Wrapper>
         <ResetPassWord />
      </Wrapper>
   )
}

export default index