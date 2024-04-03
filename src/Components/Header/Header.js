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
            Deepanshi recently graduated from the Indian Institute of Information Technology, Kota, with a Bachelor's degree in Computer Science. Her technical skills include proficiency in languages like C++, Python, and technologies such as HTML/CSS, JavaScript, and frameworks like ReactJS and NodeJS. Noteworthy projects include a COVID Awareness Website, a Grocery Website, a Money Management App, and a Portfolio Website, showcasing her expertise in UI/UX design and web development. Additionally, Deepanshi has achieved recognition for her problem-solving abilities, completing various programming challenges on platforms like Leetcode and GeeksforGeeks.
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
