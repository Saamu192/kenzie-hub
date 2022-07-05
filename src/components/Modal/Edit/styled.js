import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  inset: 0;

  span {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    max-width: 300px;

    overflow-y: hidden;
  }

  small {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    &:hover {
      color: var(--grey-0);
      cursor: pointer;
    }
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey-2);
  width: 100%;
  padding: 1rem;

  small {
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;

    color: var(--grey-0);
  }

  .close {
    width: 15px;
    height: 15px;

    color: var(--grey-1);

    &:hover {
      color: var(--grey-0);
      cursor: pointer;
    }
  }
`;

export const ModalBox = styled.div`
  background-color: #000000;

  min-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  transition: 0.8s;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;

  label {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 1rem;

    color: var(--grey-0);
  }

  select {
    background-color: var(--grey-2);
    color: var(--grey-0);
    border: 2px solid var(--grey-0);
    border-radius: 4px;
    padding: 0.5rem;
    width: 330px;
    height: 50px;
    margin-bottom: 2rem;

    font-family: "Inter";
    font-size: 16px;
    line-height: 26px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  width: 320px;

  button {
    max-width: 200px;
  }

  button + button {
    max-width: 80px;
  }
`;
