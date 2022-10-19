import React from "react";

import { StarOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

export const Uploadcsv = () => {
  const props = {
    action: "http://127.0.0.1:5000/api/file",

    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
    
  };
  return (
    <div className="upload_csv_parent">
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
  );
};
