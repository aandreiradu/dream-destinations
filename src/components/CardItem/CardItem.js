import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addDestinationToFavorites,
  removeDestinationFromFavorites,
} from "../../store/favorites/favorites.actions";
import { selectFavoriteDestinationItems } from "../../store/favorites/favorites.selector";
import {
  HeartStraightIcon,
  RedFillHeart,
} from "../../assets/Icons/IconsExport";
import {
  CardItemWrapper,
  CardItemImage,
  CardItemOverlay,
  CardItemTitle,
  CardItemCity,
  CartItemContentWrapper,
  CartItemContent,
  CartItemAddToFavorites,
  CartItemPricePeriodPersons
} from "./CardItem.style";

const CardItem = (props) => {
  const navigate = useNavigate();
  const { imageURL, country, location, price, id, currency } = props;
  const destinationItems = useSelector(selectFavoriteDestinationItems);
  const favoriteDestinations = useSelector(selectFavoriteDestinationItems);
  const dispatch = useDispatch();

  const addToFavoritesHandler = (e) => {
    e.stopPropagation();

    const itsAlreadyInFav = favoriteDestinations?.find(
      (destination) => destination.id === id
    );

    if (itsAlreadyInFav) {
      dispatch(removeDestinationFromFavorites(favoriteDestinations, { id }));
      return;
    }

    const destinationToAdd = {
      id,
      price,
      imageURL,
      country,
      location,
      currency,
    };
    dispatch(addDestinationToFavorites(destinationItems, destinationToAdd));
  };

  const goToDestinationDetailsHandler = (e) => {
    navigate(`/destination/${id}`);
  };

  const getHeartIcon = (id) => {
    const itsAlreadyInFav = destinationItems?.find(
      (destination) => destination.id == id
    );
    if (itsAlreadyInFav) {
      return <RedFillHeart />;
    } else {
      return <HeartStraightIcon />;
    }
  };

  return (
    <CardItemWrapper onClick={goToDestinationDetailsHandler}>
      <CardItemImage src={imageURL || ""} alt={location} />
      <CardItemOverlay>
        <CardItemTitle>{country}</CardItemTitle>
        <CartItemContentWrapper>
          <CardItemCity>{location || country}</CardItemCity>
          <CartItemContent>
            <CartItemPricePeriodPersons>
            <p>{`${price[0]}-${price[1]}`} &euro; / Person</p>
            <span>For 2 weeks</span>
            </CartItemPricePeriodPersons>
            <CartItemAddToFavorites onClick={addToFavoritesHandler}>
              {getHeartIcon(id)}
            </CartItemAddToFavorites>
          </CartItemContent>
        </CartItemContentWrapper>
      </CardItemOverlay>
    </CardItemWrapper>
  );
};

export default CardItem;
