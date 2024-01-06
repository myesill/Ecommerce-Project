import React from "react";
import Slider from "react-slick";

const SliderComps = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">
              Nike Metcon 9 EasyOn Kadın Antrenman Ayakkabısı
            </div>
            <div className="text-lg my-4">
              Metcon 9, antrenman yapma sebebin ne olursa olsun beklentilerini
              karşılar. 8 modelini daha büyük Hyperlift plaka ve ekstra kauçuk
              ip sargısı ile geliştirdik.
            </div>
            <div
              className="border rounded-full cursor-pointer text-2xl
             w-[200px] h-16 flex items-center justify-center bg-gray-200"
            >
              İncele
            </div>
          </div>

          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bbe8ac18-c6b6-4288-8cdd-5e6c03937cae/metcon-9-easyon-antrenman-ayakkab%C4%B1s%C4%B1-XFHvVK.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">
              Nike Metcon 9 EasyOn Kadın Antrenman Ayakkabısı
            </div>
            <div className="text-lg my-4">
              Metcon 9, antrenman yapma sebebin ne olursa olsun beklentilerini
              karşılar. 8 modelini daha büyük Hyperlift plaka ve ekstra kauçuk
              ip sargısı ile geliştirdik.
            </div>
            <div
              className="border rounded-full cursor-pointer text-2xl
             w-[200px] h-16 flex items-center justify-center bg-gray-200"
            >
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d6dc1c89-ae17-475b-a31d-a8137b452eed/metcon-9-easyon-antrenman-ayakkab%C4%B1s%C4%B1-XFHvVK.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComps;
