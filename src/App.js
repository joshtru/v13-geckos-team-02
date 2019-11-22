import React from "react";
import { Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import HomePage from "./containers/homePage/homePage";
import MoviesPage from "./containers/moviesPage/moviesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <HomePage />
        <MoviesPage />
      </Switch>
    </div>
  );
}

export default App;
