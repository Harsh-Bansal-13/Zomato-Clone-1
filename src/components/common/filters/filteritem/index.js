import React from "react";
import "./filteritem.css";
function FilterItem(props) {
    // const filter1 = props.filter;
    return (
        <div className="filter-item" >
            {props.filter.icon && props.filter.icon}
            <div className="filter-name"> {props.filter.title}</div>

        </div>);

}

export default FilterItem;