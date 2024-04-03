import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="footer-copyright">
        <p>© 2024 Deepanshi Birla</p>
      </div>
      <ul className='footer-social-media'>
        <li>
            <a href="mailto:deepsbirla13@gmail.com  ">
                 <i className="fa fa-envelope"></i>
            </a>
        </li>
        {/* <li>
            <a href="">
                 <i className="fa-brands fa-twitter"></i>
            </a>
        </li> */}
        <li>
            <a href="https://www.instagram.com/deepanshibirla?igsh=M2d3NnhwbjV4eWRu">
                 <i className="fa-brands fa-instagram"></i>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/deepanshi-birla-66a573218/">
                 <i className="fa-brands fa-linkedin"></i>
            </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
