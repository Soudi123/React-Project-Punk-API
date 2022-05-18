
import "./NavBar.scss"
import SearchBox from "../SearchBox/SearchBox"
import React, {useState} from "react"
import FilterItems from "../FilterItem/FilterItem"

import Button from "../Button/ButtonOptions"


  
const NavBar = props => {
 
    

    const {handleNavBar} =props;
    return (

     <div className="nav-bar">
      <div className="nav-bar__content">
      <div className="nav-menu__searchBox">
     
      {/* <SearchBox
     
        ></SearchBox>  */}
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