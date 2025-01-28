import Breadcrumb from "@/component/common/Breadcrumb"
import Disclaimer from "./Disclaimer"
//import DocumentArea from "@/component/common/DocumentArea"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const DisclaimerDetails = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Disclaimer" />
      <Disclaimer/>
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default DisclaimerDetails
