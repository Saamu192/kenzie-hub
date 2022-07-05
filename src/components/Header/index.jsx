import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.svg";

function Header({ setAuthenticated }) {
  function logOut() {
    localStorage.clear();
    return setAuthenticated(false);
  }
  return (
    <StyledHeader>
      <img src={Logo} alt="Logo" />
      <button
        onClick={(e) => {
          logOut();
        }}
        className="link__back"
      >
        Sair
      </button>
    </StyledHeader>
  );
}
export default Header;
