import React from "react";
import "./SortPopup.scss";

function SortPopup() {
    const [popupStatus, popupState] = React.useState(false)
    const changePopupStatus = () => {
        popupState(!popupStatus)
    }
  return (
    <div className="sortPopup">
      <p>
        Сортировка по: <span onClick={changePopupStatus}>популярности</span>
      </p>
          <ul className={popupStatus == true ? 'popupList':'none'}>
        <li>популярности</li>
        <li>цене</li>
        <li>алфавиту</li>
      </ul>
    </div>
  );
}

export default SortPopup;
