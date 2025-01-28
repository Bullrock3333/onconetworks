import Breadcrumb from "@/component/common/Breadcrumb"
import AboutDetailsArea from "./AboutDetailsArea"
//import DocumentArea from "@/component/common/DocumentArea"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const AboutDetails = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="About Us" />
      <AboutDetailsArea/>
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default AboutDetails
