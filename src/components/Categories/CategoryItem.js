import React from "react";
import { useCallback } from "react";

import { CategoriesTitle } from "./Categories.styles";

const CategoryItem = (props) => {
  const { id, title, active } = props;

  const setActiveCategoryHandler = useCallback((e) => {
    props.onCategorySelect(e.target.textContent.toLowerCase(), e.target.id);
  }, []);

  return (
    <CategoriesTitle
      id={id}
      onClick={(event) => setActiveCategoryHandler(event)}
      className={active ? "active" : ""}
    >
      {title}
    </CategoriesTitle>
  );
};

export default CategoryItem;
