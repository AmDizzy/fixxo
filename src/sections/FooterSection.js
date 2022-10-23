import React from 'react'

const FooterSection = () => {
  return (
    <footer>
        <div className="social-media">
            <a href="#" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-google"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="copyright-information">
            <span>© 2022 Fixxo. All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default FooterSection