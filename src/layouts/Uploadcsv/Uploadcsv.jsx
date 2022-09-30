import React from 'react';


import { StarOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

export const Uploadcsv = () => {
    const props = {
        action: 'http://127.0.0.1:5000/file',
      
        onChange({ file, fileList }) {
          if (file.status !== 'uploading') {
            console.log(file, fileList);
          }
        }
    }
  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </div>
  );
};
