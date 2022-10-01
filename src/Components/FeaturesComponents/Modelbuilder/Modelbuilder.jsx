
import React, { useState, useEffect } from "react";
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';

export const Modelbuilder = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  let columnListArray=[]
  const [column, setcolumnname] = useState(columnListArray)

  const fetchItems = async () => {
    const data = await fetch(
      "http://127.0.0.1:5000/columnDetials"
    );
      console.log(data)
    const items = await data.json();
    console.log(items);
    setItems(items);
    
  };
  console.log(items)
  const arr = []
  
  
Object.keys(items).forEach(key => arr.push({name: key, value: items[key]}))

console.log(typeof(arr))
const values = (arr).map(d => d['value']);



const handleChange = (selectedOption, actionMeta) => {
  
  setcolumnname([...column,actionMeta])
};
console.log(column)
axios({
  url: 'http://127.0.0.1:5000/selectedcolumn',
  method: 'post',
  data: column
})
.then(function (response) {
    // your action after success
    console.log(response);
})
.catch(function (error) {
   // your action on error success
    console.log(error);
});




  return (
    <div className="modelbuilder__parent">
      <h1>ModelBuilder</h1>
      {
                arr.map((item) => ( 
                <ol key = { item.name } >
                    { item.value } 
                    
                    </ol>
                ))
            }
            <div className="Multiple__select__column">
              <Multiselect showArrow options={values} onSelect={handleChange} isObject={false} />
            </div>
            
      
    </div>
  )
}
