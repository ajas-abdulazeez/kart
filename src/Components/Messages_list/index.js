
import "./style.css"
import profile_pic from "./person.svg"



const Messagelist = () => {
    return (
        <div className="chat_content">
                     <div className="profile_pic">
                         <img src={profile_pic} />
                     </div>

                     <div className="profile_info">
                         <span class="name">Name</span>
                         <br /><span class="online">Online</span>
                     </div>

                </div>   
    )
}

export default Messagelist
