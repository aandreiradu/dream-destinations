import styled from "styled-components";

export const CategoriesWrraper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin: 40px 10px 20px 10px;
  height: 70px;
`;

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

    -webkit-transition: font-size 0.3s ease-in;
    -moz-transition: font-size 0.3s ease-in;
    -o-transition: font-size 0.3s ease-in;
    transition: font-size 0.3s ease-in;

  }
`;
