import Navber from "../Navbar/Navbar";
import Promosection from "./Promo";
import Trending from "./Trending";
import Featured from "./Featured";
import Brand from "./BrandSection";

const Home = () => {
  return (
    <>
      <Navber />
      <Promosection />
      <Brand />
      {/* <Featured /> */}
      <Trending />
    </>
  );
};
export default Home;
