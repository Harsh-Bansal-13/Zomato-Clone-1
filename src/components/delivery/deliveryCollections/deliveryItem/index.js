import React from "react";
import "./deliveryItem.css";
function DeliveryItem(props) {
    return (
        <div>
            <div className="delivery-item-cover">
                <img src={props.item.cover} alt={props.item.title} className="delivery-item-image"></img>
            </div>
            <div className="delivery-item-title">{props.item.title}</div>
        </div>);

}

export default DeliveryItem;