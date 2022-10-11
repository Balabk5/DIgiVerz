import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import { Button, Text } from "@nextui-org/react";
import { Sidenav } from "../../sidenav/Sidenav";
import { Select, Slider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const Modelbuilder = () => {
  const Country_array = [
    { value: "United States", text: "United States" },
    { value: "India", text: "India" },
    { value: "United Kingdom", text: "United Kingdom" },
    { value: "Germany", text: "Germany" },
    { value: "Canada", text: "Canada" },
    { value: "Brazil", text: "Brazil" },
    { value: "France", text: "France" },
    { value: "Spain", text: "Spain" },
    { value: "Australia", text: "Australia" },
    { value: "Netherlands", text: "Netherlands" },
    { value: "Poland", text: "Poland" },
    { value: "Italy", text: "Italy" },
    { value: "Russian Federation", text: "Russian Federation" },
    { value: "Sweden", text: "Sweden" },
  ];
  // "Less than a Bachelors",
  // "Bachelor’s degree",
  // "Master’s degree",
  // "Post grad",
  const qualification_array = [
    {value:"Less than a Bachelors", text:"Less than a Bachelors"},
    {value:"Bachelor’s degree", text:"Bachelor’s degree"},
    {value:"Master’s degree", text:"Master’s degree"},
    {value:"Post grad", text:"Post grad"},
  ]
  const [country, setcountry] = useState('United States');
  const [degree, setdegree] = useState('Master’s degree');
  const[exp,setexp]= useState(3)
  const handleChange = (selectedoption) => {
    
    setcountry(selectedoption)
    
  };
  const handleChangeQ = (selectedoption) => {
    setdegree(selectedoption)
  };
  const onSliderChange = (selectedoption) => {
    setexp(selectedoption)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // let file = e.target.files[0];

    const res = await fetch("http://127.0.0.1:5000/api/modelBuilder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country,
        degree,
        exp
      }),
    });
    await res.json();
  };

  return (
    <div className="modelbuilder__parent">
      <Sidenav />
      <div className="MB_form__cont">
        <div className="MB_form_cont__child">
          <div className="MB_icon_images"></div>
          <h1>Software Developer Salary Prediction</h1>
          <h3>We need some information to predict the salary</h3>
          <form onSubmit={handleSubmit}>
            <label className="MB__form_lable" htmlFor="select">
              Select the Country name
            </label>
            <Select
              size="large"
              placeholder="select country"
              onChange={handleChange}
              className="country_inp"
              options={Country_array}
            >
            </Select>
            <label className="MB__form_lable" htmlFor="select">
              Select the Qualification
            </label>
            <Select
              size="large"
              placeholder="select Qualification"
              onChange={handleChangeQ}
              className="country_inp"
              options={qualification_array}
            >
            </Select>
            <label className="MB__form_lable" htmlFor="select">
              Select the Experience
            </label>
            <Slider
          min={0}
          max={50}
          className="slider_exp"
          onChange={onSliderChange}
          // value={typeof inputValue === 'number' ? inputValue : 0}
          step={1}
        />
        <Button className="MB_pred_btn"  type="submit"> Prediction</Button>
          </form>
          
        </div>
      </div>
    </div>
  );
};
