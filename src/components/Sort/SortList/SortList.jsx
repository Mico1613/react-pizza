import React from "react";
import classNames from "classnames";
import "./SortList.scss";

const SortList = React.memo(({itemsArray, onClickItem}) => {
  const [itemSelect, setSelect] = React.useState(0);
  const onSelectItem = (index) => {
    setSelect(index)
    onClickItem(index)
  }
  return (
    <>
      {itemsArray.map((item, index) => (
        <button
          key={`${index}_${item}`}
          onClick={() => onSelectItem(index)}
          className={classNames("sortItem", {
            active: itemSelect === index,
          })}
        >
          {item}
        </button>
      ))}
    </>
  );
})

export default SortList;
