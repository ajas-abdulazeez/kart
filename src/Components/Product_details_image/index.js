import product from './product.jpg';
import "./style.css"


const Product_image = () => {
    return (
        <div className="product_image_component_section">
            
                    <div className="numbertext">1 / 5</div>

                    <a className="prev">&#10094;</a>
                    <a className="next">&#10095;</a>
            
                <div className="scroll_bubbles">
                    <div className="scroll_dots"></div>
                    <div className="scroll_dots"></div>
                    <div className="scroll_dots"></div>
                    <div className="scroll_dots"></div>
                    <div className="scroll_dots_selected"></div>
                </div>
                <div className="product_details_image_component">
                <img src={product} alt="product_image" width="100%" height="100%"/>     
                </div>
                </div>
            
    )
}

export default Product_image
