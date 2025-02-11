

import Breadcrumb from "@/component/common/Breadcrumb"
import OncoExchangePro from "./Exchange"
import FooterThree from "@/layouts/footers/FooterThree"
import HeaderThree from "@/layouts/headers/HeaderThree"

const Exchange = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="OncoExchange Pro" />
      <OncoExchangePro />
      {/*<DocumentArea />*/}
      <FooterThree />
    </main>
  )
}

export default Exchange
