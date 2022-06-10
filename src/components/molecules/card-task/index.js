import { useState } from "react";

import Checkbox from "../../atoms/checkbox";
import ButtonIcon from "../../atoms/button-icon";

import style from "./style.module.css";

export default function CardTask(props) {
  const [done, setDone] = useState(false);

  const handleOnChange = () => {
    setDone((state) => {
      return !state;
    });
  };

  const doneClassName = done ? style.done : "";

  return (
    <div className={style.card}>
      <h2 className={`${style.cardTitle} ${doneClassName}`}>{props.title}</h2>
      <div className={style.buttonsWrapper}>
        <Checkbox checked={done} onChange={handleOnChange} />
        <ButtonIcon onClick={props.onDelete} icon="delete" />
      </div>
    </div>
  );
}
