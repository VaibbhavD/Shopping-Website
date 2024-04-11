import React from "react";

const Brand = () => {
  return (
    <>
      {/* ====== Brands Section Start */}

      <section className="pt-5 dark:bg-dark ">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://purepng.com/public/uploads/large/purepng.com-nike-logologobrand-logoiconslogos-251519940082eoxxs.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://www.dealerservicecenter.in/assets/company_logo/wrogn.jpeg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://tse1.mm.bing.net/th?id=OIP.H5tXRLt1fbqp24_YK9EDWQHaE8&pid=Api&rs=1&c=1&qlt=95&w=182&h=121"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
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
        className="mx-4 flex w-[150px] items-center justify-center "
      >
        <img src={imgSrc} alt={Alt} className="w-full h-1/10" />
      </a>
    </>
  );
};
