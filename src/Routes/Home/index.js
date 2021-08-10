import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ProductCard from  "../../Components/ProductCard"

import "./style.css";
import CategoryCard from "../../Components/CategoryCard";
const Home = () => {
    return (
        <div className="mainContainer">

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
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>





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
                Featured Products

            </div>
            <div className="featured_list">

                <div className="featured_list_product">
                    <ProductCard></ProductCard>
                </div>
                <div className="featured_list_product">
                    <ProductCard></ProductCard>
                </div>
                <div className="featured_list_product">
                    <ProductCard></ProductCard>
                </div>
                <div className="featured_list_product">
                    <ProductCard></ProductCard>
                </div>
                <div className="featured_list_product">
                    <ProductCard></ProductCard>
                </div>





               
                

            </div>
            <div className="footerSpace"></div>
            <Footer></Footer>
            





        
        </div>

        
    )
}

export default Home;
