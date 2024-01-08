import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Pagination, Navigation } from "swiper/modules";
import StockStatus from "./StockStatus";

const ProductCard = ({
  productimg,
  productname,
  productsubhead,
  productmrp,
  productcutprice,
  stock,
}) => {
  const [clickheart, setClickheart] = useState(false);

  const handleClick = () => {
    setClickheart(!clickheart);
  };

  const discount = () => {
    const discountPrice = productcutprice - productmrp;
    const discountPercentage = (discountPrice / productcutprice) * 100;
    return discountPercentage.toFixed(0);
  };

  return (
    <div className="pt-[2vh]">
      <div className="my-[2vh]">
        <div className="w-[30vh] p-[1vh] shadow-xl">
          <div className="relative h-[40vh]">
          <a href="/productdetail" className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {productimg.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="w-[30vh]"
                    alt={`Product ${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            </a>  
            <div className="absolute bg-white p-[0.5vh] z-50 top-[1vh] right-[1vh] cursor-pointer">
              {clickheart ? (
                <FavoriteIcon className="text-pink-600" onClick={handleClick} />
              ) : (
                <FavoriteBorderIcon
                  className="text-pink-600"
                  onClick={handleClick}
                />
              )}
            </div>
            <div className="absolute z-20 bg-white left-[1vh] bottom-[4vh] font-semibold text-[2.5vh] py-[0.5vh] px-[1vh] text-green-600">
              {discount() === "0" ? "0%" : `(${discount()}% OFF)`}
            </div>
          </div>
          

          <div className="flex flex-row justify-between my-[1vh]">
            <h1 className="text-[2.6vh]  font-semibold">{productname}</h1>
            <h2 className="text-[2.4vh] text-green-500  mr-[1vh] flex flex-row items-center">
              4.2 <StarIcon className="text-[2vh]" />
            </h2>
          </div>
          <h1 className="text-[2.3vh]">{productsubhead}</h1>

          <div className="flex flex-row items-center">
            <div className="text-[3vh] mr-[1vh]">Rs.{productmrp}</div>
            <div className="text-[2.7vh] mr-[1vh]">
              Rs.
              <span className="text-[2.7vh] line-through text-red-500">
                {productcutprice}
              </span>
            </div>
          </div>
          <StockStatus inStock={stock} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
