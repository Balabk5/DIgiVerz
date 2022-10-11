import React, { useState } from "react";
import menuItems from "../menuitems";
import { Text } from "@nextui-org/react";
import home_analytics from "../../assests/Home__analytics_pic.png";
import logo from "../../assests/logo_main.png";
import chart_icon from "../../assests/homepage/1.png"
import pie_chart from "../../assests/homepage/2.png"
import data_file from "../../assests/homepage/3.png"
import chartandpie from "../../assests/homepage/4.png"
import datacircle from "../../assests/homepage/5.png"
import dataserver from "../../assests/homepage/6.png"
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
              <li className="list__items_navbar" key={index}>
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
        <div className="home__icons__cont">
          <div className="home__icons__cont1 home__iconshape">
            <div className="chart__icon__home icon__set0">
              <img className="chart__icon__ homeicon__css" src={chart_icon} alt="" />
            </div>
            <div className="data__icon__home icon__set1">
            <img className="chart__icon__ homeicon__css" src={pie_chart} alt="" />
            </div>
            <div className="dataserver__icon__home icon__set0">
            <img className="chart__icon__ homeicon__css" src={data_file} alt="" />
            </div>
          </div>
          <div className="home__icon_cont2 home__iconshape">
            <img className="homepage__main_img" src={home_analytics} alt="" />
          </div>
          <div className="home__icons__cont3 home__iconshape">
          <div className="chart__icon__home icon__set">
              <img className="chart__icon__ homeicon__css" src={dataserver} alt="" />
            </div>
            <div className="data__icon__home icon__set2">
            <img className="chart__icon__ homeicon__css" src={datacircle} alt="" />
            </div>
            <div className="dataserver__icon__home icon__set">
            <img className="chart__icon__ homeicon__css" src={chartandpie} alt="" />
            </div>
          </div>
        </div>

        <section id="section04" class="demo">
          <a href="#section05">
            <span></span>
          </a>
        </section>
      </div>
    </div>
  );
};
