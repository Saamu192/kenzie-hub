import { Container, Paper } from "./style";

import Logo from "../../assets/Logo.svg";
import InputBase from "../../components/input";
import InputPassword from "../../components/inputPassword";
import Button from "../../components/Button";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Api } from "../../services/api";

function LoginPage({ setAuthenticated, authenticated }) {
  toast.dismiss();

  const history = useHistory();
  const { register, handleSubmit } = useForm();

  function handleData({ email, password }) {
    const data = { email, password };
    registerApi(data);
  }

  const registerApi = async (data) => {
    toast.loading("Estamos suas informações!");
    await Api.post("/sessions", data)
      .then((res) => {
        toast.dismiss();
        console.log(res.data);

        toast.success("Tudo pronto Dev, vamos nessa!");
        localStorage.setItem(
          "@KenzieHub:Token",
          JSON.stringify(res.data.token)
        );
        localStorage.setItem("@KenzieHub:Id", JSON.stringify(res.data.user.id));
        setAuthenticated(true);
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Não deu boa");
        return err;
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <img src={Logo} alt="logo" />

      <Paper>
        <span>Login</span>
        <form onSubmit={handleSubmit(handleData)}>
          <label>E-mail</label>
          <InputBase type={"text"} register={register} name="email" />

          <label>Senha</label>
          <InputPassword
            type={"password"}
            register={register}
            name="password"
          />

          <Button color="--color-primary" type="submit">
            Entrar
          </Button>
        </form>

        <small>Ainda não possui uma conta?</small>
        <Button
          onClick={(e) => {
            history.push("/signup");
          }}
          color="--grey-1"
        >
          Cadastre-se
        </Button>
      </Paper>
    </Container>
  );
}

export default LoginPage;
