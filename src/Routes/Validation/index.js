import './style.css'

function Validation() {
    return (
        <div>
            <div className="verification_card">
                <div className="enter_otp_text">
                    Please Enter the OTP to Verify your Account
                </div>
                <div className="otp_text">
                    A OTP (one time password) has been sent to **********
                </div>

                <div className="otp_container">
                    <input className="otp_box" type="text" id="otp" name="otp" placeholder="Enter the OTP"/>

                    <button className="validate_button">Validate OTP</button>
                    <div className="resend_otp">Resend OTP</div>
                </div>
            </div>
        </div>
    )
}

export default Validation
