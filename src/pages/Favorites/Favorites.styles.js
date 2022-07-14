import styled from "styled-components";
import { SearchIcon } from "../../assets/Icons/IconsExport";
import { Link } from "react-router-dom";

export const FavoritesWrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  width: 100%;
`;

export const SearchContainer = styled.div`
  width: 100%;
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
  border-bottom: 1px solid #2a2a72;
  margin: 10px 0;
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  border: none;
  background: none;
  padding: 0 0.25rem;
  flex: 1;

  &:active,
  &:focus {
    outline: none;
  }
`;

export const SearchInputIcon = styled(SearchIcon)`
  width: 25px;
  height: 25px;

  padding: 0.25rem;
  border-radius: 12px;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
`;

export const FavoriteItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const FavoritesEmptyLink = styled(Link)`
  padding: 0 0.25rem;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  color: #fff;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
`;
