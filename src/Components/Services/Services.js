import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div id='Services'>
      <div className="services-container">
        <div className="services-list-container">
        {/* description */}
        <div className="services-desc-constainer">
            <h1>My Awesome <span>Services</span></h1>
            <p>I specialize in delivering top-notch web development and captivating UI/UX design solutions, ensuring a seamless digital experience for clients and their users. With a keen eye for detail and cutting-edge technology, I transform ideas into visually stunning and functionally robust online platforms.</p>
            <button>Hire Me</button>
        </div>
        {/* list */}
        <div className="service-item-container">
            <div className="services-item">
                <i className='fa-solid fa-code'></i>
                <div className="item-desc">
                    <h3>Web Development</h3>
                    <p>Harnessing the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack, I craft dynamic and scalable web applications that redefine user experiences. From database management to front-end design, my expertise in MERN development ensures efficient, real-time solutions tailored to modern digital demands. With a focus on flexibility and performance, I deliver immersive web solutions that elevate businesses to new heights.</p>
                </div>
            </div>
            <div className="services-item">
                <i className='fa-solid fa-tablet-alt'></i>
                <div className="item-desc">
                    <h3>UI/UX Design</h3>
                    <p>With Figma as my canvas, I orchestrate immersive and intuitive user experiences that resonate with audiences. From wireframing to prototyping, I leverage Figma's collaborative tools to sculpt visually compelling designs that breathe life into digital interfaces. With meticulous attention to detail and a user-centric approach, I craft interfaces that captivate and delight, ensuring seamless navigation and engagement.</p>
                </div>
            </div>
            <div className="services-item">
                <i className='fa-solid fa-desktop'></i>
                <div className="item-desc">
                    <h3>Frontend Development</h3>
                    <p>In the dynamic world of frontend development, I specialize in crafting captivating user interfaces that seamlessly blend aesthetics with functionality. Leveraging cutting-edge technologies like HTML, CSS, and JavaScript, I architect intuitive and responsive web applications that elevate user experiences. With a keen eye for design principles and a passion for innovation, I breathe life into pixels, transforming concepts into immersive digital realities that leave a lasting impression.</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services
