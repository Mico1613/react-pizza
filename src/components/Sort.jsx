import React from "react";
import SortItem from "./SortItem";
import "./Sort.scss";
import SortPopup from "./SortPopup";

function Sort() {
  return (
    <div>
      <div className="sortBlock">
        <div className="sortItems">
          <SortItem />
        </div>
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
    </div>
  );
}

export default Sort;
