import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;

  display: flex;
  flex-direction: row;
  background-color: #000000;
  align-items: flex-start;
  justify-content: space-between;
  position: sticky;

  padding: 1rem;

  border-bottom: 0.5px solid var(--grey-1);
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
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;
