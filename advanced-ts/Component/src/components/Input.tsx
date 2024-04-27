type InputProps = {
  label: string;
  id: string;
};
export default function Input(props: InputProps) {
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input />
    </p>
  );
}
