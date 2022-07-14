import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDestinations } from "../../store/destinations/destination.selector";
import {
  selectCategories,
  selectActiveCategory
} from "../../store/destinations by category/dc.selector";
import { setDestinationCategory,setCategoryActive } from "../../store/destinations by category/dc.actions";
import CategoryItem from "./CategoryItem";
import { CategoriesWrraper } from "./Categories.styles";

const Categories = () => {
  const dispatch = useDispatch();
  const destinationItems = useSelector(selectDestinations);
  const destinationsCategorySelected = useSelector(selectCategories);
  const isActive = useSelector(selectActiveCategory);
  console.log('isActive',isActive);


  const categorySelectHandler = (categoryName, id) => {
    dispatch(setCategoryActive(id));
    dispatch(setDestinationCategory(destinationItems, categoryName));
  };

  return (
    <CategoriesWrraper>
      {destinationsCategorySelected?.map((category) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          title={category.type?.toUpperCase()}
          onCategorySelect={categorySelectHandler}
          active={isActive === category.id && "active"}
        />
      ))}
    </CategoriesWrraper>
  );
};

export default Categories;
