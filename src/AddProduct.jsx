import React, { useState } from 'react'
import Header from './Header'

const AddProduct = () => {

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  
  async function addProduct() {
    // console.warn(name, file, price, description);
    let data = {name, file, price, description}
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('price', price);
    // formData.append('name', name);
    // formData.append('description', description);
    let result = await fetch("http://localhost:3002/addproduct", {
      method: 'POST',
      // body: formData
       headers: {
        "Content-Type": "application/json",
        "Accept": "application/json" 
      },
      body: JSON.stringify(data)
    });
    alert("Data has been saved")
    result = await result.json();
    console.log("result",result);
  }


  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <br />
        
        <input type="text" className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="name" /> <br />
        
        <input type="file" className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          placeholder="file" /> <br />

        <input type="text" className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price" /> <br />
        
        <input type="text" className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description" /> <br />
        
        <button onClick={addProduct} className="btn btn-primary">Add Product</button>
      </div>
    </div>
  )
}

export default AddProduct