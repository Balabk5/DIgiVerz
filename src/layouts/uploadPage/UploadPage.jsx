import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Upload, message, Button } from "antd";


const UploadPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
      const formData = new FormData();
      formData.append("file", data.file[0]);
      
      const datatry = {};
      formData.forEach((value, key) => (datatry[key] = value));
      console.log(datatry)
      console.log(typeof datatry)
      let toJson = JSON.stringify(datatry)
      console.log(toJson)  
      
      
      const res = await fetch("http://localhost:5000/file", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: datatry
          

      }).then((res) => res.json());
      alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

    
  
  return (
    <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" name="file" {...register("file")} />

                <input type="submit" />
            </form>
        </div>
  );
};

export default UploadPage;
