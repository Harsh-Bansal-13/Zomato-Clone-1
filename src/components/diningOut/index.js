import React from "react";
import "./diningOut.css";
import Collection from "../collection";
import Filters from "../common/filters";
import { diningouts } from "../../data/diningOut";
import ExploreSection from "../common/exploreSection";

const collectionList = [
    {
        id: '1',
        title: "22 Great Cafes",
        cover: "https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg",
        places: "23 places"
    },
    {
        id: '2',
        title: "21 Romantic Dining Places",
        cover: "https://b.zmtcdn.com/data/collections/8dd5adbf91d78c8d11796c6b230539ef_1674568824.jpg",
        places: "21 places"
    },
    {
        id: '3',
        title: "22 Best Insta-worthy Places",
        cover: "https://b.zmtcdn.com/data/collections/16e3a8b363d4592a72b2c4f486c63fb8_1678096853.jpg",
        places: "22 places"
    },
    {
        id: '4',
        title: "18 Blissful Breakfast Places",
        cover: "https://b.zmtcdn.com/data/collections/633c8675a805dce153ee5f16ea9d9fd5_1679129823.jpg",
        places: "18 places"
    },
    {
        id: '5',
        title: "18 Thrilling Live Cricket Screenings",
        cover: "https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160970.png",
        places: "18 places"
    },
    {
        id: '6',
        title: "23 Best Luxury Dining Places",
        cover: "https://b.zmtcdn.com/data/collections/fd37afa577ae46c537d455f9dc3365ba_1674569019.jpg",
        places: "23 places"
    },
    {
        id: '7',
        title: "11 Best Book Cafes",
        cover: "https://b.zmtcdn.com/data/collections/6039743456c8403f97513cbed13bbd43_1682204465.jpg",
        places: "11 places"
    },

];

const Diningfilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters"
    },
    {
        id: 2,
        title: "Rating: 4.0+"
    },
    {
        id: 3,
        title: "Outdoor Seating"
    },
    {
        id: 4,
        title: "Serves Alcohol"
    },
    {
        id: 5,
        title: "Open Now"
    }
];
const diningList = diningouts;
function DiningOut() {
    return (
        <div>
            <Collection list={collectionList}></Collection>
            <div className="max-width">
                <Filters filterlist={Diningfilters}></Filters>
            </div>
            <ExploreSection list={diningList} collectionName="Best Dining Restaurants near you in Kurukshetra"></ExploreSection>
        </div>);

}

export default DiningOut;