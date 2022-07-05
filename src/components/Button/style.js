import styled from "styled-components";

export const StyledButton = styled.button`
  width: 324px;
  height: 48px;

  font-family: "Inter";

  font-size: 16px;
  line-height: 26px;

  background-color: ${(props) => `var(${props.color})`};
  color: var(--grey-0);
  border: 2px solid ${(props) => `var(${props.color})`};
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;
