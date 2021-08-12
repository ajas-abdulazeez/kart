
import "./style.css"
import search_icon from "./search.svg"
import back_icon from "./return-back.svg"
import Messagelist from "../../Components/Messages_list"


const ChatList = () => {
    return (
     <div className="chatlist_container">
         <div className="chatlist_header">
            <div className="return_icon"><img src={back_icon} width="20px" height="20px" />Conversations </div>
                
            <div className="search_icon"><img src={search_icon} /></div>
         </div>

          <div className="chat_body">

              <Messagelist/>
              <Messagelist/>
              <Messagelist/>
                 
          </div>  
     </div>
    )
}

export default ChatList;


