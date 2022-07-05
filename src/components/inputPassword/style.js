import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-2);
  color: var(--grey-0);
  border: 2px solid var(--grey-0);
  border-radius: 4px;

  width: 330px;
  height: 50px;
  margin-bottom: 2rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: row;

  svg {
    width: 30px;
    height: 30px;
    transform: translateY(6px);

    &:hover {
      cursor: pointer;
    }
  }
`;
export const StyledInput = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  background-color: var(--grey-2);
  color: var(--grey-0);
  padding: 0 1rem;

  &:focus {
    border: none;
  }
`;
