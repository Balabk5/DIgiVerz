import React, { useState } from "react";
import menuItems from "../menuitems";
import { Text } from "@nextui-org/react";
import home_analytics from "../../assests/Home__analytics_pic.png";
import logo from "../../assests/logo_main.png";
export const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="home__parent">
      <nav className="navbar">
        <h1 className="brandname">Digiverz</h1>
        <img className="logo_main" src={logo} alt="" />
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
                {/* <Link
                className={item.cName}
                  to={item.url}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {item.title}
                </Link> */}
              </li>
            );
          })}
        </ul>
        <div className="menu-icon" onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
      <div className="home__main_cont">
        <Text
          h1
          size={60}
          className="home__main_cont_hed"
          css={{
            textGradient: "45deg, $blue600 -20%, $black 80%",
          }}
          weight="bold"
        >
          Get more Analytics From{" "}
        </Text>
        <Text
          h1
          size={60}
          className="home__main_cont_hed"
          css={{
            textGradient: "45deg, $blue600 -5%, $black 60%",
          }}
          weight="bold"
        >
          your Own Data
        </Text>

        <button className="prediction-btn">Get Started</button>
        <img className="homepage__main_img" src={home_analytics} alt="" />
        <section id="section04" class="demo">
          
          <a href="#section05">
            <span></span>
          </a>
        </section>
      </div>
    </div>
  );
};
