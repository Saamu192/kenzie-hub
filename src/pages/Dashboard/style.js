import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  align-items: center;
  justify-content: flex-start;

  height: 100vh;
`;

export const Hello = styled.div`
  width: 100%;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  border-bottom: 0.5px solid var(--grey-1);

  h1 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  small {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: var(--grey-1);
  }
`;

export const StyledTech = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  p {
    color: var(--grey-0);
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }

  .btn__add {
    width: 2rem;
    height: 2rem;

    color: var(--grey-0);
    background: var(--grey-3);
    border-radius: 4px;
    text-align: center;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const TechList = styled.div`
  height: 350px;
  width: 100%;
  padding: 1rem;
  border-radius: 4px;

  background-color: var(--grey-3);

  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow: auto;
`;
