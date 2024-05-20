import React from "react";
import nike from "../../assets/Brand/nike.png";
import adidas from "../../assets/Brand/Adidas.png";
import hm from "../../assets/Brand/H&Mlogo.png";
import Reebok from "../../assets/Brand/Reebok.png";
import allen from "../../assets/Brand/Allen.png";
import polo from "../../assets/Brand/polo.png";

const Brand = () => {
  return (
    <>
      {/* ====== Brands Section Start */}

      <section className=" bg-gray-100 dark:bg-dark mt-7 ">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <SingleImage href="#" Alt="Brand Image" imgSrc={nike} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={adidas} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={Reebok} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={hm} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={allen} />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://image3.mouthshut.com/images/imagesp/925914690s.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://1000logos.net/wp-content/uploads/2021/05/Pepe-Jeans-logo.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://logos-world.net/wp-content/uploads/2020/04/Levis-Logo-1969-2003.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://static.vecteezy.com/system/resources/previews/022/100/257/non_2x/raymond-logo-free-png.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://www.pngplay.com/wp-content/uploads/9/Polo-Ralph-Lauren-Logo-Logo-Transparent-File.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-6 flex w-[70px] items-center justify-center hover:scale-110 transition duration-800"
      >
        <img src={imgSrc} alt={Alt} className="w-full h-1/10" />
      </a>
    </>
  );
};
