import { useContext } from "react";
import Context from "../../context/data/Context";
import Heros_image from "../../assets/Images/MainHero.jpg";
import Heros_image1 from "../../assets/Images/MainHero_1.jpg";
import Heros_image2 from "../../assets/Images/MainHero_2.jpg";
import Mobile_image from "../../assets/Images/MobileHero.jpg";

function HeroSection() {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <div style={{ background: mode == "dark" ? "rgb(46 49 55)" : "" }}>
      <img
        src={Heros_image1}
        alt=""
        className="hidden md:block lg:h-full h-96 object-cover"
      />
      <img
        src={Mobile_image}
        alt=""
        className=" md:hidden lg:h-full h-96 object-cover object-center"
      />
    </div>
  );
}

export default HeroSection;
