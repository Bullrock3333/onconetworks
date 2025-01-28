import Breadcrumb from "@/component/common/Breadcrumb"
import Terms from "./Terms"
//import DocumentArea from "@/component/common/DocumentArea"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const TermsDetails = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Terms of use" />
      <Terms/>
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default TermsDetails
