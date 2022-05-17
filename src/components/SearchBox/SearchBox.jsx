import "./SearchBox.scss"

const SearchBox = props => {
    const { searchTerm,handleInput} = props;
  
    // const capitalizedLabel = label[0].toUpperCase() + label.slice(1);
   //charlie -> C+ harlie = Charlie
    return (
      <form className="search-box">
      
        <input type="text"  value={searchTerm} onInput={handleInput} className="search-box__input" placeholder="SEARCH.."/>
      </form>
    );
  };
  
  export default SearchBox;