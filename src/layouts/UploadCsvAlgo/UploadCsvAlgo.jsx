import React from "react";

import { StarOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
export const UploadCsvAlgo = () => {

    const navigate = useNavigate();
    const props = {
      action: "http://127.0.0.1:5000/api/algofile",
  
      onChange({ file, fileList }) {
        if (file.status === "done") {
          console.log(file, fileList);
          navigate("/AlgorithmAnalyzer");
        }else{
          
        }
      },
      
      
    };
  return (
    <div className="upload_csv_parent">
      <Text
          h1
          size={60}
          className="home__main_cont_hed csv_uploadpage"
          css={{
            textGradient: "45deg, $blue600 -20%, $black 80%",
          }}
          weight="bold"
        >
          Algorithm Analyzer
        </Text>
        <Text h3>Drag and Drop the CSV to perfome Algorithm analysis </Text>
      <div className="csv_upload_head">
      
      <div className="ant_csv_cont">
        
        <Upload.Dragger {...props} progress={{
          strokeWidth: 3,
          strokeColor:{
            "0%": "blue",
            "100%":"black"
          }
        }}
        listType="picture">
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload.Dragger>
        </div>
      </div>
    </div>
  )
}
