import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavoriteDestinationItems } from "../../store/favorites/favorites.selector";
import FavoriteItem from "./FavoriteItem";
import {
  SearchContainer,
  SearchInputWrapper,
  SearchInput,
  SearchInputIcon,
  FavoritesWrapper,
  FavoriteItemsWrapper,
  FavoritesEmptyLink,
} from "./Favorites.styles";

const Favorites = () => {
  const [searchField, setSearchField] = useState("");
  const favoriteDestinations = useSelector(selectFavoriteDestinationItems);

  const onSearchDestinationHandler = (e) => {
    setSearchField(e.target.value?.toLowerCase());
  };

  const filteredDestinations = favoriteDestinations?.filter((destination) =>
    destination.location.toLowerCase().includes(searchField)
  );

  return (
    <FavoritesWrapper>
      {filteredDestinations?.length === 0 ? (
        <>
          <h2>Looks like you don't have any favorite destinations 😔</h2>
          <FavoritesEmptyLink to={"/"}>
            Let's add some togheter 〉
          </FavoritesEmptyLink>
        </>
      ) : (
        <h2>Your Favorite Destinations... so far 🥰</h2>
      )}
      <SearchContainer>
        <SearchInputWrapper>
          <SearchInputIcon />
          <SearchInput
            onChange={onSearchDestinationHandler}
            type="text"
            placeholder="Search..."
          />
        </SearchInputWrapper>
      </SearchContainer>
      <FavoriteItemsWrapper>
        {filteredDestinations?.map((destionation) => (
          <FavoriteItem
            key={destionation.id}
            id={destionation.id}
            title={destionation.location || destionation.country}
            imageURL={destionation.imageURL}
            price={destionation.price}
          />
        ))}
      </FavoriteItemsWrapper>
    </FavoritesWrapper>
  );
};

export default Favorites;
