import CardTask from "../../molecules/card-task";

import style from "./style.module.css";

export default function TaskList(props) {
  return (
    <ul className={style.ul}>
      {props.tasks.map(function (task) {
        return (
          <li key={task.id} className={style.li}>
            <CardTask
              title={task.title}
              done={task.done}
              id={task.id}
              toggleComplete={props.toggleComplete}
              onDelete={() => {
                props.removeTask(task.id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}