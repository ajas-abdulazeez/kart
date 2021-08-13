import "./style.css";
import productimage from "./images.png";
import locationicon from "./location.svg";

function ProductCard(){

    return(
        <div className="product_card_container">
            <div className="centering_object">
            <div className="product_card_image">
                 <img src={productimage} alt="product_image" width="100%" />
            </div>
            <div className="product_card_details">

                

                <div className="product_card_name">
                    Razer Deathadder
                </div>
                <div className="product_card_price">₹5,199</div>
                <div className="product_card_rating"></div>
                <div className="product_card_info">Focus+ 20K DPI Optical Sensor Customizable Chroma RGB Lighting.
                </div>
                <div className="product_card_sellerinfo">
                    <div className="product_card_soldby">Sold By : </div>
                    <div className="product_card_sellerName">Razer.inc</div>
                
                </div>
                <div className="product_card_stock"></div>
                <div className="product_card_footerDetails">
                    <div className="product_card_date">Added On : 07/08/2021</div>
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