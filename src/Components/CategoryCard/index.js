import "./style.css";
// import mobileicon from './mobile.svg' 



function CategoryCard({CategoryFunc}) {
    return(
        <div className="Categorylist_details">
            <div className="categoryimage">
                {CategoryFunc.CategoryImage}


            </div>
            <div className="category_name">
                {CategoryFunc.CategoryName}

            </div>
        </div>




    )
}
export default CategoryCard;