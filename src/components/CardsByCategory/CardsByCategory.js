import React from "react";
import { useSelector } from "react-redux";
import {
  userSelectedCategory,
  selectDestinationsBasedOnCategory,
} from "../../store/destinations by category/dc.selector";
import CardItem from "../CardItem/CardItem";
import {
  CardsByCategoryWrapper,
  NoDestinationsForSelectedCategory,
} from "./CardsByCategory.styles";

const CardsByCategory = () => {
  const destinationsByCategory = useSelector(selectDestinationsBasedOnCategory);
  const selectedCategory = useSelector(userSelectedCategory);

  return (
    <CardsByCategoryWrapper>
      {destinationsByCategory.length === 0 ? (
        <NoDestinationsForSelectedCategory>{`For ${selectedCategory?.toUpperCase()} category, we couldn't found any destinations right now 😕`}</NoDestinationsForSelectedCategory>
      ) : (
        destinationsByCategory?.map((destination) => (
          <CardItem
            key={destination.id}
            id={destination.id}
            imageURL={destination.imageURL}
            country={destination.country}
            location={destination.location}
            price={destination.prices}
            currency={destination.currency}
          />
        ))
      )}
    </CardsByCategoryWrapper>
  );
};

export default CardsByCategory;
