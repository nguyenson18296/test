import React from "react";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import "./Layout.scss";

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
};
