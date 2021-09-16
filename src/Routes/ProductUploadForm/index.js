import "./style.css"
import { useState } from 'react'
import postData from '../../Services/postData'


const ProductForm = () => {

        const [productName,setProductName ]=useState("")
        const [price,setPrice]=useState("")
        const [quantity,setQuantity ]=useState("")
        const [productDescription,setProductDescription ]=useState("")
        const [productCategory,setCategory]=userState("")
        //const [image,setimage]=useState("")
        


  const productSumbit=()=>{
    postData('http://localhost:5000/api/v1/upload_form', { 
        product_name: productName,
        price:price,
        quantity:quantity,
        category:productCategory,
        product_description:productDescription

    })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });


  }
    return (
     <div>
         <h1>Product Details</h1>

         <div className="basic_details">
           <div className="productname">Name of Product <br />
              <input className="name_product_box" type="text" value={productName} onChange={(e)=>{setProductName(e.target.value)}} />
            </div>
           <div className="product_category"> Product Category : 
            <select name="category" id="category">
                <option value={productCategory} onChange={(e)=>{setCategory ("NULL")}}>NULL</option>
                <option  value={productCategory} onChange={(e)=>{setCategory ("MOBILES")}}>Mobiles</option>
            </select>
            <div className="price">
                Price 
                <input className='price_box' type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            </div>
            <div className="numberofstock">
                Number of Stocks 
                <input className="stock_box" type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} />
            </div>
            <div className="about">
                About Product <br/>
                <input className="about_box" type="text" value={productDescription} onChange={(e)=>{setProductDescription(e.target.value)}}/>
            </div></div>
            <div className="uploadimage">
                Upload Image
                <input type="image" name="Upload image" /> <input type="image" /> <input type="image" />
                <input type="image" /> <input type="image" />
            </div>
            
                <button className="submitbutton" type="submit" onClick={productSumbit}>Submit</button>
           

        

         </div>
         </div>
    )
}

export default ProductForm;
