import { InputLabel, InputBox, Group } from "./input.styles";

const Input = ({ label, ...otherProps }) => {
  return (
    <Group>
      <InputBox {...otherProps} />
      {label && (
        <InputLabel
          shrink={
            otherProps.type !== "file"
              ? otherProps.value.length
              : otherProps.name
          }
        >
          {label}
        </InputLabel>
      )}
    </Group>
  );
};

export default Input;
