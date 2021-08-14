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

                <h1>Enter OTP</h1>
                <div className="userInput">
                    <input className="otp_box" type="text" id='ist' maxLength="1"  />
                    <input className="otp_box" type="text" id='sec' maxLength="1" onKeyUp="clickEvent(this,'third')" />
                    <input className="otp_box" type="text" id='third' maxLength="1" onKeyUp="clickEvent(this,'fourth')" />
                    <input className="otp_box" type="text" id='fourth' maxLength="1" onKeyUp="clickEvent(this,'fifth')" />
                    <input className="otp_box" type="text" id='fifth' maxLength="1"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Validation
