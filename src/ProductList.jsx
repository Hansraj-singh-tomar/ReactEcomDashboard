import Header from './Header'
import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
function ProductList()
{
    const [data,setData]=useState([]);
    useEffect( ()=>{
        getData();
    },[])
    async function deleteOperation(id)
    {
       let result = await fetch("http://localhost:3002/addproduct/"+id,{
            method:'DELETE'
        });
        result = await result.json();
        console.warn(result)
        getData();  // item delete hone ke baad hame list ko refresh karvane ke liye iss function ko fir se call karna padega
    }
    async function getData()
    {
        let result = await fetch("http://localhost:3002/addproduct");
        result =await  result.json();
        setData(result)
        console.log("data",data);
    }
    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <div className="col-sm-8 offset-sm-2">
            <table className='table'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,id)=>
                            <tr key={id}>
                                <td scope='row'>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img style={{width:100}}  src={"http://localhost:8000/"+item.file_path}/></td>
                                <td><span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span></td>
                                <td>
                                    <NavLink to={"update/"+item.id}>
                                    {/* <NavLink to="update"> */}
                                    <span className="update">Update</span>
                                    </NavLink>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ProductList;