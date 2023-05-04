import React, { useState } from "react";
import Header from "../../components/common/header";
import Taboptions from "../../components/common/tab";
import Footer from "../../components/common/footer";

import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import NightLife from "../../components/NightLife";



function HomePage() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header></Header>
      <Taboptions activeTab={activeTab} setActiveTab={setActiveTab}></Taboptions>
      {getCorrectScreen(activeTab)}
      <Footer></Footer>
    </div>);

}
const getCorrectScreen = (tab_name) => {
  switch (tab_name) {
    case "Delivery":
      return <Delivery></Delivery>;
    case "Dining Out":
      return <DiningOut></DiningOut>;
    case "Night Life":
      return <NightLife></NightLife>;
    default:
      return <Delivery></Delivery>;
  }
}

export default HomePage;