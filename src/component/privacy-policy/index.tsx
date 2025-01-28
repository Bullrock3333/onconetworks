import Breadcrumb from "@/component/common/Breadcrumb"
import Policy from "./Policy"
//import DocumentArea from "@/component/common/DocumentArea"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const PolicyDetails = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Privacy Policy" />
      <Policy/>
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default PolicyDetails
