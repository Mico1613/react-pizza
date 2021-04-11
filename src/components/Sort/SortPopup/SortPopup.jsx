import React from "react";
import "./SortPopup.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setSortBy } from "../../../redux/actions/filters";

const SortPopup = React.memo(({ items, activeSortType }) => {
  const [popupStatus, popupState] = React.useState(false);
  const changePopupStatus = () => {
    popupState(!popupStatus);
  };

  const refPopup = React.useRef();
  const popupHideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(refPopup.current)) {
      popupState(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", popupHideClick);
  }, []);

  const dispatch = useDispatch();
  const visibleLabel = (index) => items[index].name;
  const onChangeSort = (index) => {
    dispatch(setSortBy(visibleLabel(index)));
  }
  
  return (
    <div className="sortPopup">
      <p>
        Сортировать по:{" "}
        <span onClick={changePopupStatus} ref={refPopup}>
          {activeSortType}
        </span>
      </p>
      <ul className={popupStatus == true ? "popupList" : "none"}>
        {items.map((obj, index) => (
          <li
            key={`${index}_${obj.type}`}
            onClick={() => onChangeSort(index)}
            className={classNames("", {
              activePopup: activeSortType === visibleLabel(index),
            })}
          >
            {obj.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default SortPopup;
