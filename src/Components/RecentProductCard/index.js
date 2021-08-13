import "./style.css";
import productimage from "./images1.png";
import locationicon from "./location.svg";

function RecentProductCard(){

    return(
        <div className="recent_product_card_container">
            <div className="recent_centering_object">

                <div className="recent_product_card_image">
                    <img src={productimage} alt="product_image" height="100%" />
                </div>

                <div className="recent_product_card_details">
                    <div className="recent_product_card_name">
                        Razer Deathadder
                    </div>
                    <div className="alignment_right">
                        <div className="recent_product_card_price">₹5,199</div>

                        <div className="recent_product_card_location">
                            <div className="recent_product_card_locationicon">
                                <img src={locationicon} alt="location_icon" height="10px" width="100%" /></div>
                            <div className="recent_product_card_distance">1.2 kms</div>
                        </div>
                    </div>
               </div> 
            </div>

        </div>
    )






}

export default RecentProductCard;