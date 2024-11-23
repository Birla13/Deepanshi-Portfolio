import React from 'react'
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";
import w5 from "../../assets/w5.png";
import w7 from "../../assets/w7.png";
import "./Works.css"

const Works = () => {
  return (
    <div className='works-container' id='works'>
      <h1>My Recent Works</h1>
      <div className="works-list-container">
        <div className="works-item">
          <a href='https://deepanshi-portfolio-gamma.vercel.app/' target='_blank'><img src={w1} alt="work1" /></a>
          <div className="about">
            <span>Portfolio</span>
            <p><i class="fab fa-html5"></i>
              <i class="fab fa-css3"></i>
              <i class="fab fa-js"></i>
              <i class="fa-brands fa-react"></i>  </p>
          </div>
        </div>
        <div className="works-item">
        <a href='https://birla13.github.io/Covid-Safety-Website/' target='_blank'><img src={w2} alt="work2" /></a>
          <div className="about">
            <span>Covid-Website</span>
            <p><i class="fab fa-html5"></i>
              <i class="fab fa-css3"></i>
              <i class="fab fa-js"></i>
            </p>
          </div>
        </div>
        <div className="works-item">
        <a href='https://github.com/Birla13/Portfolio' target='_blank'><img src={w3} alt="work3" /></a>
          <div className="about">
            <span>Portfolio UI</span>
            <p><i class="fab fa-figma"></i>
            </p>
          </div>
        </div>
        <div className="works-item">
          <a href='https://github.com/Birla13/Grocery-Website' target='_blank'><img src={w4} alt="work4" /></a>
          <div className="about">
            <span>Grocery Website</span>
            <p><i class="fab fa-html5"></i>
              <i class="fab fa-css3"></i>
              <i class="fab fa-js"></i>  </p>
          </div>
        </div>
        <div className="works-item">
          <a href="https://birla13.github.io/Count-Down-Project/" target='_blank'><img src={w5} alt="work5" /></a>
          <div className="about">
            <span>Count-Down Timer</span>
            <p><i class="fab fa-html5"></i>
              <i class="fab fa-css3"></i>
              <i class="fab fa-js"></i>
            </p>
          </div>
        </div>
        <div className="works-item">
          <a href="https://www.figma.com/file/nLSYgbXuFMpZDTNzkysaRS/Money-Management-App?type=design&mode=design&t=nYeOyxTcT2tg9szK-1" target='_blank'><img src={w7} alt="work7" /></a>
          <div className="about">
            <span>Money Management App UI</span>
            <p><i class="fab fa-figma"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
