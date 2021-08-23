import "./style.css";
import rated_user_profile from "./user.jpg"
import StarRatings from 'react-star-ratings';


const Customerrating = ({costomerData}) => {
    return (
        <div className="customers_rating">

            <div className="rating_header">
                <div className="rated_user_profile">
                    <img src={rated_user_profile} alt="user" className="rated_user_image"/>

                </div>
                <div className="rated_short_details">
                        <div className="rated_info">
                            <div className="rated_username">{costomerData.name}</div>
                            <div className="user_ratings">
                                <StarRatings starDimension="20px" starSpacing="3px" rating={3.6} starRatedColor="#1EBAD6"/>
                                
                            </div>
                        </div>
                <div className="rated_time">Reviewed in India on {costomerData.time}</div>
                </div>
            </div>

            <div className="rating_description">
            Strongly don't buy. Overheating issue persis
                t and drain battery fast. cameras are average
                like 12000/ series phone.rated_user
            </div>


{/* akash */}
        </div>
    )
}

export default Customerrating
