import { faDatabase, faHistory, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Text } from "@nextui-org/react";
export const Sidenav = () => {
  return (

    <div className="sidenav_parent">
        <Text h2 className="sidenav__mainhead">Model Builder</Text>
        <nav className="sidenav__cont">
            <ul className="sidenav__listitems">
                <li >
                    <a href=""> <FontAwesomeIcon className="sidenav_icon" icon={faDatabase}/> <Text h3 className="sidenav__mainhed">Predict</Text></a>
                </li>
                <li>
                    <a href="">  <FontAwesomeIcon className="sidenav_icon" icon={faSearch}/> <Text h3 className="sidenav__mainhed">Explore</Text></a>
                </li>
                <li>
                    <a href="">  <FontAwesomeIcon className="sidenav_icon" icon={faHistory}/> <Text h3 className="sidenav__mainhed">History</Text></a>
                </li>
            </ul>
        </nav>
    </div>
  );
};
