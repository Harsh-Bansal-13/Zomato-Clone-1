import React, { useState } from "react";
import Header from "../../components/common/header";
import Taboptions from "../../components/common/tab";
import Footer from "../../components/common/footer";



function HomePage() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header></Header>
      <Taboptions></Taboptions>
      this is HomePage
      {getCorrectScreen(activeTab)}
      <Footer></Footer>
    </div>);

}
const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <div> This is Delivery</div>;
    case "Dining Out":
      return <div> This is Dining Out</div>;
    case "Night light":
      return <div> This is Night light</div>;
    default:
      return <div> This is Delivery</div>;
  }
}

export default HomePage;