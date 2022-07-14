import React from "react";
import Categories from "../../components/Categories/Categories";
import CardsByCategory from "../../components/CardsByCategory/CardsByCategory";
import { HomeWrapper } from "./Home.style";
import SearchDestination from "../../components/SearchDestination/SearchDestination";

const Home = () => {
  

  return (
    <HomeWrapper>
      <SearchDestination />
      <Categories />
      <CardsByCategory/>
    </HomeWrapper>
  );
};

export default Home;
