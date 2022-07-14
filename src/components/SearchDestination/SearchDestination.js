import React from "react";
import { SearchIcon } from "../../assets/Icons/IconsExport";

import {
  SearchDestinationButton,
  SearchDestinationTitle,
  SearchDestinationWrapper,
  SearchDestinationTitleWrapper,
} from "./SearchDestination.style";

const SearchDestination = () => {
  return (
    <SearchDestinationWrapper>
      <SearchDestinationTitleWrapper>
        <SearchDestinationTitle>
          Find your dream adventure destination
        </SearchDestinationTitle>
      </SearchDestinationTitleWrapper>
      <SearchDestinationButton>
        <SearchIcon />
      </SearchDestinationButton>
    </SearchDestinationWrapper>
  );
};

export default SearchDestination;
