import Breadcrumb from "@/component/common/Breadcrumb"
import NfcMarketplace from "./Nfc"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const Nfc = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="NFC Marketplace" />
      <NfcMarketplace />
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default Nfc
