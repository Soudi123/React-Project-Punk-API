import "./ButtonOptions.scss";

const ButtonOptions = ({ onClick, selected }) => {
  const filters = ["High ABV (> 6.0%)","Classic Range","Acidic (PH < 4)"] ;
  const ButtonOptionsJSX= filters.map((filter,index) => {
    return( 
    <option key={"filter-options"+filter+index} value={filter}>
       {filter}
    </option>
    );
  });
  return (
    <button  className="filter-option-button"onClick={onClick} value={selected}>{ButtonOptionsJSX}
    </button>

  );
};

export default ButtonOptions;
