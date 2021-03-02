import React from "react";
import classNames from "classnames";
import "./SortItem.scss";

function SortItem() {
  const [itemSelect, setSelect] = React.useState(0);
  const changeSelect = (i) => {
    setSelect(i);
  };
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
          onClick={() => changeSelect(index)}
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
