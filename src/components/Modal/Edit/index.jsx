import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { Api } from "../../../services/api";
import Button from "../../Button";
import InputBase from "../../input";
import {
  ButtonContainer,
  Container,
  HeaderModal,
  ModalBox,
  StyledForm,
} from "./styled";

function ModalEdit({ data, setModalEdit }) {
  const token = JSON.parse(localStorage.getItem("@KenzieHub:Token"));

  const [changeTitle, setChangeTitle] = useState(data.title);
  const [changeStatus, setChangeStatus] = useState(data.status);

  const { register, handleSubmit } = useForm();

  const handleData = (elements) => {
    const newData = { status: elements.status };
    sendData(newData);
  };

  const sendData = (elements) => {
    toast.loading("Cadastrando...");

    Api.put(`/users/techs/${data.id}`, elements, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        toast.dismiss();
        toast.success("Boa Dev! Tecnologia atualizada!");

        setModalEdit(false);
      })
      .catch(() => {
        toast.dismiss();
        toast.error("Opa! Algo deu errado");
      });
  };

  const deleteTech = () => {
    toast.loading("Excluindo...");
    Api.delete(`/users/techs/${data.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        toast.dismiss();
        toast.success("Tecnologia excluida!");
        setModalEdit(false);
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
          <small>Editar Tecnologia</small>
          <MdClose
            onClick={() => {
              setModalEdit(false);
            }}
            className="close"
          />
        </HeaderModal>
        <StyledForm onSubmit={handleSubmit(handleData)}>
          <label>Nome</label>
          <InputBase value={changeTitle} register={register} name="title" />

          <label>Selecionar Status</label>
          <select
            onChangeCapture={(e) => setChangeStatus(e.target.value)}
            value={changeStatus}
            {...register("status")}
          >
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <ButtonContainer>
            <Button type="submit" color="--color-primary">
              Salvar Alterações
            </Button>
            <Button type="button" onClick={() => deleteTech()} color="--grey-1">
              Excluir
            </Button>
          </ButtonContainer>
        </StyledForm>
      </ModalBox>
    </Container>
  );
}

export default ModalEdit;
