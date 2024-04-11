const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];

export default function Trending() {
  return (
    // <div className="">
    //   <div className="mx-auto max-w-2xl px-4  sm:px-6 mt-2 lg:max-w-7xl lg:px-8">
    //     <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-left">
    //       New Arrival
    //     </h2>

    //     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 bg-stone-100 sm:grid-cols-2 rounded-lg">
    //       {products.map((product) => (
    //         <div key={product.id} className="group relative ">
    //           <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden p-2 rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
    //             <img
    //               src={product.imageSrc}
    //               alt={product.imageAlt}
    //               className="h-full w-full object-cover object-center lg:h-full lg:w-full"
    //             />
    //           </div>
    //           <div className="mt-4 flex justify-between p-2">
    //             <div>
    //               <h3 className="text-sm text-gray-700">
    //                 <a href={product.href}>
    //                   <span aria-hidden="true" className="absolute inset-0" />
    //                   {product.name}
    //                 </a>
    //               </h3>
    //               <p className="mt-1 text-sm text-gray-500">{product.color}</p>
    //             </div>
    //             <p className="text-sm font-medium text-gray-900">
    //               {product.price}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div class="flex flex-col bg-white m-auto ">
      <h1 class="flex py-5 mx-5 font-bold text-4xl text-center text-gray-800 ">
        Categeories
      </h1>
      <div class="flex pb-10 overflow-auto ">
        <div class="flex flex-nowrap overflow-auto scrollbar-hide">
          {products.map((product) => (
            <div class="inline-block px-3 p-5 transition duration-300 hover:scale-105">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl hover: transition-shadow duration-300 ">
                <img
                  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-westernwear-Z17-header.jpg"
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
