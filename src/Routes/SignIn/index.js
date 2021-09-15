import { Router } from 'react-router-dom'
import './style.css'
import usericon from './78-user.svg'
import lockicon from './password-76.svg'
import fbicon from './facebook-132.svg'
import { useState } from 'react'
import postData from '../../Services/postData'




const SignIn = () => {

  const [userName,setUserName ]=useState("")
  const [password,setPassword ]=useState("")


  const logincall=()=>{
    postData('http://localhost:5000/api/v1/signin', { username: userName,password:password })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });


  }
    return (


      
    <div className="main">

      <div className="main_text">
         <div className="welcome">Welcome</div>
         <div className="sigin_text">Sign in to continue</div>
      </div>

      <div className="right_container">

      <div className="name_container">
                   <div className="user_icon">
                     <img src={usericon} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                    
                      <input type="text" class="inputText"  value={userName} onChange={(e)=>{setUserName(e.target.value)}} required />
        
                      <span className="floating-label">Username</span>
                    </div>
                </div>
                <div className="name_container">
                   <div className="user_icon">
                     <img src={lockicon} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                   
                      <input type="Password" class="inputText" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
        
                      <span className="floating-label">Password</span>
                    </div>
                </div>
        



      <div className="forgetpassword">
           Forgot password?
      </div>

      <div className="button">

         <button className="Login_btn" onClick={logincall}>Login</button>
      
          <div className="login_fb_button">
            <div className="login_text">
              Login With Facebook
          </div>
          <div className="fb_icon">
             <img src={fbicon} alt="" />
          </div>
        </div>
      

        <div className="create_here">
          Don't have an account?<span className="Create"> Create</span>
        </div>

      </div>
      </div>

      {/* akash github testing */}
    </div>

  
		
    
		

		

        
	
    )
}

export default SignIn
