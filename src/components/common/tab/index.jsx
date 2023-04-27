import React from "react";


function Taboptions(props) {
    function HandleClick() {
        props.setActiveTab("NightLife");
    }
    return (
        <div >
            <button onClick={HandleClick}> onClick</button>
        </div>);

}

export default Taboptions;