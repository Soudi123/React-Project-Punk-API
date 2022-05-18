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

   

export default CardList;