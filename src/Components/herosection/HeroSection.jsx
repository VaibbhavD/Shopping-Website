import { useContext } from "react";
import Context from "../../context/data/Context";

function HeroSection() {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <div style={{ background: mode == "dark" ? "rgb(46 49 55)" : "" }}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
        alt=""
        className="lg:h-full h-96 object-cover"
      />
    </div>
  );
}

export default HeroSection;
