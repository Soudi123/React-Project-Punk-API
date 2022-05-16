import "../CardListContainer/CardListContainer.scss";
import CardList from "../../components/CardList/CardList";

const CardListContainer = ({cards})=>{
    const cardsArr= cards.map((card,index) =>{
        return (<CardList name={card.name} imgURL={card.imgURL} description={card.description}>

        </CardList>
    
            );
        });

        return <div>{cardsArr}</div>

   
}
export default CardListContainer;