import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const distpatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    distpatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500">
          Rating:{productDetail?.rating?.rate}{" "}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count: {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetail?.price} <span className="text-sm">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div className="text-5xl cursor-pointer" onClick={decrement}>
            -
          </div>
          <input
            className="w-12 text-center text-4xl font-bold"
            type="text"
            value={quantity}
          />
          <div className="text-4xl cursor-pointer" onClick={increment}>
            +
          </div>
          <div
            onClick={addBasket}
            className="my-4 border w-[200px] h-16 text-2xl rounded-my bg-gray-200 cursor-pointer flex items-center justify-center"
          >
            SEPETE EKLE
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
