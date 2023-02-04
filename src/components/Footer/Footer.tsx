import React from "react";

import home from "../../assets/icon-home.svg";
import menu from "../../assets/icon-menu.svg";
import notification from "../../assets/icon-notification.svg";
import user from "../../assets/icon-user.svg";

import "./Footer.scss";

interface IFooterButton {
  id: number;
  label: string;
  isHavingNotification: boolean;
  icon: string;
}

const mockedFooterItemsList: IFooterButton[] = [
  {
    id: 1,
    label: "home",
    icon: home,
    isHavingNotification: false,
  },
  {
    id: 2,
    label: "notification",
    icon: notification,
    isHavingNotification: true,
  },
  {
    id: 3,
    label: "menu",
    icon: menu,
    isHavingNotification: false,
  },
  {
    id: 4,
    label: "user",
    icon: user,
    isHavingNotification: false,
  },
];

export const Footer: React.FC = () => {
  return (
    <footer>
      <ul className="footer-items-list">
        {mockedFooterItemsList.map((item) => (
          <div key={item.id} className="footer-item">
            <img src={item.icon} alt={item.label} className="item-icon" />
            {item.isHavingNotification && (
              <span className="notification-notice" />
            )}
          </div>
        ))}
      </ul>
    </footer>
  );
};
