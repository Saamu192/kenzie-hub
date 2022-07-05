import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  align-items: center;
  justify-content: center;

  height: 100vh;

  img {
    width: 144px;
    height: 20px;

    margin-bottom: 2rem;
  }

  span {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      font-weight: 400;
      font-size: 12px;
      margin-bottom: 1rem;

      color: var(--grey-0);
    }
  }
`;

export const Paper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 1rem;

  width: 90%;
  max-width: 380px;

  background-color: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  small {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: var(--grey-1);
  }
`;
