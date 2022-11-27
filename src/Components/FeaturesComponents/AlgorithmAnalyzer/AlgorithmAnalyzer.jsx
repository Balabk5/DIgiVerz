import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Select } from "antd";
import { Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {
  faDatabase,
  faFileCsv,
  faTableCells,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
export const AlgorithmAnalyzer = () => {
  useEffect(() => {
    getData();
    getData_result();
  }, []);

  const [algo_analyze, setalgo_analyze] = useState([]);
  const [algo_result, setalgo_result] = useState([]);
  const [colunm, setcolunm] = useState("");

  const [pycaretopt, setpycaretopt] = useState("class");
  const pycaret_options_array = [
    { value: "Classification", text: "Classification" },
    { value: "Regression", text: "Regression" },
  ];

  const pycaret_handleChange = (selectedoption) => {
    setpycaretopt(selectedoption);
    console.log(selectedoption);
  };

  const getData = async () => {
    await Axios.get("http://127.0.0.1:5000/api/algocolunmnames").then((res) => {
      setalgo_analyze(res.data);
    });
  };
  let result_arr = algo_analyze.slice(-1);
  console.log(result_arr);

  const getData_result = async () => {
    await Axios.get("http://127.0.0.1:5000/api/algoresults").then((res) => {
      setalgo_result(res.data);
    });
  };
  let algo_result_arr = algo_result.slice(-1);
  console.log(algo_result_arr);

  let clListForGraph = [];
  let colforgraph = result_arr.map((item) => item.collist.map((list) => list));
  let colf = colforgraph.map((cllist, i) =>
    cllist.map((cf, i) => clListForGraph.push(cf))
  );

  const handleChange = (selectedoption) => {
    setcolunm(selectedoption);
    console.log(selectedoption);
  };
  const navigate = useNavigate();
  const algo_col_options = async (e) => {
    if (pycaretopt === "Classification") {
      console.log("i am entering into classi");
      const res = await fetch("http://127.0.0.1:5000/api/getcolnameforalgo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          colunm,
          pycaretopt,
        }),
      });
      await res.json().then((res) => {
        console.log(res);
        if (res === "OK") {
          navigate("/AlgorithmAnalyzerm");
        }
      });
    } else {
      console.log("im heading into regression endpoint");
      const res = await fetch("http://127.0.0.1:5000/api/post_col_name_reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          colunm,
          pycaretopt,
        }),
      });
      await res.json();
      if (res.status == 200) {
        console.log("im headig to next page");

        setTimeout(() => {
          navigate("/algo_res_reg");
        }, 2000);
      }
    }
  };

  return (
    <div className="algo-parent-cont">
      <div className="algo-head-child">
        <Text
          h1
          size={60}
          className="dq-head"
          css={{
            textGradient: "45deg, $blue600 -10%, $black 80%",
          }}
          weight="bold"
        >
          Algorithm Analyzer
        </Text>
      </div>
      <div className="eda-csv-name-cont">
        <div className="csv-name-child">
          <p className="eda-df-size-dec">CSV Name</p>
          {result_arr.map((item) => (
            <p className="eda-df-size-dec">
              <FontAwesomeIcon icon={faFileCsv} /> {item.file_name}
            </p>
          ))}
        </div>
      </div>
      <div className="eda-csv-name-cont">
        <div className="df-size">
          <p className="eda-df-size-dec">Size of the Dataset</p>
          {result_arr.map((item) => (
            <p className="eda-df-size-dec">
              <FontAwesomeIcon icon={faDatabase} /> {item.size} MB
            </p>
          ))}
        </div>
        <div className="df-shap df-shap-pad">
          <p className="eda-df-size-dec">shape of the Dataset</p>
          {result_arr.map((item) => (
            <>
              <p className="eda-df-shape-dec">
                <FontAwesomeIcon icon={faTableCells} /> No of rows:{" "}
                {item.dataset_shape[0]}
              </p>
              <p className="eda-df-shape-dec">
                {" "}
                <FontAwesomeIcon icon={faTableColumns} /> No of colunms:{" "}
                {item.dataset_shape[1]}
              </p>
            </>
          ))}
        </div>
      </div>
      <Text h3 className="algo-target-head">
        Select the target colunm
      </Text>
      <div className="select-option-cont">
        <Select
          size="large"
          placeholder="select Colunm"
          onChange={handleChange}
          className="algo-select-inp"
        >
          {clListForGraph.map((cl, i) => (
            <options value={cl} key={cl}>
              {cl}
            </options>
          ))}
        </Select>
        <Select
          size="large"
          placeholder="select algorithms"
          onChange={pycaret_handleChange}
          className="country_inp"
          options={pycaret_options_array}
        ></Select>
        <Button className="algo-gh-btn" flat onPress={algo_col_options}>
          Analyze
        </Button>
      </div>
    </div>
  );
};
