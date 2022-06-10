import MaterialIcon from "@material/react-material-icon";

import style from "./style.module.css";

export default function ButtonIcon(props) {
  return (
    <button onClick={props.onClick} type={props.type} className={style.button}>
      <MaterialIcon className={style.icon} icon={props.icon} />
    </button>
  );
}
