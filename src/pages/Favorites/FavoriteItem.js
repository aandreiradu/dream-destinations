import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeDestinationFromFavorites } from "../../store/favorites/favorites.actions";
import { selectFavoriteDestinationItems  } from '../../store/favorites/favorites.selector';

import {
  FavoriteItemWrapper,
  FavoriteItemImageContainer,
  FavoriteItemImage,
  FavoriteItemContent,
  FavoriteItemText,
  FavoriteItemDetailsButton,
  FavoriteItemDeleteButton,
} from "./FavoriteItem.style";

const FavoritesItem = (props) => {
  const favoriteDestinations = useSelector(selectFavoriteDestinationItems);
  const { title, imageURL, price, id } = props;
  const dispatch = useDispatch();

  const removeDestinationHandler = () => {
    dispatch(removeDestinationFromFavorites(favoriteDestinations,{title,id}));
  };

  return (
    <FavoriteItemWrapper>
      <FavoriteItemDeleteButton onClick={removeDestinationHandler}>X</FavoriteItemDeleteButton>
      <FavoriteItemImageContainer>
        <FavoriteItemImage src={imageURL} alt={title} />
      </FavoriteItemImageContainer>
      <FavoriteItemContent>
        <FavoriteItemText>{title}</FavoriteItemText>
        <FavoriteItemText>{`Price Range ${price[0]} - ${price[1]}`} &euro;</FavoriteItemText>
        <FavoriteItemDetailsButton to={`/destination/${id}`}>
          More details
        </FavoriteItemDetailsButton>
      </FavoriteItemContent>
    </FavoriteItemWrapper>
  );
};

export default FavoritesItem;
