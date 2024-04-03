import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div>
      <div className="services-container">
        <div className="services-list-container">
        {/* description */}
        <div className="services-desc-constainer">
            <h1>My Awesome <span>Services</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolore voluptatem accusamus nisi, aspernatur dignissimos. Amet, alias vitae autem delectus harum est odio repellendus libero eligendi reiciendis molestias similique repudiandae.</p>
            <button>Hire Me</button>
        </div>
        {/* list */}
        <div className="service-item-container">
            <div className="services-item">
                <i className='fa-solid fa-code'></i>
                <div className="item-desc">
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda placeat explicabo aut tempora dolores libero, magni quis, qui at eaque quasi ipsa eveniet corporis molestias fuga ipsum! Cupiditate, qui.</p>
                </div>
            </div>
            <div className="services-item">
                <i className='fa-solid fa-tablet-alt'></i>
                <div className="item-desc">
                    <h3>UI/UX Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit repellendus molestiae reprehenderit, tempore cum blanditiis consequuntur cumque, quidem libero eligendi sequi accusamus saepe harum eaque! Non molestiae at est error.</p>
                </div>
            </div>
            <div className="services-item">
                <i className='fa-solid fa-desktop'></i>
                <div className="item-desc">
                    <h3>Frontend Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a iure maxime, qui quis amet culpa ratione adipisci reiciendis cum. Modi sequi perferendis fuga veniam, soluta non illo ex consequatur.</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services
