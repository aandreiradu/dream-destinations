import styled from "styled-components";
import { Link } from "react-router-dom";

export const FavoriteItemWrapper = styled.div`
  position: relative;
  background: #fff;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  border-radius: 12px;

  margin: 20px 0;

  &:last-child {
    margin-bottom: 100px;
  }
`;

export const FavoriteItemImageContainer = styled.div`
  width: 80px;
  height: 80px;
`;

export const FavoriteItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const FavoriteItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const FavoriteItemText = styled.span`
  padding: 0.25rem;
  margin: 5px 0;
`;

export const FavoriteItemDetailsButton = styled(Link)`
  text-decoration: none;
  width: 100px;
  margin: 10px 0;
  border: none;
  padding: 0.5rem 0;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  color: #fff;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
`;

export const FavoriteItemDeleteButton = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  border: none;
  background: none;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  padding: 0 0.25rem;
  border-radius: 50%;
  color: #fff;
  font-size: 1.2rem;
`;
