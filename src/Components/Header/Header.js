import React from 'react'
import Typical from 'react-typical';
import "./Header.css"
import profileImg from "../../assets/profileImg.jpg"

const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hi, I'm</h1>
        <h2 className="fullname">Deepanshi Birla </h2>
        <h2>a UI/UX Designer crafting better digital journeys.</h2>
        {/* <h2>I'm a {" "}
                <Typical
                steps={['Full Stack Developer💙',1000,"Frontend Developer✌️",1000,"UI/UX Designer👧",1000]}
                loop={Infinity}
                wrapper='b'
                />
            </h2> */}
        <p>
          I’m a UI/UX designer with a background in Computer Science and a passion for solving real-world problems through thoughtful design. Currently at Care Health Insurance, I work on improving user engagement and retention by optimizing web and mobile experiences. I enjoy clean aesthetics, logical flows, and using design as a tool to drive meaningful impact.
        </p>
        <div className="header-payment-container">
          <button>Hire Me</button>
        </div>

      </div>
      {/* image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="profile image" />
        {/* <div className="circle-1"></div>
        <div className="circle-2"></div> */}
      </div>
    </div>
  )
}

export default Header;
