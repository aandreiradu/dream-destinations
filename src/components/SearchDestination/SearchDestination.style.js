import styled from "styled-components";

export const SearchDestinationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem 0rem 1rem;
`;

export const SearchDestinationTitleWrapper = styled.div`
    width: 85%;
`;

export const SearchDestinationTitle = styled.h2`
  font-size: 1.5rem;
  color: #000;
  letter-spacing: .8px;
  color: #1f1f1f;
  
`;

export const SearchDestinationButton = styled.button`
  cursor:pointer;
  border: none;
  padding: .25rem;
  border-radius:12px;  
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  display: flex;
  align-items: center;

  &:active,
  &:focus{
    outline:none;
  }

  svg {
    width: 25px;
    height: 25px;
    color: #fff;
  }
`;
