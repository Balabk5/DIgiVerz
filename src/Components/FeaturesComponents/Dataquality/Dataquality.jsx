import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";
import { Text } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faTable,
  faTableCells,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export const Dataquality = () => {

  

  const [datatry, setdatatry] = useState();
  useEffect(() => {
    getData();
  }, []);

  const [dfeda, setdfeda] = useState([]);

  const getData = async () => {
    await Axios.get("http://127.0.0.1:5000/api/dqresult").then((res) => {
      setdfeda(res.data);
    });
  };
  let result_arr = dfeda.slice(-1);
  console.log(result_arr);
  const columns = [
    {
      title: "Column List",
      dataIndex: "list",
      width: 150,
    },
  ];
  /***********************df_head*/
  let df_row_1 = [];
  let df_row_2 = [];
  let df_row_3 = [];
  let df_row_4 = [];

  const df_head_array = result_arr.map((head_data) => {
    df_row_1 = head_data.df_head[1];
    df_row_2 = head_data.df_head[2];
    df_row_3 = head_data.df_head[3];
    df_row_4 = head_data.df_head[4];

    return head_data.df_head[0];
  });

  console.log(df_head_array);

  /***********************df_missingvaluse,df-null etc*/
  


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

/* collist seperrationfrom graph*/

let clListForGraph = []
let colforgraph = result_arr.map((item)=>(item.ColunmList.map((list)=>(list))))
let colf = colforgraph.map((cllist,i)=>(cllist.map((cf,i)=>(clListForGraph.push(cf)))))

const labels =clListForGraph;


let nullValuesList = []
let nullSep =  result_arr.map((item)=>(item.null_values.map((list)=>(list))))
let nullsep2 = nullSep.map((cllist,i)=>(cllist.map((cf,i)=>(nullValuesList.push(cf)))))


let uniqueValueList = []
let uniquesep = result_arr.map((item)=>(item.unique_values.map((list)=>(list))))
let uniquesep2 = uniquesep.map((cllist,i)=>(cllist.map((cf,i)=>(uniqueValueList.push(cf)))))


 const data = {
  labels,
  datasets: [
    {
      label: 'Null values',
      data:nullValuesList,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'unique values',
      data:uniqueValueList,
      borderColor: 'blue',
      backgroundColor: 'blue',
    }
  ],
};

  return (
    <div className="eda-parent-cont">
      <div className="eda-head">
      
        <Text
          h1
          size={60}
          className="dq-head"
          css={{
            textGradient: "45deg, $blue600 -10%, $black 80%",
          }}
          weight="bold"
        >
          Data Quality Reporter
        </Text>
      </div>
      <div className="eda-parent">
        <div className="eda-cont-left">
          <div className="eda-contleft-cont1">
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
          <Line options={options} data={data} />
          <div className="df-head-table">
            <table>
              <thead>
                <tr>
                  {result_arr.map((item) =>
                    item.ColunmList.map((list) => <th>{list}</th>)
                  )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {df_head_array.map((item, i) =>
                    item.map((list) => <td>{list}</td>)
                  )}
                </tr>
                <tr>
                  {df_row_1.map((item, i) => (
                    <td>{item}</td>
                  ))}
                </tr>
                <tr>
                  {df_row_2.map((item, i) => (
                    <td>{item}</td>
                  ))}
                </tr>
                <tr>
                  {df_row_3.map((item, i) => (
                    <td>{item}</td>
                  ))}
                </tr>
                <tr>
                  {df_row_4.map((item, i) => (
                    <td>{item}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="df-imp-detials-tb">
            <table>
              <thead>
                
                  
                
                <tr>
                <th>
                    ele
                  </th>
                {result_arr.map((item) =>
                    item.ColunmList.map((list) => <th>{list}</th>)
                  )}
                </tr>
                    
              </thead>
            </table>
            <tbody>
              <tr>
              
              </tr>
            </tbody>
          </div>
        </div>
        <div className="eda-cont-right">
          <div className="colunm-list">
            {result_arr.map((item) => (
              <div key={item._id}>
                <Table
                  className="hist_table"
                  size="small"
                  columns={columns}
                  dataSource={item.ColunmList.map((list) => ({ list }))}
                  /*  pagination={{ pageSize: 50 }} */
                  pagination={{
                    defaultPageSize: 20,
                    showSizeChanger: true,
                    pageSizeOptions: ["10", "20", "30"],
                  }}
                  scroll={{ y: 510 }}
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};
