import React from 'react'
import Typical from 'react-typical';
import "./Header.css"
import profileImg  from  "../../assets/profileImg.jpg"

const Header = () => {
  return (
    <div className="header-container">
        {/* header content */}
        <div className="header-content">
            <h1>Hy! Am </h1>
            <h2 className="fullname">Deepanshi Birla</h2>
            <h2>I'm a {" "}
                <Typical
                steps={['Full Stack Developer💙',1000,"Frontend Developer✌️",1000,"UI/UX Designer👧",1000]}
                loop={Infinity}
                wrapper='b'
                />
            </h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vitae quaerat architecto magnam quod dolorum, doloribus facere, inventore sint sunt numquam exercitationem et asperiores voluptas nulla doloremque necessitatibus optio temporibus.
            </p>
            <div className="header-payment-container">
                <button>Hire Me</button>
            </div>
            
        </div>
        {/* image container */}
        <div className="profile-img-container">
                <img src={profileImg} alt="profile image" />
                <div className="circle-1"></div>
                <div className="circle-2"></div>
            </div>
    </div>
  )
}

export default Header;
