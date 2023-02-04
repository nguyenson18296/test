import React from "react";

import { ICategories } from "./CategoriesList";
import { Item } from "../Item/Item";

import "./Category.scss";

export const Category: React.FC<ICategories> = ({ label, items }) => {
  return (
    <div className="category-wrap">
      <h2 className="category-label">{label}</h2>
      <div className="items-list">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
