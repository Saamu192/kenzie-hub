import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: var(--grey-4);
  border-radius: 10px;

  padding: 1rem;

  &:hover {
    background-color: var(--grey-2);
    cursor: pointer;
  }

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
