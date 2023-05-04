import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";
const BrandList = [
    {
        id: 1,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
        title: "Pizza Hut",
        time: "25 min"
    },
    {
        id: 2,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png",
        title: "The Hazelnut Factory",
        time: "20 min"
    },
    {
        id: 3,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png",
        title: "Royal Cafe",
        time: "32 min"
    },
    {
        id: 4,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c62c886c7d28bbb895407f4a3a4a4e5f_1676961058.png",
        title: "Aryan Family's Delight",
        time: "36 min"
    },
    {
        id: 5,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/df5afe8b7789b8ff2b9abcd014b00c87_1646380179.png",
        title: "Mr. Brown-Danbro",
        time: "22 min"
    }
];


const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

function TopBrands() {
    return (
        <div className="top-brands max-width">
            <div className="collection-title">Top Brands for you </div>
            <Slider {...settings}>
                {BrandList.map((brand) => {
                    return <div>
                        <div className="top-brands-cover">
                            <img src={brand.cover} className="top-brands-image" alt={brand.title}></img>
                        </div>
                    </div>
                })}
            </Slider>
        </div>);

}

export default TopBrands;