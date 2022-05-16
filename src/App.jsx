// import { useState , useEffect} from "react";
import React from "react";
import"./App.scss";
import CardList from "./components/CardList/CardList";
import CardListContainer from "./containers/CardListContainer/CardListContainer";
import beers from "./data/beers.js"
import NavBar from "./components/NavBar/NavBar";
import SearchBox from "./components/SearchBox/SearchBox";







const App = () => {
 





    const cardListJSX=beers.map(list =>{
        return<CardList name={list.name} imgURL={list.image_url} description={list.description}></CardList>
    });
//     const beersArray = beers.map((beer) => beer.name);
//   const beersDescriptionArray = beers.map((beer) => beer.description);
// console.log(beersArray)
//   const beersDetails = [{ beersArray }, { beersDescriptionArray },{beersImages}];
//   console.log(beersDetails);
//   const beersImages= beers.map((images)=> images.image_url)




  
    return (
    <> 
    <div className="app">
        <div className="all-content">
        <section className="navBar_container"><NavBar></NavBar></section>
        {/* <section className="CardList_container"><CardListContainer cards={beers}></CardListContainer></section> */}
        <section className="Container">{cardListJSX}</section>
       {/* <section><CardList  className="BeerCards" beersDetails={beers} ></CardList>
           </section> */}
           </div> 
           </div>
           </>
          
    );
//       <div className="app">
//         <h1>Random User Generator</h1>
//         <Button label="Get random User" onClick={getUsers}></Button>
//         <RangeInput
//         label={"Number of users: "} 
//         value={numbersOfUsers} 
//         id={"user-range"} 
//         onChange={handleInputChange} >
  
//         </RangeInput>
//         <RadioButtons 
//         onClick= {handleClick} 
//         options={["All","Female","Male"]}
//          caption={"Select Gender"} ></RadioButtons>
//         {users.length>0 && (
//         // <ProfileCard 
//         // name={users[0].name.first+ " " +users[0].name.last}
//         //  image={users[0].picture.large} email={users[0].email} 
//         //  phoneNumber={users[0].phone}></ProfileCard>)}
//         <ProfileContainer cards={users}></ProfileContainer>
//         )}
//         </div>
 
    
   };
  
  export default App;
  