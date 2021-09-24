
import { useEffect, useState } from "react"
import "./style.css"



const Product_image = ({imageList}) => {


//    const [imageList, setimageList] = useState([])
   
//    useEffect(()=>{
//     console.log(product_images,product_images.length)

//        if(product_images.length && !imageList.length){
//            console.log(product_images)
//            setimageList(product_images)
//        }
    
//    },[product_images])

   
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
                {imageList[0] && <img src={ `http://localhost:5000/${imageList[0]}`} alt="product_image" width="100%" height="100%"/>     
                }
                </div>
                </div>
            
    )
}

export default Product_image
