
import sender_profile from "./user.jpg"
import Sendmessage from "../../Components/send_messages";
import Recievemessage from "../../Components/Recieve_message";
import Backbutton from "./goback.svg";
import Pinbutton from "./pin.svg"
import Micbutton from "./mic_icon.svg"
import "./style.css";

const ChatBox = () => {
    return (
        <div className="chatbox_container">

          <div className="chatbox_header">
            <div className="sender_details_and_status">
                  <div className="senders_profile_image">
                  <img src={sender_profile} alt="user" className="sender_user_image"/>
                  </div>
                  <div className="sender_info">
                      <div className="sender_name_chatbox">Sukumaran</div>
                      <div className="sender_status_chatbox">Online</div>
                  </div>
            </div>
            <div className="go_back_button_to_home">
            <img src={Backbutton} alt="user" className="back_button_here"/>

              
            </div>
          </div>
          <div className="chatbox_body">

          <Sendmessage/>
          <Sendmessage/>
          <Recievemessage/>

          <Recievemessage/>

          <Sendmessage/>
          <Sendmessage/>
          <Sendmessage/>
          <Recievemessage/>
          <Sendmessage/>
          <Recievemessage/>

          <Sendmessage/>
          <Recievemessage/>

          <Sendmessage/>
          <Sendmessage/>
          <Sendmessage/>
          <Recievemessage/>
          <Recievemessage/>
          <Recievemessage/>



          </div>
          <div className="chatbox_typing_section">
                <div className="pin_icon">
                <img src={Pinbutton} alt="pin"/>

                </div>
                <div className="write_a_message">
                  <input type="textarea" className="message_writing_section" placeholder="write a message"/>

                </div>
                <div className="voice_message_icon">
                <img src={Micbutton} alt="pin"/>

                </div>
            
            </div>


        </div>
    )
}

export default ChatBox
