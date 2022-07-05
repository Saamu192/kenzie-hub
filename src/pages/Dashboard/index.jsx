import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import ModalCadastrar from "../../components/Modal/Cadastrar";
import ModalEdit from "../../components/Modal/Edit";
import TechCard from "../../components/TechCard";
import { Api } from "../../services/api";
import { Container, Hello, StyledTech, TechList } from "./style";

function Dashboard({ authenticated, setAuthenticated }) {
  const id = JSON.parse(localStorage.getItem("@KenzieHub:Id"));
  const token = JSON.parse(localStorage.getItem("@KenzieHub:Token"));

  const [user, setUser] = useState({});
  const [modalCad, setModalCad] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [teste, setTeste] = useState({});

  useEffect(() => {
    Api.get(`/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [modalCad, modalEdit]);

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      {modalCad && <ModalCadastrar setModalCad={setModalCad} />}
      {modalEdit && <ModalEdit data={teste} setModalEdit={setModalEdit} />}

      <Header setAuthenticated={setAuthenticated} />

      <Hello>
        <h1>Olá, {user.name}</h1>
        <small>{user.course_module}</small>
      </Hello>

      <StyledTech>
        <p>Teconologias</p>
        <button onClick={() => setModalCad(true)} className="btn__add">
          +
        </button>
      </StyledTech>

      <TechList>
        {user.techs?.map((element) => (
          <TechCard
            setTeste={setTeste}
            setModalEdit={setModalEdit}
            data={element}
            key={element.id}
          />
        ))}
      </TechList>
    </Container>
  );
}

export default Dashboard;
