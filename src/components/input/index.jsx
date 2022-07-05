import { StyledInput } from "./style";

function InputBase({ type, register, name, ...rest }) {
  return (
    <>
      <StyledInput {...register(name)} type={type} {...rest} />
    </>
  );
}
export default InputBase;
