import Checkbox from "../../atoms/checkbox";
import ButtonIcon from "../../atoms/button-icon";

import style from "./style.module.css";

export default function CardTask(props) {
  const handleOnChange = () => {
    const completed = !props.done;
    props.toggleComplete(completed, props.id);
  };

  const doneClassName = props.done ? style.done : "";

  return (
    <div className={style.card}>
      <h2 className={`${style.cardTitle} ${doneClassName}`}>{props.title}</h2>
      <div className={style.buttonsWrapper}>
        <Checkbox checked={props.done} onChange={handleOnChange} />
        <ButtonIcon onClick={props.onDelete} icon="delete" />
      </div>
    </div>
  );
}
