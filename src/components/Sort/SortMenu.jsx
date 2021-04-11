import React from "react";
import SortList from "./SortList/SortList";
import "./SortMenu.scss";
import SortPopup from "./SortPopup/SortPopup";
import { useDispatch, useSelector } from "react-redux";
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
  const { category, sortBy } = useSelector(({filters}) => filters)
  const onSelectCategory = index => {
    dispatch(setCategory(index))
  }
  return (
    <div>
      <div className="sortBlock">
        <div className="sortItems">
          <SortList
            itemsArray={categoriesArr}
            onClickCategory={onSelectCategory}
            activeCategory={category}
          />
        </div>
        <SortPopup
          items={sortItemsArr}
          activeSortType={sortBy}
        />
      </div>
    </div>
  );
}

export default SortMenu;
