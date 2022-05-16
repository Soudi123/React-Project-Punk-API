import react from "react"
import "./NavBar.scss"
import SearchBox from "../SearchBox/SearchBox";


const NavBar = props => {
    const {handleNavBar} =props;
    return (

     <div className="nav-bar">
      <div className="nav-bar__content">
       
      <p>search items</p>
      <SearchBox
        label={"beers"}></SearchBox>
        <p className="nav-menu__items">search items</p>
        <p className="nav-menu__items">range</p>
        <p className="nav-menu__items">filtered items</p>
      </div>
    </div>
  );
    
}
export default NavBar; 