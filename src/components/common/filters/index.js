import React from "react";
import FilterItem from "./filteritem";
import "./filters.css";
function Filters(props) {
    const filterlist = props.filterlist;
    return (
        <div className="filters">
            {filterlist && filterlist.map((filter) => {
                return <FilterItem filter={filter} key={filter.id}></FilterItem>;
            })}
        </div>);

}

export default Filters;