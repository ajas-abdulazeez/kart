import "./style.css";
import home_icon from './home.svg';
import myshop_icon from './shop.svg';
import alerts_icon from './bell.svg';



function Footer() {
    return (
       <div className="footersection">
            <div className="footer_container">

                <div className="navigation_tabs">
                    <div className="navigation_icon">
                        <img src={home_icon} alt="home_icon" />
                    </div>
                    <div className="navigation_text">Home</div>
                </div>

                <div className="navigation_tabs">
                    <div className="navigation_icon">
                        <img src={myshop_icon} alt="myshop_icon" />
                    </div>
                    <div className="navigation_text">My shop</div>
                </div>

                <div className="navigation_tabs">
                    <div className="navigation_icon">
                        <img src={alerts_icon} alt="alerts_icon"/>
                       
                    </div>
                    <div className="navigation_text">Alerts
                    </div>
                </div>

            </div>
       </div>
    )
}

export default Footer
