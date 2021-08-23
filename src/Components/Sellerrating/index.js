import "./style.css";
import StarRatings from 'react-star-ratings';

const Sellerrating = () => {
    return (
        <div className="seller_rating_section">
            <div className="stock_details">
                <div className="quantity_details">12</div>
                <div className="quantity_instock_text">
                    <div className="in_stock_heading">In stock</div>
                    <div className="sold_details">18 items sold</div>
                </div>
            </div>
            <div className="seller_rating_text">Seller Rating</div>

            <div className="seller_rating_stars">
                <div className="seller_review_rating_stars">
                <StarRatings starDimension="20px" starSpacing="3px" rating={2.6} starRatedColor="#1EBAD6"/>
                </div>
                <div className="total_ratings_text"> 654 reviews </div>

                </div>
            <div className="sold_by_details">( Sold by  <span className="bluetext">RiaTech Store</span> )</div>


        </div>
    )
}

export default Sellerrating
