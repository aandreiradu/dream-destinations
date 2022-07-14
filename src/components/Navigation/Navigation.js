import React from "react";
import { useSelector } from "react-redux";
import { getFavoriteDestinationscount } from "../../store/favorites/favorites.selector";
import {
  HomeIcon,
  FavoritesIcon,
  ProfileIcon,
} from "../../assets/Icons/IconsExport";
import {
  NavigationWrapper,
  NavigationUL,
  NavigationItem,
  FavoriteDestinationsCount,
  CountWrapper,
} from "./Navigation.styles";

const Navigation = () => {
  const favoritesCount = useSelector(getFavoriteDestinationscount);

  return (
    <NavigationWrapper>
      <NavigationUL>
        <NavigationItem to={"/"}>
          <HomeIcon />
          Home
        </NavigationItem>
        <NavigationItem to={"/favorites"}>
          <CountWrapper>
            <FavoriteDestinationsCount>
              {favoritesCount > 0 && favoritesCount}
            </FavoriteDestinationsCount>
            <FavoritesIcon />
          </CountWrapper>
          Favorites
        </NavigationItem>
        <NavigationItem to={"/"}>
          <ProfileIcon />
            Account
        </NavigationItem>
      </NavigationUL>
    </NavigationWrapper>
  );
};

export default Navigation;
