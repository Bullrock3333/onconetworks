import FooterOne from "@/layouts/footers/FooterOne" 
import ChooseArea from "./ChooseArea" 
import FaqArea from "./FaqArea"
import Hero from "./Hero"
import IntroArea from "./IntroArea"  
import RoadMap from "./RoadMap"
import HeaderOne from "@/layouts/headers/HeaderOne"

const HomeOne = () => {
  return (
    <div className="home-purple-gradient">
      <HeaderOne />
      <Hero /> 
      <ChooseArea />
      <IntroArea />
      <RoadMap /> 
      <FaqArea />
      <FooterOne />
    </div>
  )
}

export default HomeOne
