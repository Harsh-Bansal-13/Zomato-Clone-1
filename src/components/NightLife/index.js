import React from "react";
import "./nightLife.css"
import Collection from "../collection";
import Filters from "../common/filters";
import { nightliferestaurants } from "../../data/nightlife";
import ExploreSection from "../common/exploreSection";

const collectionList = [
    {
        id: '1',
        title: "19 Lit Party Places",
        cover: "https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg",
        places: "20 places"
    },
    {
        id: '2',
        title: "17 Finest Microbreweries",
        cover: "https://b.zmtcdn.com/data/collections/8dd5adbf91d78c8d11796c6b230539ef_1674568824.jpg",
        places: "17 places"
    }
];

const NightLifefilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters"
    },
    {
        id: 2,
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
        title: "Distance"
    },
    {
        id: 3,
        title: "Rating: 4.0+"
    },
    {
        id: 4,
        title: "Pubs and Bar"
    }
];

const nightList = nightliferestaurants;
function NightLife() {
    return (
        <div>
            <Collection list={collectionList}></Collection>
            <div className="max-width">
                <Filters filterlist={NightLifefilters}></Filters>
            </div>
            <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Kurukshetra"></ExploreSection>
        </div>);

}

export default NightLife;