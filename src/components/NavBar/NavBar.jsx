
import "./NavBar.scss"
import SearchBox from "../SearchBox/SearchBox"
import React, {useState} from "react"
import FilterItems from "../FilterItem/FilterItem"

import Button from "../Button/Button"


  
const NavBar = props => {
  const [searchTerm,setSearchTerm]=useState("")
  const handleInput=(event)=>{
      setSearchTerm(event.target.value);
    };

    const {handleNavBar} =props;
    return (

     <div className="nav-bar">
      <div className="nav-bar__content">
      <div className="nav-menu__searchBox">
     
      <SearchBox
      searchTerm={searchTerm} handleInput={handleInput}
        ></SearchBox> 
        </div>
       
        <div className="nav-menu__Button">
        <Button label="High ABV (> 6.0%)"></Button>
        <Button label="Classic Range"></Button>
        <Button label="Acidic (PH < 4)"></Button>
        </div>
       

        {/* <p className="nav-menu__items">high ABV</p>
        <p className="nav-menu__items">Classic range</p>
        <p className="nav-menu__items">Acidic</p> */}
       {/* <div nav-menu__items><FilterItems ></FilterItems></div>  */}
      </div>
    </div>
  );
    
}
export default NavBar; 