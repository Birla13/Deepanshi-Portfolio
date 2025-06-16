import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div id='Case Studies'>
      <div className="services-container">
        <div className="services-list-container">
          {/* description */}
          <div className="services-desc-constainer">
            <h1>My Core
              <br></br><span>Fields</span></h1>
            {/* <p>I specialize in delivering top-notch web development and captivating UI/UX design solutions, ensuring a seamless digital experience for clients and their users. With a keen eye for detail and cutting-edge technology, I transform ideas into visually stunning and functionally robust online platforms.</p> */}
          </div>
          {/* list */}
          <div className="service-item-container">
            {/* <div className="services-item">
              <i className='fa-solid fa-code'></i>
              <div className="item-desc">
                <h3>Web Development</h3>
                <p>Harnessing the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack, I craft dynamic and scalable web applications that redefine user experiences. From database management to front-end design, my expertise in MERN development ensures efficient, real-time solutions tailored to modern digital demands. With a focus on flexibility and performance, I deliver immersive web solutions that elevate businesses to new heights.</p>
              </div>
            </div> */}
            <div className="services-item">
              <i className='fa-solid fa-tablet-alt'></i>
              <div className="item-desc">
                <h3>UI/UX Design</h3>
                <p>With a background in Computer Science and hands-on experience at Care Health Insurance, I design intuitive interfaces that solve real problems. Whether it’s improving onboarding, optimizing navigation, or making flows simpler, I approach every screen with user empathy and product clarity in mind. My toolkit includes Figma, wireframes, prototypes, and user journey thinking—applied across insurance apps, agent portals, and customer dashboards.</p>
              </div>
            </div>
            <div className="services-item">
              <i className='fa-solid fa-desktop'></i>
              <div className="item-desc">
                <h3>Frontend Development</h3>
                <p>As a frontend developer with a foundation in HTML, CSS, JavaScript, and React, I bring designs to life through clean, responsive code. I’ve built real-world projects using these technologies and collaborated closely with UI/UX and backend teams to ensure seamless handoffs and pixel-perfect implementation. From reusable components to accessible layouts, I focus on building intuitive, scalable interfaces that feel effortless to use and easy to maintain.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
