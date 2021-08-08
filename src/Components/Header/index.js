import "./style.css";
import searchicon from './search.svg';
import Profileicon from './profile.js';

function Header() {
    return (
       <div className="headersection">

            <div className="header_container">

                <div className="dropdown">
                        <div className="bar1"></div>
                        <div className="bar1"></div>
                        <div className="bar1"></div>  
                    </div>

                <div className="search_bar_and_name">

                    <div className="search">
                        <img src={searchicon} alt="search_icon" height="35px" width= "30px"/>
                    </div>

                    <div className="header_profile">
                            <Profileicon/>
                    </div>

                </div>

            </div>
       </div>
    )
}

export default Header
