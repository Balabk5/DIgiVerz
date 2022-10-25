import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";
import { Text } from "@nextui-org/react";
export const Dataquality = () => {
  const [datatry, setdatatry] = useState();
  useEffect(() => {
    getData();
  }, []);

  const [columnlist, setcolumnlist] = useState([]);

  const getData = async () => {
    await Axios.get("http://127.0.0.1:5000/api/dqresult").then((res) => {
      setcolumnlist(res.data);
    });
  };
  let result_arr = columnlist.slice(-1);
  console.log(result_arr);
  const columns = [
    {
      title: "Column List",
      dataIndex: "list",
      width: 150,
    },
  ];

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

  const df_header_obk = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
        <div className="eda-contleft-cont1"></div>
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
