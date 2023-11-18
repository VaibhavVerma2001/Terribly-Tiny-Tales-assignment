import "./ProfileDetails.scss";

const ProfileDetails = () => {
    return (
        <div className="ProfileDetails">
            <div className="profile-status">
                <div className="profilepic">
                    <img src="https://media.licdn.com/dms/image/C5603AQFOppZv_mWoHw/profile-displayphoto-shrink_400_400/0/1639198939746?e=1705536000&v=beta&t=9483vgXNVuJai_o6KEnTZTjUAylslp3NM2G1r8UZULw" alt="user-profile" />
                </div>
                <div className="details">
                    <div className="name">
                        <h2>Vaibhav Verma</h2> 
                        <i className = "gem-icon  fa-regular fa-gem"></i>
                        <i className="verify-icon fa-solid fa-check"></i>
                    </div>
                    <div className="stats">
                        <div className="followers">
                            <a href="/">6482</a>
                            <p>Followers</p>
                        </div>
                        <div className="following">
                            <a href="/">245</a>
                            <p>Following</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-bio">
                <p>Co-founder & CEO at Terribly Tiny Tales</p>
                <a href="https://www.linkedin.com/in/vaibhav-verma-21122001/">https://www.linkedin.com/in/vaibhav-verma-21122001/</a>
                <div className="icons">
                    {/* font awesome icons */}
                    <div className="ico">
                        <i className="star fa-regular fa-star"> </i> 125
                    </div>

                    <div className="ico">
                        <i className="like fa-regular fa-thumbs-up"> </i> 12
                    </div>

                    <div className="ico">
                        <i className="eye fa-regular fa-eye"></i>  57.8 k
                    </div>

                    <div className="ico">
                        <i className="heart fa-regular fa-heart"> </i> 26 k
                    </div>

                </div>
            </div>


        </div>
    )
}

export default ProfileDetails;