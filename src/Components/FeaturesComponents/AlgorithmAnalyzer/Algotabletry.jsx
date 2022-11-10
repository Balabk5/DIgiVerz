import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";

export const Algotabletry = () => {
  useEffect(() => {
    getData_result();
  }, []);

  const [algo_result, setalgo_result] = useState([]);

  const [tablejsondata, settablejsondata] = useState([]);
  const [algoTableResult, setalgoTableResult] = useState();

  const getData_result = async () => {
    await Axios.get("http://127.0.0.1:5000/api/algoresults").then((res) => {
      console.log("i am algo data");
      setalgo_result(res.data);
      console.log(algo_result);
      //*geting sliced data and json phares******
      const algo_result_arr = algo_result.slice(-1);
      console.log(algo_result_arr);

      const algo_modified = algo_result_arr.map(
        (data) => data.analyzed_data_modified
      );
      console.log(algo_modified);
      const tableJsonTry = JSON.parse(algo_modified);
      setalgoTableResult(
        tableJsonTry.map((row) => ({
          Model: row.Model,
          AUC: row.AUC,
          Accuracy: row.Accuracy,
          F1: row.F1,
          Kappa: row.Kappa,
          MCC: row.MCC,
          Prec: row.Prec,
          Recall: row.Recall,
        }))
      );
      console.log(algoTableResult);
    });
  };

  //   let algo_modified = algo_result_arr.map(
  //     (data) => data.analyzed_data_modified
  //   );

  // const res_try = JSON.parse(algo_modified)
  // console.log(res_try)

  const columns = [
    {
      title: "Model",
      dataIndex: "Model",
      width: 150,
    },
    {
      title: "AUC",
      dataIndex: "AUC",
      width: 150,
    },
    {
      title: "Accuracy",
      dataIndex: "Accuracy",
      width: 150,
    },
    {
      title: "F1",
      dataIndex: "F1",
      width: 150,
    },
    {
      title: "Kappa",
      dataIndex: "Kappa",
      width: 150,
    },
    {
      title: "MCC",
      dataIndex: "MCC",
      width: 150,
    },
    {
      title: "Recall",
      dataIndex: "Recall",
      width: 150,
    },
  ];
  return (
    <div>
      <div className="histtable___cont_child">
        <Table
          className="hist_table"
          size="small"
          columns={columns}
          dataSource={algoTableResult}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
          }}
          scroll={{ y: 510 }}
        />
      </div>
    </div>
  );
};
