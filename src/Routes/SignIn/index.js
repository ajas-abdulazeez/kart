import { Router } from 'react-router-dom'
import './style.css'
import usericon from './78-user.svg'
import lockicon from './password-76.svg'
import fbicon from './facebook-132.svg'


const SignIn = () => {
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
                    
                      <input type="text" class="inputText"  required />
        
                      <span className="floating-label">Username</span>
                    </div>
                </div>
                <div className="name_container">
                   <div className="user_icon">
                     <img src={lockicon} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                   
                      <input type="Password" class="inputText"  required />
        
                      <span className="floating-label">Password</span>
                    </div>
                </div>
        



      <div className="forgetpassword">
           Forgot password?
      </div>

      <div className="button">

         <button className="Login_btn">Login</button>
      
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
