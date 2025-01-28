import Breadcrumb from "@/component/common/Breadcrumb"
import Disclosure from "./Disclosure"
//import DocumentArea from "@/component/common/DocumentArea"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const DisclosureDetails = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Risk Disclosure" />
      <Disclosure/>
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default DisclosureDetails
