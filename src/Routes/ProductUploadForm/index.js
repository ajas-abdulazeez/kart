import "./style.css"

const ProductForm = () => {
    return (
     <div>
         <h1>Product Details</h1>
        <div className="productname">Name of Product <br />
            <input type="text" />
        </div>
        <div className="product_category"> Product Category : 
            <select name="category" id="category">
                <option value="NULL">NULL</option>
            </select>
            <div className="price">
                Price 
                <input type="number" />
            </div>
            <div className="numberofstock">
                Number of Stocks 
                <input type="number" />
            </div>
            <div className="about">
                About Product 
                <input type="text" />
            </div>
            <div className="uploadimage">
                Upload Image
                <input type="image" name="Upload image" /> <input type="image" /> <input type="image" />
                <input type="image" /> <input type="image" />
            </div>
            <div className="submitbutton">
                <button type="submit" >Submit</button>
            </div>

        </div>

     </div>
    )
}

export default ProductForm;
