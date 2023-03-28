import { InputLabel, InputBox, Group } from "./input.styles";

const Input = ({ label, ...otherProps }) => {
  return (
    <Group>
      <InputBox {...otherProps} />
      {label && (
        <InputLabel shrink={otherProps.value.length}>{label}</InputLabel>
      )}
    </Group>
  );
};

export default Input;
