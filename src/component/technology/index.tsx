import Breadcrumb from "@/component/common/Breadcrumb"
import Technology from "./Technology"
//import DocumentArea from "@/component/common/DocumentArea"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const DisclosureDetails = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Technology" />
      <Technology/>
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default DisclosureDetails
