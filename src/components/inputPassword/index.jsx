import { Container, StyledInput } from "./style";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";

function InputPassword({ register, name, ...rest }) {
  const [showPassword, setShowPassword] = useState(true);
  const [typeShow, setTypeShow] = useState(true);

  function handlePassword(e) {
    e.preventDefault();
    setTypeShow(!typeShow);
    return setShowPassword(!showPassword);
  }
  return (
    <Container>
      <StyledInput
        {...rest}
        {...register(name)}
        type={typeShow ? "password" : "text"}
      />
      {showPassword ? (
        <MdVisibility onClick={(e) => handlePassword(e)} />
      ) : (
        <MdVisibilityOff onClick={(e) => handlePassword(e)} />
      )}
    </Container>
  );
}

export default InputPassword;
