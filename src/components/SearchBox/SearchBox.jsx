import "./SearchBox.scss"

const SearchBox = props => {
    const { label} = props;
  
    const capitalizedLabel = label[0].toUpperCase() + label.slice(1);
   //charlie -> C+ harlie = Charlie
    return (
      <form className="search-box">
        <label htmlFor={label} className="search-box__label">
          {capitalizedLabel}
        </label>
        <input type="text" name={label} className="search-box__input" />
      </form>
    );
  };
  
  export default SearchBox;