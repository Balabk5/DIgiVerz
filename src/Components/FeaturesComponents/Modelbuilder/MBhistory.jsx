import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";
import { Loading, Text } from "@nextui-org/react";
import { Sidenav } from "../../sidenav/Sidenav";
export const MBhistory = () => {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("http://127.0.0.1:5000/api/mbresult").then((res) => {
      setloading(false);
      console.log(res.data)
      setstate(
        res.data.map((row) => ({
          country: row.country,
          degree: row.degree,
          exp: row.exp,
          result: row.result,
        }))
      );
      console.log(res);
      console.log(state);
    });
  };

  const columns = [
    {
      title: "Country",
      dataIndex: "country",
      width: 150,
    },
    {
      title: "Degree",
      dataIndex: "degree",
      width: 150,
    },
    {
      title: "Experience",
      dataIndex: "exp",
      width: 150,
    },
    {
      title: "Result",
      dataIndex: "result",
      width: 150,
    },
  ];

  return (
    <div>
      {loading ? (
        <>
          <Loading color="primary" textColor="primary">
            Loading..!
          </Loading>
        </>
      ) : (
        <div className="modelbuilder__parent">
          <Sidenav />
          <div className="MB_form__cont histable__cont">
            <div className="MB_form_cont__child">
              <Text
                h1
                size={40}
                className=" hist_head"
                css={{
                  textGradient: "45deg, $blue600 -20%, $black 80%",
                }}
                weight="bold"
              >
                Software Dev salary prediction result
              </Text>
              <div className="histtable___cont_child">
                <Table
                  className="hist_table"
                  size="small"
                  columns={columns}
                  dataSource={state}
                  /*  pagination={{ pageSize: 50 }} */
                  pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                    pageSizeOptions: ["10", "20", "30"],
                  }}
                  scroll={{ y: 510 }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
