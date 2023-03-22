import React, { useEffect, useState } from 'react'
import Header from './Header'

import { useParams } from 'react-router-dom';

const UpdateProduct = () => {

  const { id } = useParams();

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  // It was giving error 
  // useEffect(() => {
  //   let result =await fetch("http://localhost:3002/addproduct/"+id);
  //   result = await result.json();
  //   setData(result);
  //   setName(result.name);
  //   setPrice(result.price);
  //   setDescription(result.description);
  //   setFile(result.file);
  // }, [])


  // we must use useEffect like this
useEffect(() => {
  async function fetchData() {
    try {
      let result = await fetch("http://localhost:3002/addproduct/" + id);
      result = await result.json();
      setData(result);
      setName(result.name);
      setPrice(result.price);
      setDescription(result.description);
      setFile(result.file);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
}, [id]);

  async function editProduct(id)
  {
      let data = [name, file, price, description]
      // const formData = new FormData();
      // formData.append('file', file);
      // formData.append('price', price);
      // formData.append('name', name);
      // formData.append('description', description);
      // +"?_method=PUT"
      let result = await fetch("http://localhost:3002/addproduct"+id, {
        method: 'PUT',
        // body: formData
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json" 
        },
        body: JSON.stringify(data)
    });
    alert("Data has been updated")
    result = await result.json();
    console.log("result",result); 
  } 
  
  return (
    <>
      <div>
        <Header />
        <h1>Update Product</h1>
        <input type="text"
          onChange={(e)=>setName(e.target.value)}
          defaultValue={data.name} /> <br /> <br />
        
        <input type="text"
          onChange={(e)=>setPrice(e.target.value)}
          defaultValue={data.price} /> <br /> <br />

        <input type="text"
          onChange={(e)=>setDescription(e.target.value)}
          defaultValue={data.description} /> <br /> <br />
        
        <input type="file" 
          onChange={(e) => setFile(e.target.files[0])}
          defaultValue={data.file_path} /> <br /> <br />
        
        <img style={{ width: 100 }} src={"http://localhost:8000/" + data.file_path} /> <br /> <br />
        
        <button onClick={()=>{editProduct(data.id)}}>Update Product</button>
      </div>
    </>
  )
}

export default UpdateProduct