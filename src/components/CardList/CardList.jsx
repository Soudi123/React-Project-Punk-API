import React from "react"
import "./CardList.scss"



const CardList=props =>{
    const {name,imgURL,description} = props

return (
    <div className="cardList_content">
        <img src={imgURL} className="cardList_content__img" />
        <p className="cardList_content__name">{name}</p>
      <p className="cardList_content__info">{description}</p>
      
    </div>
);
};
// const CardList = ({beersDetails})=> {
//     // const {imgURL,name, description} = props;
//     const cardListJSX = beersDetails.map((beers) =>(

//         <div className="BeerCards">
        
//         <p>{beers.name}</p>
//         <p>{beers.description}</p>
//     </div>)
//     )
//     return<div className="BeerCards_container">{cardListJSX}</div>
   
// }
export default CardList;