import "./ButtonOptions.scss";

const ButtonOptions = ({ onClick, selected }) => {
  const filters = ["High ABV (> 6.0%)","Classic Range","Acidic (PH < 4)"] ;
  const ButtonOptionsJSX= filters.map((filter,index) => {
    return( 
    <button className="filter-options-buttons" key={"filter-options"+filter+index} value={filter}>
       {filter}
    </button>
    );
  });
  return (
   
   <div>{ButtonOptionsJSX}</div>
  
    
   

  );
};

export default ButtonOptions;
