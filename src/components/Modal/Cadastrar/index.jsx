import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { Api } from "../../../services/api";
import Button from "../../Button";
import InputBase from "../../input";
import * as yup from "yup";
import { Container, HeaderModal, ModalBox, StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";

function ModalCadastrar({ setModalCad }) {
  const token = JSON.parse(localStorage.getItem("@KenzieHub:Token"));

  const notify = (message) => {
    toast.error(message);
  };

  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Você não pode deixar seu nome em branco!")
      .max(20, "O nome da sua Tech não pode ter mais de 20 characteres"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const handleData = (data) => {
    sendData(data);
  };

  const sendData = (data) => {
    toast.loading("Cadastrando...");
    Api.post("/users/techs", data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        toast.dismiss();
        toast.success("Boa Dev! Tecnologia cadastrada!");
        setModalCad(false);
      })
      .catch(() => {
        toast.dismiss();
        toast.error("Opa! Algo deu errado");
      });
  };

  return (
    <Container>
      <ModalBox>
        <HeaderModal>
          <small>Cadastrar Tecnologia</small>
          <MdClose onClick={() => setModalCad(false)} className="close" />
        </HeaderModal>
        <StyledForm onSubmit={handleSubmit(handleData)}>
          <label>Nome</label>
          <InputBase register={register} name="title" />
          {errors?.title && notify(errors.title.message)}

          <label>Selecionar Status</label>
          <select {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>

          <Button color="--color-primary">Cadastrar Tecnologia</Button>
        </StyledForm>
      </ModalBox>
    </Container>
  );
}

export default ModalCadastrar;
