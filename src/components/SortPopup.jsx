import React from "react";
import "./SortPopup.scss";
import classNames from 'classnames'

function SortPopup({items}) {
  const [popupStatus, popupState] = React.useState(false);
  const changePopupStatus = () => {
    popupState(!popupStatus);
  };

  const refPopup = React.useRef()
  const popupHideClick = (e) => {
    if (!e.path.includes(refPopup.current)) {
      popupState(false)
    }
  }
  React.useEffect(() => {
    document.addEventListener('click', popupHideClick)
  }, [])

  const [popupActive, setPopup] = React.useState(0)
  const visibleLabel = items[popupActive]
  return (
    <div className="sortPopup">
      <p>
        Сортировать по: <span onClick={changePopupStatus} ref={refPopup}>{visibleLabel}</span>
      </p>
      <ul className={popupStatus == true ? "popupList" : "none"}>
        {items.map((item, index) => (
          <li
            key={`${index}_${item}`}
            onClick={() => setPopup(index)}
            className={classNames("", {
              activePopup: popupActive === index,
            })}
          >
            {item}
          </li>))}
      </ul>
    </div>
  );
}

export default SortPopup;
