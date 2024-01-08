import React from "react";
import Link from "react";
import ProductCard from "./StoreComponents/ProductCard";
import Header from "../../components/Header";
import kurti from "../../assets/ecommerce/kurti.jpg";
import kurti2 from "../../assets/ecommerce/kurti2.jpg";
import kurti3 from "../../assets/ecommerce/kurti3.jpg";
import kurti4 from "../../assets/ecommerce/kurti4.jpg";
import kurti5 from "../../assets/ecommerce/kurti5.jpg";
import saree1 from "../../assets/ecommerce/saree1.jpg";
import saree2 from "../../assets/ecommerce/saree2.jpg";
import saree3 from "../../assets/ecommerce/saree3.jpg";
import skirt from "../../assets/ecommerce/skirt.jpg";
import skirt2 from "../../assets/ecommerce/skirt2.jpg";
import top from "../../assets/ecommerce/top.jpg";
import top2 from "../../assets/ecommerce/top2.jpg";
import top3 from "../../assets/ecommerce/top3.jpg";
import dress from "../../assets/ecommerce/dress.jpg";
import dress2 from "../../assets/ecommerce/dress2.jpg";
import dress3 from "../../assets/ecommerce/dress3.jpg";

export default function Ecommerce() {
  const products = [
    {
      productimg: [kurti, kurti2, kurti3, kurti4, kurti5],
      productname: "Indo Era",
      productsubhead: "Women Yoke Design Kurta",
      productmrp: "799",
      productcutprice: "1299",
      stock: true,
    },
    {
      productimg: [saree1, saree2, saree3],
      productname: "KALINI",
      productsubhead: "Pure Silk Kanjeevaram Saree",
      productmrp: "899",
      productcutprice: "2299",
      stock: true,
    },
    {
      productimg: [top, top2, top3],
      productname: "QOMN",
      productsubhead: "Pure Cotton Longline Top",
      productmrp: "1029",
      productcutprice: "1599",
      stock: true,
    },
    {
      productimg: [skirt, skirt2],
      productname: "Berrylush",
      productsubhead: "Graphic Roman Column Skirt",
      productmrp: "899",
      productcutprice: "1599",
      stock: false,
    },
    {
      productimg: [dress, dress2, dress3],
      productname: "Janasya",
      productsubhead: "Pink Midi Dress",
      productmrp: "689",
      productcutprice: "1899",
      stock: true,
    },
  ];

  return (
    <div className="pt-[2vh]">
      <Header title="Welcome to E-Samyak Store" />

      <div className="flex flex-row flex-wrap justify-between items-center ">

        
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productimg={product.productimg}
              productname={product.productname}
              productsubhead={product.productsubhead}
              productmrp={product.productmrp}
              productcutprice={product.productcutprice}
              stock={product.stock}
              />

          ))}


      </div>
    </div>
  );
}
