import React from "react";

import { Layout } from "./components/Layout/Layout";
import { CategoriesList } from "./components/Categories/CategoriesList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <CategoriesList />
      </Layout>
    </div>
  );
}

export default App;
