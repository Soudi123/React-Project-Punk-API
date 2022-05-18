import React from "react";
import beers from "../../data/beers";
import Button from "../Button/ButtonOptions";
import "./FilterItem.scss";


const FilterItems = ({ onClick, selected }) => {
  const items = ["High ABV( > 6.0%)", "Classic Range",  "Acidic ( ph < 4)"];

  const filterItemsJSX = beers.map((beer) => {
    return (
      <button key={"filter-options"} value={beer}>
        {beer}
      </button>
    );
  });

  return (
    <div>
    <Button label="High ABV (> 6.0%)"></Button>
        <Button label="Classic Range"></Button>
        <Button label="Acidic (PH < 4)"></Button>
      {/* <select name="filter-options" onChange={onChange} value={selected}>
        {filterItemsJSX}
      </select> */}
      </div>
  );
};
export default FilterItems;
