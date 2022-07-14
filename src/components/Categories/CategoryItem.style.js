import styled from "styled-components";

export const CategoriesTitle = styled.p`
  font-size: 0.8rem;
  color: #000;
  margin: 0 5px;

  &.active {
    color: red;
    font-size: 1.5rem;
    position: relative;
    top: -10px;
    left: 0;
  }
`;
