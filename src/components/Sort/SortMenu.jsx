import React from "react";
import SortList from "./SortList/SortList";
import "./SortMenu.scss";
import SortPopup from "./SortPopup/SortPopup";
import { useDispatch } from "react-redux";
import { setCategory } from '../../redux/actions/filters'

const categoriesArr = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItemsArr = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
]

function SortMenu() {
  const dispatch = useDispatch()

  const onSelectCategory = index => {
    dispatch(setCategory(index))
  }
  return (
    <div>
      <div className="sortBlock">
        <div className="sortItems">
          <SortList
            itemsArray={categoriesArr}
            onClickItem={onSelectCategory}
          />
        </div>
        <SortPopup
          items={sortItemsArr}
        />
      </div>
    </div>
  );
}

export default SortMenu;
