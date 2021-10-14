
import { useEffect, useState } from "react"
import "./style.css"



const Product_image = ({imageList}) => {
    console.log(imageList)

    const [imageindex , setImageIndex ] =useState(0)

    useEffect(() => {
        setImageIndex(0)
    }, [imageList])

   
    return (
        <div className="product_image_component_section">
            
                    <div className="numbertext">{imageindex +1} / {imageList.length} </div>

                    <a className="prev" onClick= {
                        ()=>{
                            setImageIndex((prev)=>{
                                if(prev == 0) return prev;
                                return prev -1
                            })
                        }
                    }>&#10094;</a>
                    <a className="next" onClick={()=>{
                        setImageIndex((prev)=> {
                            if(prev < imageList.length -1) return prev +1
                            return prev
                        })
                    }}>&#10095;</a>
            
                <div className="scroll_bubbles">

                {imageList.map((_data,i) => (
                        <div className={i === imageindex? "scroll_dots_selected" : "scroll_dots" } onClick={()=>{
                            setImageIndex(i)
                        }} key={i}/>
                    ))}
                    
                    
                </div>
                <div className="product_details_image_component">
                {imageList[0] && <img src={ `http://localhost:5000/${imageList[imageindex]}`} alt="product_image" width="100%" height="100%"/>     
                }
                </div>
                </div>
            
    )
}

export default Product_image
