import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import InputBase from "../../components/input";
import InputPassword from "../../components/inputPassword";
import { Container, Paper, StyledBox } from "./style";
import Logo from "../../assets/Logo.svg";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../services/api";
import { toast } from "react-hot-toast";

function SignUp({ authenticated }) {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Você não pode deixar seu nome em branco!"),
    email: yup
      .string()
      .email("E-mail inválido!")
      .required("Preencha seu e-mail!"),
    password: yup
      .string()
      .required("Não esqueça de criar uma senha!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter ao menos uma letra maiúscula, um character especial e um número"
      ),
    password__confirm: yup
      .string()
      .required("Confirme a sua senha!")
      .oneOf([yup.ref("password")], "As senhas não conferem!"),
    bio: yup.string().required("Escreva algo sobre você!"),
    contact: yup
      .string()
      .min(11, "Não esqueça de colocar o número completo com DDD"),
    course_module: yup.string().required("Diga qual seu módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const notify = (message) => {
    toast.error(message);
  };

  const [step, setStep] = useState(0);

  function handleData({ name, password, email, bio, contact, course_module }) {
    const data = { name, password, email, bio, contact, course_module };
    registerApi(data);
  }

  const registerApi = async (data) => {
    toast.loading("Estamos suas informações!");
    await Api.post("/users", data)
      .then(() => {
        toast.dismiss();
        toast.success("Deu boa");
        toast.loading("Agora é só fazer o login", {
          icon: "👏",
        });
        setTimeout(() => {
          return history.push("/");
        }, 1500);
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
      <StyledBox>
        <img src={Logo} alt="logo" />
        {step === 0 ? (
          <>
            <Link to="/" className="link__back">
              Voltar
            </Link>
          </>
        ) : (
          <Link
            onClick={(e) => {
              setStep(0);
            }}
            className="link__back"
          >
            Voltar
          </Link>
        )}
      </StyledBox>

      <Paper>
        <span>Crie sua conta</span>
        {step === 0 ? (
          <small>Rapido e grátis, vamos nessa!</small>
        ) : (
          <small>Quase lá!</small>
        )}

        <form onSubmit={handleSubmit(handleData)}>
          {step === 0 && (
            <>
              <label>
                Nome
                {errors.name && <span> - {errors.name.message}</span>}
              </label>
              <InputBase
                placeholder="Digite aqui seu nome completo"
                register={register}
                name="name"
                type={"text"}
              />
              <label>
                E-mail {errors.email && <span> - {errors.email.message}</span>}
              </label>
              <InputBase
                placeholder="Digite aqui seu melhor e-mail"
                register={register}
                name="email"
                type="text"
              />
              <label>
                Senha
                {errors.password && <span> - {errors.password.message}</span>}
              </label>
              <InputPassword
                placeholder="Digite aqui sua senha"
                register={register}
                name="password"
              />
              <label>
                Confirme sua senha
                {errors.password__confirm && (
                  <span> - {errors.password__confirm.message}</span>
                )}
              </label>
              <InputBase
                placeholder="Confirme sua senha"
                register={register}
                name="password__confirm"
                type="password"
              />
              <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(1);
                }}
                color="--color-primary"
              >
                Vamos nessa!
              </Button>
            </>
          )}
          {step === 1 && (
            <>
              <label>
                Bio {errors.bio && <span> - {errors.bio.message}</span>}
              </label>
              <textarea
                {...register("bio")}
                placeholder="Fale sobre você"
                rows="5"
                cols="33"
              />
              <label>
                Telefone
                {errors.contact && <span>- {errors.contact.message}</span>}
              </label>
              <InputBase
                placeholder="Digite aqui seu melhor telefone"
                register={register}
                name="contact"
                type={"tel"}
              />
              <label>Selecione o módulo</label>
              <select {...register("course_module")}>
                <option>Primeiro módulo (Introdução ao Frontend)</option>
                <option>Segundo módulo (Frontend Avançado)</option>
                <option>Terceiro módulo (Introdução ao Backend)</option>
                <option>Quarto módulo (Backend Avançado)</option>
              </select>
              <Button
                onClick={() => {
                  errors && notify("Oops... Alguns dados estão errados");
                }}
                type="sumbit"
                color="--color-primary"
              >
                Cadastrar
              </Button>
            </>
          )}
        </form>
      </Paper>
    </Container>
  );
}

export default SignUp;
