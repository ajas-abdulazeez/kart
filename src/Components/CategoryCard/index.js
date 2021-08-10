import "./style.css";
import mobileicon from './mobile.svg' 



function CategoryCard() {
    return(
        <div className="Categorylist_details">
            <div className="categoryimage">
                <img  src={mobileicon} alt="search_icon" height="50px" />


            </div>
            <div className="category_name">
                Mobiles

            </div>
        </div>




    )
}
export default CategoryCard;