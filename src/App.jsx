// import { useState , useEffect} from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import CardList from "./components/CardList/CardList";
import CardListContainer from "./containers/CardListContainer/CardListContainer";
import beers from "./data/beers.js";
import NavBar from "./components/NavBar/NavBar";
import SearchBox from "./components/SearchBox/SearchBox";
import Button from "./components/Button/Button";

const App = () => {
  const [beers, setBeers] = useState([]);
  
  
  const [filteredBeers, setFilteredBeers] = useState("all");
  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);
   
    const data = await response.json();
    //
   
    setBeers(data);
  };
  
  useEffect(() => {
    getBeers();
  }, []);
  const getBeersByName = async name => {
      const url =`https://api.punkapi.com/v2/beers/${name}`;
      console.log(data)
      const response = await fetch (url);
      const data = await response.json();
     
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
         
            <NavBar>
              
            </NavBar>
            
          </section>
          
          <section className="Container">{cardListJSX}</section>
          
        </div>
      </div>
    </>
  );
  //      
};

export default App;
