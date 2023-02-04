import React from "react";

import "./CoinBalance.scss";

const mockCoinBalance = {
  coinBalance: 340,
  nextRank: 2000,
  paid: 1200,
  updatedDate: "02/11/2021",
};

export const CoinBalance: React.FC = () => {
  const widthOfProgressPaidBar: React.CSSProperties = {
    width: `${(mockCoinBalance.paid / mockCoinBalance.nextRank) * 100}%`,
  };

  return (
    <div className="coin-balance-wrap">
      <div className="available-coin-label">Available Coin balance</div>
      <h1 className="available-coin">{mockCoinBalance.coinBalance}</h1>
      <div className="progress">
        <div
          className="progress-completed"
          style={{
            ...widthOfProgressPaidBar,
          }}
        />
      </div>
      <p className="coin-balance-description">
        You have paid rental fee for <span>${mockCoinBalance.paid}</span>. Pay
        more <span>${mockCoinBalance.nextRank - mockCoinBalance.paid}</span> to
        achieve Gold Tier.
      </p>
      <div className="view-benefit-button">
        <a href="/">View tier benefits</a>
      </div>
      <button className="btn-action">My Coupons</button>
      <div className="updated-date">
        Updated: <span>{mockCoinBalance.updatedDate}</span>
      </div>
    </div>
  );
};
