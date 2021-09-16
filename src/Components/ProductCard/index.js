import "./style.css";
import productimage from "./images.png";
import locationicon from "./location.svg";

function ProductCard({product_name,price,product_description,seller_name,product_added_date}){
    

    return(
        <div className="product_card_container">
            
            <div className="centering_object">
            <div className="product_card_image">
                 <img src={productimage} alt="product_image"  width="100%" />
            </div>
            <div className="product_card_details">

                

                <div className="product_card_name">
                    {product_name}
                </div>
                <div className="product_card_price">₹{price}</div>
                <div className="product_card_rating"></div>
                <div className="product_card_info">{product_description}
                </div>
                <div className="product_card_sellerinfo">
                    <div className="product_card_soldby">Sold By : </div>
                    <div className="product_card_sellerName">{seller_name}</div>
                
                </div>
                <div className="product_card_stock"></div>
                <div className="product_card_footerDetails">
                    <div className="product_card_date">Added On : {product_added_date}</div>
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