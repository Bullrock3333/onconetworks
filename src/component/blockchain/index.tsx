import Breadcrumb from "@/component/common/Breadcrumb"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"
import Blockchain from "./Blockchain"

const Oncoblockchain = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Onco Block Chain 2.0" />
      <Blockchain />
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default Oncoblockchain
