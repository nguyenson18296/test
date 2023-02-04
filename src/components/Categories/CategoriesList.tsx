import React from "react";

import { Category } from "./Category";

import thumb1 from "../../assets/thumbnail-1.png";
import thumb2 from "../../assets/thumbnail-2.png";
import thumb3 from "../../assets/thumbnail-3.png";
import thumb4 from "../../assets/thumbnail-4.png";
import thumb5 from "../../assets/thumbnail-5.png";
import thumb6 from "../../assets/thumbnail-6.png";

export interface IItem {
  id: number;
  title: string;
  negative?: boolean;
  description: React.ReactElement;
  thumbnail: string;
}

export interface ICategories {
  label: string;
  items: IItem[];
}

const mockPetrolData: ICategories = {
  label: "Petrol",
  items: [
    {
      id: 1,
      title: "15 Coins",
      negative: false,
      description: (
        <p>50% discount for every $100 top-up on your Shell Petrol Card</p>
      ),
      thumbnail: thumb1,
    },
    {
      id: 2,
      title: "1,000 Coins",
      negative: true,
      description: (
        <>
          <p>70% discount top-up on your Shell Petrol Card</p>
          <p className="info">Insufficient coins</p>
        </>
      ),
      thumbnail: thumb2,
    },
    {
      id: 3,
      title: "1,000 Coins",
      negative: false,
      description: <p>70% discount top-up on your Shell Petrol Card</p>,
      thumbnail: thumb2,
    },
  ],
};

const mockRentalRebateData: ICategories = {
  label: "Rental Rebate",
  items: [
    {
      id: 1,
      title: "20 Coins",
      description: <p>Get $20 Rental rebate</p>,
      thumbnail: thumb3,
    },
    {
      id: 2,
      title: "15 Coins",
      description: <p>Get $500 Rental rebate</p>,
      thumbnail: thumb4,
    },
    {
      id: 3,
      title: "15 Coins",
      description: <p>Get $500 Rental rebate</p>,
      thumbnail: thumb4,
    },
  ],
};

const mockFnBData: ICategories = {
  label: "Petrol",
  items: [
    {
      id: 1,
      title: "25 Coins",
      description: <p>NTUC Fairprice $50 Voucher"</p>,
      thumbnail: thumb5,
    },
    {
      id: 2,
      title: "5 Coins",
      description: <p>Free Cold Stone Sundae at any flavour!</p>,
      thumbnail: thumb6,
    },
    {
      id: 3,
      title: "5 Coins",
      description: <p>Free Cold Stone Sundae at any flavour!</p>,
      thumbnail: thumb6,
    },
  ],
};

export const CategoriesList: React.FC = () => {
  return (
    <>
      <Category {...mockPetrolData} />
      <Category {...mockRentalRebateData} />
      <Category {...mockFnBData} />
    </>
  );
};
