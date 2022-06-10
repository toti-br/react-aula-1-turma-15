import { useState } from "react";

import ButtonIcon from "../../atoms/button-icon";
import InputText from "../../atoms/input-text";

import style from "./style.module.css";

export default function FormTask(props) {
  const [title, setTitle] = useState("");

  const handleOnChange = (typedValue) => {
    setTitle(typedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      title: title,
    });

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <InputText value={title} onChange={handleOnChange} />
      <ButtonIcon type="submit" icon="add" />
    </form>
  );
}
