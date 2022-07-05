import { Container } from "./style";

function TechCard({ data, setModalEdit, setTeste }) {
  return (
    <Container
      id={data.id}
      key={data.id}
      onClick={() => {
        setTeste(data);
        setModalEdit(true);
      }}
    >
      <span>{data.title}</span>
      <small>{data.status}</small>
    </Container>
  );
}

export default TechCard;
