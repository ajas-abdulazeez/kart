import usericon from './78-user.svg'
import './style.css'
import confirm from './confirm-password.svg'
import mobile from './telephone-64.svg'
import verification from './verification-code-17.svg'
import lock from './password-76.svg'
import fbicon from './facebook-132.svg'

const SignUp = () => {
    return (
        <div className="main">

          <div className="left_container">

            <div className="get_started">
               Let's Get Started
            </div>
            <div className="create_account_txt">
               Create Account
            </div>
          </div>
            <div className="contaier_box">
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
                     <img src={mobile} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                    
                      <input type="text" class="inputText"  required />
        
                      <span className="floating-label">Mobile</span>
                    </div>
                </div>

                <div className="name_container">
                   <div className="user_icon">
                     <img src={verification} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                    
                      <input type="text" class="inputText"  required />
        
                      <span className="floating-label">4 digit code</span>
                    </div>
                </div>

                <div className="name_container">
                   <div className="user_icon">
                     <img src={lock} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                   
                      <input type="Password" class="inputText"  required />
        
                      <span className="floating-label">Password</span>
                    </div>
                </div>

                <div className="name_container">
                   <div className="user_icon">
                     <img src={confirm} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                    
                      <input type="text" class="inputText"  required />
        
                      <span className="floating-label">Confirm password</span>
                    </div>
                </div>
                
                <div className="button">
                <button className="Create_account_btn">Create an Account</button>

                <div className="login_here">
                Already have an account?<span className="here"> Login</span>
                </div>

                <div className="signup_fb_button">
                    <div className="signup_with_text">Sign Up with Facebook</div>
                    <div className="fb_icon1">
                        <img src={fbicon} alt="" />
                    </div>
                </div>
                </div>


            </div>


        </div>
    )
}

export default SignUp;