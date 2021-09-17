import "./style.css";
import productimage from "./images.png";
import locationicon from "./location.svg";
import StarRatings from 'react-star-ratings';
import { useHistory } from "react-router";

function ProductCard({product_name,price,seller_name,added_date,product_id}){
    
    const history = useHistory();

    const parse_date = Date.parse(added_date)
    let date = new Date(parse_date);
    const final_date = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    

    return(
        <div className="product_card_container" onClick ={()=>{
            history.push("/details/"+product_id)

        }}>
            
            <div className="centering_object">
            <div className="product_card_image">
                 <img src={productimage} alt="product_image"  width="100%" />
            </div>
            <div className="product_card_details">

                

                <div className="product_card_name">
                    {product_name}
                </div>
                <div className="price_with_rating_contain">
                <div className="product_card_price">₹{price}</div>
                <div className="product_card_rating"> 
                    <StarRatings starDimension="20px" starSpacing="3px" rating={3.6} starRatedColor="#1EBAD6"/>(306)
                                </div>
                
                                </div>
                <div className="product_card_sellerinfo">
                    <div className="product_card_soldby">Sold By : </div>
                    <div className="product_card_sellerName">{seller_name}</div>
                
                </div>
                <div className="product_card_stock"></div>
                <div className="product_card_footerDetails">
                    <div className="product_card_date">Added On : {final_date}</div>
                    <div className="product_card_location">
                        <div className="product_card_locationicon">
                        <img src={locationicon} alt="location_icon" height="18px"/>
                        </div>
                        <div className="product_card_distance">1.2 kms away</div>
                    </div>
                </div>
               </div> 
            </div>

        </div>
    )






}

export default ProductCard;