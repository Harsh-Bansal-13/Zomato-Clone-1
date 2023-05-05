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
    },
    {
        id: 6,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
        title: "BikanerWala",
        time: "23 min"
    },
    {
        id: 7,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ff3d2543b65456e19d204cd385ecbb63_1605093994.png?output-format=webp",
        title: "Kaleva",
        time: "22 min"
    },
    {
        id: 8,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp",
        title: "La Pino'z Pizza",
        time: "29 min"
    },
    {
        id: 9,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
        title: "Subway",
        time: "18 min"
    },
    {
        id: 10,
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
        title: "Burger King",
        time: "22 min"
    }
];


const settings = {
    infinite: false,
    slidesToShow: 6,
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