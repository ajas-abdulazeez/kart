import product from './product.jpg';


const Product_image = () => {
    return (
        <div className="product_image_component_section">
            <div className="product_details_image_component">
                <img src={product} alt="product_image"/>     
                </div>
                <div className="product_image_scroller_div">
                        <div class="numbertext">1 / 5</div>

                    <a class="prev">&#10094;</a>
                    <a class="next">&#10095;</a>
            
                <div className="scroll_bubbles">
                    <div className="scroll_dots"></div>
                    <div className="scroll_dots"></div>
                    <div className="scroll_dots"></div>
                    <div className="scroll_dots"></div>
                    <div className="scroll_dots_selected"></div>
                </div>
                </div>
            </div>
    )
}

export default Product_image
