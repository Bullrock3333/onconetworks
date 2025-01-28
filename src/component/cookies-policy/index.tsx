import Breadcrumb from "@/component/common/Breadcrumb"
import Cookies from "./Cookies"
//import DocumentArea from "@/component/common/DocumentArea"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const DisclosureDetails = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Cookies Policy" />
      <Cookies/>
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default DisclosureDetails
