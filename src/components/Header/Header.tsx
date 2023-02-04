import React from "react";

import { CoinBalance } from "../CoinBalance/CoinBalance";
import backButton from "../../assets/icon-back.svg";

import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <header>
      <button className="btn-back-button">
        <img src={backButton} alt="icon-back" />
      </button>
      <h1>Silver Tier</h1>
      <p>
        In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
        exclusive rewards.
      </p>
      <CoinBalance />
    </header>
  );
};
