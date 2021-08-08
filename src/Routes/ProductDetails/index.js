import "./style.css";
import product from './product.jpg';
import Customerrating from "../../Components/Customerrating";
import Footer from "../../Components/Footer";
import Sellerrating from "../../Components/Sellerrating";
import ProductCard from "../../Components/ProductCard"



const ProductDetails = () => {
    return (
        <div className="proucts_container">

            <div className="product_image">
                <img src={product} alt="product_image" width="100%" height="100%"/>
            </div>
            <div className="product_name">
                        RiaTech Large Size 
                        (600mm x 300mm x 2mm)
            </div>

            <div className="product_price">Price :<span className="product_details_price">
            <i class="fa fa-rupee"></i>
                 1,799.00</span></div>

            <div className="product_deatils_rating"> 
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="rating_values">( 100 ) </span>
            </div>
            <div className="product_detail_buttons">
                <button className="product_details_contact_button">Contact</button>
                <button className="product_save_button">Save</button>

            </div>


            <div className="seller_rating">
                <Sellerrating/>

            </div>



            <div className="product_details_about">
                <div className="product_details_heading">
                About the product
                </div>
                <div className="horizontal_line"></div>
                <div className="product_details_description">
                00mm x 300mm x 2mm Large Extended Mouse Pad - 
                The mouse pad is large
                enough for your mouse, keyboard and more.
                It offers plenty of room for gaming
                or office works all while protecting your desk
                Heavy duty rubber base prevents it from sliding
                around on the desk while using it.
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
                <span class="fa fa-star customerchecked"></span>
                <span class="fa fa-star customerchecked"></span>
                <span class="fa fa-star customerchecked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                </div>
                <div className="customer_rating_figures"> 4.2 out of 5 stars    <span className="rating_numerical_value">654</span> ratings </div>
                <div className="cutomer_reviews">
                   
                     <Customerrating/>
                     <Customerrating/>
                     <Customerrating/>
                     <Customerrating/>
                     <Customerrating/>
                     <Customerrating/>

                </div>
            </div>

            <div className="rough_space"></div>
          <Footer/>  
        </div>
    )
}

export default ProductDetails;
