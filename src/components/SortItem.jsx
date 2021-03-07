import React from "react";
import classNames from "classnames";
import "./SortItem.scss";

function SortItem() {
  const [itemSelect, setSelect] = React.useState(0);
  const itemArray = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <>
      {itemArray.map((item, index) => (
        <button
          key={`${index}_${item}`}
          onClick={() => setSelect(index)}
          className={classNames("sortItem", {
            active: itemSelect === index,
          })}
        >
          {item}
        </button>
      ))}
    </>
  );
}

export default SortItem;
