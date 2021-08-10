
import "./style.css"
import search_icon from "./search.svg"
import back_icon from "./return-back.svg"
import profile_pic from "./person.svg"


const ChatList = () => {
    return (
     <div className="chatlist_container">
         <div className="chatlist_header">
        <div className="return_icon"><img src={back_icon} width="20px" height="25px" /> </div>
             Conversations
        <div className="search_icon"><img src={search_icon} width="20px" height="20px" /></div>
         </div>

          <div className="chat_body">
                <div className="chat_content">
                     <div className="profile_pic">
                         <img src={profile_pic} />
                     </div>

                     <div className="profile_info">
                         <span class="name">Name</span>
                         <br /><span class="online">Online</span>
                     </div>

                </div>    
          </div>  
     </div>
    )
}

export default ChatList;


