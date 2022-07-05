import { StyledButton } from "./style";

function Button({ children, type, color, ...rest }) {
  return (
    <StyledButton {...rest} color={color} type={type}>
      {children}
    </StyledButton>
  );
}
export default Button;
