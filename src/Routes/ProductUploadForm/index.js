import "./style.css"
import { useState , useEffect} from 'react'
import SendformData from "../../Services/formData"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


const ProductForm = () => {

        
        const[categoryList,setCategoryList]=useState([])

        useEffect(()=>{
        fetch("http://localhost:5000/api/v1/categories")
        .then(result=>result.json()).then(response=>{
            
            if(response){
                
                setCategoryList(response)
          
                
            }
        })
        

    },[])
    

        const [productName,setProductName ]=useState("")
        const [price,setPrice]=useState("")
        const [quantity,setQuantity ]=useState("")
        const [productDescription,setProductDescription ]=useState("")
        const [category,setCategory]= useState("")
        const [image,setimage]=useState([])
        const [noOfImages,setNoOfImages] = useState(1)

    const fileOnChange=(file,index)=>{
        let fileList = [...image]
        fileList[index]=file;
        setimage(fileList);
    }
        
        


  const productSumbit=()=>{

    let formData = new FormData(); 
    
    for (let i =0 ; i< noOfImages;i++){
        if (image[i]){
        formData.append("image"+i,image[i] );
        }
    }
   
    formData.append("product_name",productName );
    formData.append("price",price );
    formData.append("quantity",quantity );
    formData.append("category",category );
    formData.append("product_description",productDescription );


          
    SendformData('http://localhost:5000/api/v1/upload_form', formData)
  .then(data => {
   
  });


  }
    return (
     <div>
        <Header/>
         <h1>Product Details</h1>

         <div className="basic_details">
           <div className="productname">Name of Product <br />
              <input className="name_product_box" type="text" value={productName} onChange={(e)=>{setProductName(e.target.value)}} />
            </div>
           <div className="product_category"> Product Category :


            <select name="category" id="category" value={category} onChange={(e)=>{setCategory(e.target.value)}} >
            
            <option value="">Select Category</option>

              {categoryList.map((category,i)=><option {...category} key={i}>{category.category_name} </option>)}
                
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

                {[...Array(noOfImages)].map(( _, index)=>{
                    return  <input type="file" name="Upload image"  accept="image/jpeg" 
                    onChange={(e)=>{fileOnChange(e.target.files[0],index)}} key={index} />
                })}
               
                
                <button onClick ={()=>{
                    setNoOfImages((prev)=>{
                        return prev<5 ?  prev+1: 5
                       })
                }} >add more files</button>
                
            </div>
            
                <button className="submitbutton" type="submit" onClick={productSumbit}>Submit</button>
           

        

         </div>
         <Footer/>
         </div>
    )
}

export default ProductForm;
