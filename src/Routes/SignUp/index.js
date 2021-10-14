import usericon from './78-user.svg'
import './style.css'
import { useState , useEffect} from 'react'
import confirm from './confirm-password.svg'
import mobile from './telephone-64.svg'
import verification from './verification-code-17.svg'
import lock from './password-76.svg'
import fbicon from './facebook-132.svg'
import postData from '../../Services/postData'




const SignUp = ({history}) => {

  const [username,setUserName]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmPassword]=useState("")

  


  

  const signupcall=(e)=>{
    e.preventDefault()
    if (password == confirmpassword) {

      console.log(email)

    const signupformData = { username,phone,email,password }

    console.log(signupformData)




    postData('http://localhost:5000/api/v1/signup', signupformData )
  .then(data => {
   
  });
}
else 
{
  console.log("passwords does not match")
}
  }


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


              <form onSubmit = {signupcall} >

                <div className="name_container">
                   <div className="user_icon">
                     <img src={usericon} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                    
                      <input type="text" class="inputText" value={username} onChange={(e)=>{setUserName(e.target.value)}} required />
        
                      <span className="floating-label">Username</span>
                    </div>
                </div>

                <div className="name_container">
                   <div className="user_icon">
                     <img src={mobile} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                    
                      <input type="text" class="inputText"  value={phone} onChange={(e)=>{setPhone(e.target.value)}} required />
        
                      <span className="floating-label">Mobile</span>
                    </div>
                </div>

          {/* email */}
                <div className="name_container">
                   <div className="user_icon">
                     <img src={mobile} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                    
                      <input type="text" class="inputText"  value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
        
                      <span className="floating-label">Email</span>
                    </div>
                </div>


                <div className="name_container">
                   <div className="user_icon">
                     <img src={lock} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                   
                      <input type="Password" class="inputText"  value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
        
                      <span className="floating-label">Password</span>
                    </div>
                </div>

                <div className="name_container">
                   <div className="user_icon">
                     <img src={confirm} alt="" />
                   </div>
                   
                   <div className="user-input-wrp">
                    
                      <input type="password" value={confirmpassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} class="inputText"  required />
        
                      <span className="floating-label">Confirm password</span>
                    </div>
                </div>
                
                <div className="button">
                <button type="submit" className="Create_account_btn">Create an Account</button>
              
                <div className="login_here">
                Already have an account?<span onClick={()=>{
                  history.push("/signin")
                }} className="here"> Login</span>
                </div>

                <div className="signup_fb_button">
                    <div className="signup_with_text">Sign Up with Facebook</div>
                    <div className="fb_icon1">
                        <img src={fbicon} alt="" />
                    </div>
                </div>
                </div>

                </form>
            </div>


        </div>
    )
}

export default SignUp;