import React from "react";
import classNames from "classnames";
import "./SortList.scss";

const SortList = React.memo(
  ({ activeCategory, itemsArray, onClickCategory }) => {
    return (
      <>
        {itemsArray.map((item, index) => (
          <button
            key={`${index}_${item}`}
            onClick={() => onClickCategory(index)}
            className={classNames("sortItem", {
              active: activeCategory === index,
            })}
          >
            {item}
          </button>
        ))}
      </>
    );
  }
);

export default SortList;
