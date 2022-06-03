import Checkbox from "../../atoms/checkbox";
import ButtonIcon from "../../atoms/button-icon";

export default function CardTask() {
  return (
    <div>
      <h2>Título da Tarefa</h2>
      <Checkbox />
      <ButtonIcon icon="delete" />
    </div>
  );
}
