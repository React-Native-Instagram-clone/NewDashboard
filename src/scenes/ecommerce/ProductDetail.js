import React, { useState } from "react";
import Header from "../../components/Header";
import saree from "../../assets/ecommerce/saree1.jpg";
import ReactImageMagnify from "react-image-magnify";
import {toast,Toaster} from "react-hot-toast";

export default function ProductDetail() {
  const sizes = [
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
    { size: "XXL" },
  ];

  const [selectedSize, setSelectedSize] = useState(null);

  const onAdd=()=>{
    toast.success("Product Added to Cart!!")
  }

  return (
    <div className="p-[3vh]">
      <Header title="Product Detail View" />

      <div className="w-[90%] mx-auto my-[6vh]">
        <div className="flex flex-col md:flex-row justify-start gap-[3vh]">
          <div className=" flex flex-col-reverse justify-evenly md:flex-row gap-[2vh]">
            <div id="magnifier">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "productimage",
                    isFluidWidth: true,
                    src: saree, 
                  },
                  largeImage: {
                    src: saree,
                    width:530,
                    height:700,
                  },
                }}
              />
            </div>
          </div>

          <div className="flex flex-col md:w-[60%] mx-auto gap-[2vh]">
            <h2 className="md:text-[5vh] font-medium text-gray-700">
              Women Saree
            </h2>
            <h3 className="md:text-[2.5vh] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis sapiente quisquam nesciunt est in, quia consectetur
              dignissimos.
            </h3>

            <div className="flex flex-row  justify-start items-center">
              <p className="text-purple-800 md:text-[3.9vh] font-semibold mr-[3vh]">
                Rs.1299
              </p>
              <p className="text-red-500 md:text-[3.4vh] font-semibold">
                Rs.&nbsp;
                <span className="line-through">4199</span>
              </p>
            </div>

            <div className="flex flex-row gap-[2vh]">
              {sizes.map((item, index) => (
                <div
                  key={index}
                  className="mb-[2vh] flex flex-row"
                  onClick={() => setSelectedSize(item)}
                >
                  <button
                    className={`text-[3.5vh] w-[7vh] h-[7vh] bg-purple-400 rounded-full shadow-2xl ${
                      selectedSize === item ? "border border-green-600" : ""
                    }`}
                    onClick={() => setSelectedSize(item)}
                  >
                    {item.size}
                  </button>
                </div>
              ))}
            </div>

            <Toaster/>          
            <div>
              <button
                onClick={onAdd}
                className="md:text-[3.5vh] mr-[2vh] text-white bg-purple-600 px-[4vh] py-[1.5vh] rounded-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
