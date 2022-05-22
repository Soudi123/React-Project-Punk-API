import "./ButtonOptions.scss";

const ButtonOptions = ({ onClick, selected }) => {
  const buttonNames = ["High ABV (> 6.0%)", "Classic Range", "Acidic (PH < 4)"];

  const buttonsJSX = buttonNames.map((buttonName, index) => {
    const buttonStyles = selected.includes(buttonName)
      ? "filter-options-buttons filter-options-buttons--active"
      : "filter-options-buttons";
    return (
      <button onClick={onClick} className={buttonStyles} key={"filter-options" + buttonName + index} id={buttonName}>
        {buttonName}
      </button>
    );
  });

  return <div>{buttonsJSX}</div>;
};

export default ButtonOptions;
