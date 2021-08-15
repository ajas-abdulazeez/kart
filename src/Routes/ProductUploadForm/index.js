import "./style.css"

const ProductForm = () => {
    return (
     <div>
         <h1>Product Details</h1>

         <div className="basic_details">
           <div className="productname">Name of Product <br />
              <input className="name_product_box" type="text" />
            </div>
           <div className="product_category"> Product Category : 
            <select name="category" id="category">
                <option value="NULL">NULL</option>
            </select>
            <div className="price">
                Price 
                <input className='price_box' type="number" />
            </div>
            <div className="numberofstock">
                Number of Stocks 
                <input className="stock_box" type="number" />
            </div>
            <div className="about">
                About Product <br/>
                <input className="about_box" type="text" />
            </div></div>
            <div className="uploadimage">
                Upload Image
                <input type="image" name="Upload image" /> <input type="image" /> <input type="image" />
                <input type="image" /> <input type="image" />
            </div>
            
                <button className="submitbutton" type="submit" >Submit</button>
           

        

         </div>
         </div>
    )
}

export default ProductForm;
