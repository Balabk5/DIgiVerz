import { faDatabase, faHistory, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Text } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export const Sidenav = () => {
    
        const navLinkSty1es = ({isActive}) =>{
            return{
                
                
                color: isActive ? 'blue' : 'black' 
            }
        }
  return (

    <div className="sidenav_parent">
        <Text h2 className="sidenav__mainhead">Model Builder</Text>
        <nav className="sidenav__cont">
            <ul className="sidenav__listitems">
                <li >
                    <NavLink style={navLinkSty1es}  to='/modelbuilder' ><FontAwesomeIcon className="sidenav_icon" icon={faDatabase}/> <h3 className="sidenav__mainhed">Predict</h3></NavLink>
                     
                </li>
                <li>
                <NavLink style={navLinkSty1es} to='/mbresult' ><FontAwesomeIcon className="sidenav_icon" icon={faSearch}/> <h3 className="sidenav__mainhed">Explore</h3></NavLink>
                    
                </li>
                <li>
                <NavLink style={navLinkSty1es} to='/mbhistory' > <FontAwesomeIcon className="sidenav_icon" icon={faHistory}/> <h3 className="sidenav__mainhed">History</h3></NavLink>
                    
                </li>
            </ul>
        </nav>
    </div>
  );
};
