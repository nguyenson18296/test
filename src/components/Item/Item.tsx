import React from "react";

import { IItem } from "../Categories/CategoriesList";

import iconNegative from "../../assets/icon-negative.svg";

import "./Item.scss";

export const Item: React.FC<IItem> = ({
  title,
  thumbnail,
  description,
  negative,
}) => {
  return (
    <div className="item-wrap">
      <div className="item-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="item-content">
        <h3 className={`item-title ${negative && "item-title-negative"}`}>
          {negative && <img src={iconNegative} alt="icon" />}
          {title}
        </h3>
        {description}
      </div>
    </div>
  );
};
