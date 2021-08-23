import "./style.css";
import searchicon from './search.svg';
import profileicon from './profile.svg';
import backbutton from './backButton.svg'




function Header() {
    return (
       <div className="headersection">

            <div className="header_container">

                <div className="dropdown">
                        <div className="bar1"></div>
                        <div className="bar1"></div>
                        <div className="bar1"></div>  
                        
                    </div>
            <div className="searchsection">

                
                <img className='back_button' src={backbutton} alt="backButton_search" height="35px" width= "30px"/>
                

                <div className="Searh_form">
                
                <input type="search" placeholder="Search. . "></input>
                


                </div>

            </div>

                <div className="search_bar_and_name">

                    <div className="search"  id="searchButton" onclick="myFunction()">
                        <img  src={searchicon} alt="search_icon" height="30px" width= "30px"/>
                    </div>

                    <div className="header_profile">
                            <img src={profileicon} alt="profile_icon" height="30px" width= "30px"/>
                    </div>

                </div>

            </div>
           


        </div>
    )
}

export default Header
