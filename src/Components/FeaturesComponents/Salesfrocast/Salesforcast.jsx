import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import { Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import ModalImage from "react-modal-image";
import saleforcastresult from "../../../assests/features/salesforcast.png"
export const Salesforcast = () => {
  const [date, setdate] = useState("");
  console.log("Date", date);
  const salesforecast_date = async (e) => {
    console.log("im heading into sales forecast endpoint")
    const res = await fetch("http://127.0.0.1:5000/api/sales_date", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       date

      }),

    });



}
  return (
    <div className="sales-parent-cont">
      <div className="sales-head-child">
        <Text
          h1
          size={60}
          className="dq-head"
          css={{
            textGradient: "45deg, $blue600 -10%, $black 80%",
          }}
          weight="bold"
        >
          Sales Forecast  
        </Text>
        <Text h3 className="dq-head">Enter the Date to Perfome sales forcast </Text>
      </div>
      <div className="sales-inp-menu">
      <div className="date_picker">
        {/*  <h1>The selected date : {date}</h1> */}
        <input
          type="date"
          placeholder="enter the date"
          onChange={(e) => setdate(e.target.value)}
        ></input>
      </div>

      <div className="sales_button">
        <Button className="eda-gh-btn" flat onPress={salesforecast_date}>
          Analyze
        </Button>

      </div>
      </div>
      <div className="sale-forcast-result-cont">
      <ModalImage
                className="salesforcast_analyticsimg_size"
            small={saleforcastresult}
            large={saleforcastresult}
            alt="Sales forcast!"
          />
      </div>
    </div>  
  );
};
