// import { useState , useEffect} from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import CardList from "./components/CardList/CardList";

import beers from "./data/beers.js";

import SearchBox from "./components/SearchBox/SearchBox";
// import Button from "./components/Button/ButtonOptions";
import ButtonOptions from "./components/Button/ButtonOptions";
// import ExploreBeers from "./components/ExploreBeers/ExploreBeers";

const App = () => {
  const [beers, setBeers] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedBeers, setSelectedBeers] = useState("all");
  const getBeers = async () => {
      //getting all Beers
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);

    const data = await response.json();
    //

    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);
  const getBeersByName = async (name) => {
      // getting Beers by name 
    const url = `https://api.punkapi.com/v2/beers?beer_name=${name}`;

    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  useEffect(() => {
    if (searchTerm !== "") getBeersByName(searchTerm);
  }, [searchTerm]);

  //getting beers  by using the first filter 
  const getBeersByFilter = async () => {
    const url = "https://api.punkapi.com/v2/beers?abv_gt";

    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };
  useEffect(() => {
    if (selectedBeers === "High ABV (> 6.0%)") getBeersByFilter(selectedBeers);
  }, [selectedBeers]);

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleClick = (event) => {
    setSelectedBeers(event.target.value);
  };

  const cardListJSX = beers.map((list) => {
    return (
      <CardList
        name={list.name}
        imgURL={list.image_url}
        description={list.description}
      ></CardList>
    );
  });

  return (
    <>
      <div className="app">
        <div className="all-content">
          <section className="navBar_container">
            <SearchBox
              searchTerm={searchTerm}
              handleInput={handleInput}
            ></SearchBox>

            <div className="nav-menu__Button">
              <ButtonOptions
                onClick={handleClick}
                selected={selectedBeers}
              ></ButtonOptions>
            </div>
          </section>

          <section className="Container">{cardListJSX}</section>
        </div>
      </div>
    </>
  );
  //
};

export default App;
