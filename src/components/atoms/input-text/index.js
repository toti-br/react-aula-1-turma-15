import style from "./style.module.css";

export default function InputText(props) {
  const handleOnChange = function (event) {
    props.onChange(event.target.value);
  };

  return (
    <input
      className={style.input}
      type="text"
      placeholder="What needs to be done?"
      value={props.value}
      onChange={handleOnChange}
    />
  );
}
