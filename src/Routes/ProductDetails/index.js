import "./style.css";
import Customerrating from "../../Components/Customerrating";
import Footer from "../../Components/Footer";
import Sellerrating from "../../Components/Sellerrating";
import ProductCard from "../../Components/ProductCard"
import Product_image from "../../Components/Product_details_image";
import StarRatings from 'react-star-ratings';
import { useEffect, useState } from "react";
import getData from "../../Services/getData";



const ProductDetails = ({match}) => {

    const {product_id} = match.params
    const [ProductData,setProductData] = useState({
        added_date: "",
        category: "",
        price: 0,
        product_description: "",
        product_id: "",
        product_images: "" ,
        product_name: "",
        quantity: 0,
        seller_name: "",
        sold_quantity: 0,
        user_id:"" 
        })

    const {
        added_date,
        category,
        price,
        product_description,
        product_images,
        product_name,
        quantity,
        seller_name,
        sold_quantity,
        user_id
        } = ProductData;



    useEffect(()=>{
        getData("/viewproducts/"+product_id)
        .then(response=>{
    
            if(response){
                setProductData(response)
                
            }
            
        })
        

    },[])
    


    const costomer_rating = [
        {
            name: "Ajas",
            time: "10:10"
        },
        {
            name: "Ashik",
            time: "10:10"
        },
        {
            name: "Akash",
            time: "10:10"
        },
        {
            name: "Adharsh",
            time: "10:10"
        }
    ]

    return (
        <div className="proucts_container">

            <div className="media_splitter">

            <div className="product_image_componet">
            <Product_image/>

            </div>

            <div className="media_spiller_right">
           
            <div className="product_name">
                        {product_name}
            </div>

            <div className="product_price">Price :<span className="product_details_price">
            <i className="fa fa-rupee"></i>
                 {price}</span></div>

            <div className="product_deatils_rating"> 
            <StarRatings starDimension="28px" starSpacing="3px" rating={2.6} starRatedColor="#1EBAD6"/>
            </div>
            <div className="product_detail_buttons">
                <button className="product_details_contact_button">Contact</button>
                <button className="product_save_button">Save</button>

            </div>


            <div className="seller_rating">
                <Sellerrating/>

            </div>

            </div>
            </div>
            <div className="product_details_about">
                <div className="product_details_heading">
                About the product
                </div>
                <div className="horizontal_line"></div>
                <div className="product_details_description">
                {product_description}
                </div>
            </div>


            <div className="product_details_related_products">
                <div className="product_details_heading">Products related to this item</div>
                <div className="horizontal_line"></div>


                <div className="related_products_description">

                    <ProductCard/>
                    <ProductCard/>

                    


                </div>

            </div>


            <div className="cutomer_rating_section">
                <div className="customer_reviews_heading">Customer reviews</div>
                <div className="customers_rating_bar">
                <StarRatings starDimension="28px" starSpacing="3px" rating={2.6} starRatedColor="#1EBAD6"/>
                </div>
                <div className="customer_rating_figures"> 4.2 out of 5 stars    <span className="rating_numerical_value">654</span> ratings </div>
                <div className="cutomer_reviews">
                   
                   {costomer_rating.map((data,i) => (
                       <Customerrating costomerData={data} key={i}/>
                   ))}

                </div>
            </div>

            <div className="rough_space"></div>
          <Footer/>  
        </div>
    )
}

export default ProductDetails;
