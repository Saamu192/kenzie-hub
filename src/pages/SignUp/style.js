import styled, { keyframes } from "styled-components";

const effect = keyframes`
  0% {
    transform: translate(500px);
  }
  100% {
    transform: translate(0px);
  }
  


`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  align-items: center;
  justify-content: center;

  height: 100vh;
  max-height: 100vh;
  overflow: auto;

  padding: 1rem;
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
    animation: ${effect} 0.7s normal;
    max-width: 350px;

    label {
      font-weight: 400;
      font-size: 12px;
      margin-bottom: 1rem;

      color: var(--grey-0);

      span {
        font-weight: 400;
        font-size: 12px;
        color: var(--negative);
      }
    }

    textarea {
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
  }
`;

export const Paper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 1rem;

  background-color: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  overflow: auto;
  overflow-x: hidden;

  small {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: var(--grey-1);
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  max-width: 350px;

  margin-top: 50px;

  img {
    width: 144px;
    height: 20px;

    margin-bottom: 2rem;
  }

  .link__back {
    width: 80px;
    height: 2rem;

    color: var(--grey-0);
    background: var(--grey-3);
    border-radius: 4px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
