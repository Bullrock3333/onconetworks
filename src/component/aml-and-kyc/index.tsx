import Breadcrumb from "@/component/common/Breadcrumb"
import Kyc from "./Kyc"
//import DocumentArea from "@/component/common/DocumentArea"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const KycDetails = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Aml & Kyc" />
      <Kyc/>
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default KycDetails
