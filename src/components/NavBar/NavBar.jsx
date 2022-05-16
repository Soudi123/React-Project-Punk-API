import react from "react"
import "./NavBar.scss"
import SearchBox from "../SearchBox/SearchBox";


const NavBar = props => {
    const {handleNavBar} =props;
    return (

     <div className="nav-bar">
      <div className="nav-bar__content">
       
     
      <SearchBox
        label={"beers"}>Search...</SearchBox>
        <p className="nav-menu__items">high ABV</p>
        <p className="nav-menu__items">Classic range</p>
        <p className="nav-menu__items">Acidic</p>
      </div>
    </div>
  );
    
}
export default NavBar; 