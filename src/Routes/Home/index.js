import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ProductCard from  "../../Components/ProductCard";
import Mobileicon from "./mobile.svg";
import Clothesicon from "./clothing.svg";
import Foodsicon from "./foods.svg";
import Carsicon from "./cars.svg";

import "./style.css";
import CategoryCard from "../../Components/CategoryCard";
import RecentProductCard from "../../Components/RecentProductCard";
import SideNavBar from "../../Components/SideNavBar";


const Home = () => {


    const CategoryData = [
        {
            CategoryImage:<img src={Mobileicon} alt=""  height="45px"/>,
            CategoryName: "Mobile"
        },
        {
            CategoryImage: <img src={Clothesicon} alt=""  height="45px"/>,
            CategoryName: "Clothing"
        },
        {
            CategoryImage: <img src={Carsicon} alt=""  height="45px"/>,
            CategoryName: "Cars"
        },
        {
            CategoryImage: <img src={Foodsicon} alt=""  height="45px"/>,
            CategoryName: "Food"
        }
    ]



    return (
        <div className="mainContainer">
            <SideNavBar/>

            <Header></Header>
            <div className="sellBanner">
                <div className="bannerInfo">

                </div>
                <div className="sellButton">
                    SELL

                </div>



            
            </div>
            <div className="categorySection">
                <div className="categorySection_header">
                    <div className="categorySection_explore">
                        Explore Categories
                    </div>
                    <div className="categorySection_more">
                        more
                    </div>

                </div>
                <div className="categorySection_iconsList">
                    
                    {CategoryData.map(data => (
                       <CategoryCard CategoryFunc={data}/>
                   ))}

                </div>
            </div>
            <div className="location_header">
                
                <div className ="location_header_current">
                    Los Angeles,CA

                </div>
                <div className = "location_header_change">
                    change

                </div>
                
            </div>
            <div className="featured_banner">
                Recently Added Products

            </div>
            <div className="recently_added_perks">
                <RecentProductCard/>
                <RecentProductCard/>
                <RecentProductCard/>
                <RecentProductCard/>
            </div>

            <div className="featured_banner">
                Featured Products

            </div>


            <div className="featured_list container">

                    <ProductCard></ProductCard>
            
               
                    <ProductCard></ProductCard>
                
               
                    <ProductCard></ProductCard>
   
              
                    <ProductCard></ProductCard>
             
           
                    <ProductCard></ProductCard>






               
                

            </div>
            <div className="footerSpace"></div>
            <Footer></Footer>
            





        
        </div>

        
    )
}

export default Home;
