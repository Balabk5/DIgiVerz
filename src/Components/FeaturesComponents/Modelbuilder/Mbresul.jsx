import React, { useEffect } from "react";
import { Sidenav } from "../../sidenav/Sidenav";
import { useState } from "react";
import mbAnalytics from "../../../assests/squares.png";
import mbAnalytics1 from "../../../assests/squares1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faClock,
  faDollar,
  faFlag,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ModalImage from "react-modal-image";
import { Loading } from "@nextui-org/react";

export const Mbresul = () => {
  useEffect(() => {
    fetchItems();
  }, []);
  const [loading, setloading] = useState(true);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("http://127.0.0.1:5000/api/mbresult");
    console.log(data);
    setloading(false);
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  let result_arr = items.slice(-1);
  console.log(result_arr);
  // let image = `data:image/png;base64,${result_arr.binary_field.imgdata.$binary}`;
  // console.log(image)
  // const base64fun = () =>{
  //   const base64Data = result_arr.map((imgdata) => imgdata.binary_field.imagedata.$binary.base64 );
  //   console.log(base64Data)
  //   return base64Data
  // }
  const base64fun = result_arr.map((imgdata) => {
    return imgdata.binary_field.imagedata.$binary.base64;
  });

  return (
    <div>
      {loading ? (
        <>
        <div className="loader-spinner">
          <Loading color="primary"  textColor="primary">
            Loading..!
          </Loading>
          </div>
        </>
      ) : (
        <div className="modelbuilder__parent">
      <Sidenav />
      <div className="MB_form__cont">
        <div className="MB_form_cont__child">
          <h1 className="mb_heading">Predicted Result💻</h1>
          <div className="flasktry">
            {result_arr.map((item) => (
              <>
                <div className="result_container">
                  <div className="result_header">
                    <p className="result_dec-1_size">
                      <FontAwesomeIcon icon={faFlag} /> Country: {item.country}
                    </p>
                    <p className="result_dec-1_size">
                      {" "}
                      <FontAwesomeIcon icon={faBook} />
                      Qualification: {item.degree}
                    </p>
                    <p className="result_dec-1_size">
                      <FontAwesomeIcon icon={faClock} />
                      Experience: {item.exp}
                    </p>

                    {/* <img src={`data:image/png;base64,${base64fun()}`} alt='vddsvsd' ></img> */}
                  </div>
                  <div className="result_cont">
                    <p className="result_dec-2_size">
                      The avg Salary of Software dev will be around{" "}
                      <FontAwesomeIcon icon={faDollar} />
                      {item.result.replace(/[\[\]']+/g, "")}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="mb_analytics_img_cont">
            <div className="mb_country_data">
              <p>Data from Diff country</p>
             {/* <img
                      className="mb_analyticsimg_size"
                      src={mbAnalytics}
                      alt="fdsfs"
                    /> 
        */}
                <ModalImage
                className="mb_analyticsimg_size"
            small={mbAnalytics1}
            large={mbAnalytics1}
            alt="Data from Diff country!"
          /> 
            </div>
            <div className="mb_country_data">
              <p>mean Salary </p>
              <ModalImage
                className="mb_analyticsimg_size"
            small={mbAnalytics}
            large={mbAnalytics}
            alt="Data from Diff country!"
          />
            </div>
          </div>
        </div>
      </div>
    </div>
      )}
    
    </div>
  );
};
