import React, { useState } from "react";
//BRING IN COMPONENTS WE NEED
import SearchBox from "../../components/SearchBox/SearchBox";
import CardList from "../CardList/CardList";
import ExploreBeers from "./ExploreBeers.scss"
//HOOK THE TWO COMPONENTS TOGETHER
// SEARCH BOX
//- WE NEED TO GET THE SEARCH TERM FROM IT
//eXPLORE ALBUMS
//-WE NEED TO STORE THE SEARCH TERM -> USESTATE()
//- USE SEARCH TERM TO FILTER THROUGH THE ALBUMS ARRAY

//ALBUM TILES
//- GIVE THE FILTERED ALBUMS ARRAY TO OUR ALBUM TILES

const ExploreBeers = ({ beersArr }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    //EVENT IS AN OBJECT ABOUT THE EVENT THAT HAS JUST HAPPEND
    //TARGET IS THE ELEMENT THAT CAUSED / TRIGGERED THE EVENT //VALUE IS CURRENT VALUE OF TH EINPUT /
    //WHAT HAS BEEN TYPED
    setSearchTerm(event.target.value);
  };
  //FILTER-> FUNCTION THAT RETURNS TRUE OR FALSE
  //-TRUE-> IT WILL BE ADDED TO A NEW ARRAY
  //-FALSE-> IT WONT BE/ SKIPPED
  const filteredBeers = beersArr.filter((beers) => {
    const strBeersLower = beers.strBeers.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    if (strBeersLower.includes(searchTermLower)) {
      return true;
    } else {
      return false;
    }
    // return strAlbumLower.includes(searchTermLower)
  });
  //for props props.albumsArr
  return (
    <>
      {/*needs these props ->label,searchTerm,handleInput*/}
      {/* <p>{searchTerm}</p> */}
      <SearchBox
       
        searchTerm={searchTerm}
        handleInput={handleInput}
      ></SearchBox>
     
      {/* <AlbumTiles title="Results" albumsArr={filteredAlbums}></AlbumTiles>{" "} */}
      {/*for using props props.albumsArr*/}
    </>
  );
};
export default ExploreBeers;
