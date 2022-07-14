import styled from "styled-components";

export const CardsByCategoryWrapper = styled.section`
  display: flex;
  position: relative;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NoDestinationsForSelectedCategory = styled.p`
  width: 100%;
  text-align: center;
  padding: .25rem 2rem;
  font-weight: bold;
`;
