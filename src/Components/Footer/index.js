import "./style.css";
import home_icon from './home.svg';
import myshop_icon from './shop.svg';
import alerts_icon from './bell.svg';



function Footer() {
    return (
       <div className="footersection">
            <div className="footer_container_smallscreens">

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

            <div className="footer_container_largerscreens">

                <div className="navigation_sections_largerscreen">
                    <div className="navigation_largerscreens">
                        <div className="navigation_texts_largerscreens">Home</div>
                        <div className="navigation_texts_largerscreens">My shop</div>
                        <div className="navigation_texts_largerscreens">About Us</div>

                    </div>
                    <div className="navigation_largerscreens">
                        <div className="navigation_texts_largerscreens">Home</div>
                        


                    </div>
                    <div className="navigation_largerscreens">
                        <div className="navigation_texts_largerscreens">Stay connected with us</div>

                        <div className="navigation_texts_largerscreens">Instagram</div>
                        <div className="navigation_texts_largerscreens">Telegram</div>

                    </div>
                </div>
                <div className="footer_logo_branding">LOGO</div>
                <div className="footer_copyright">Copyrighted 2021,All rights reserved</div>
            </div>


       </div>
    )
}

export default Footer
