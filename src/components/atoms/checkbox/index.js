import style from "./style.module.css";

export default function Checkbox(props) {
  /*
    {
      checked: true || false,
      onChange: () => {},
    }
  */
  return (
    <input
      className={style.checkbox}
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
    />
  );
}
