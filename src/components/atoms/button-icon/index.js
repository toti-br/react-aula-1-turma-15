import MaterialIcon from "@material/react-material-icon";

export default function ButtonIcon(props) {
  return (
    <button>
      <MaterialIcon icon={props.icon} />
    </button>
  );
}
