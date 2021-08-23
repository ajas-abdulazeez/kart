import "./style.css";
import searchicon from './search.svg';
import profileicon from './profile.svg';
import backbutton from './backButton.svg'




function Header() {
    function myFunction(){
        var x=document.getElementsByClassName("dropdown")[0];
        x.classList.toggle("change");
        var y=document.getElementsByClassName("sidebar")[0];
        console.log("hello");
        y.classList.toggle("nav");
      }
      
    function searchbarDisplay(){
            var y=document.getElementsByClassName("searchsection")[0];
            console.log("search successfully loaded");
            y.style.display = "flex";
          }

          function searchbarDisplayclose(){
            var y=document.getElementsByClassName("searchsection")[0];
            console.log("search successfully loaded");
            y.style.display = "none";
          }
    
    return (
       <div className="headersection">

            <div className="header_container">

                <div className="dropdown" onClick={myFunction} >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>  
                        
                    </div>
            <div className="searchsection">

                
                <img className='back_button' src={backbutton} alt="backButton_search" height="35px" width= "30px" onClick={searchbarDisplayclose}/>
                

                <div className="Searh_form">
                
                <input type="search" placeholder="Search. . "></input>
                


                </div>

            </div>

                <div className="search_bar_and_name">

                    <div className="search"  id="searchButton" onClick={searchbarDisplay}>
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
