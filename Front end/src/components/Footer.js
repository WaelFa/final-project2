import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
  <section className="footer footer_w3layouts_section_1its py-5">
    <div className="container py-lg-4 py-3">
      <div className="row footer-top">
        <div className="col-lg-3 col-sm-6 footer-grid_section_1its_w3">
          <div className="footer-title">
            <h3>Address</h3>
          </div>
          <div className="footer-text">
            <p>Location : 1234 lock, Charlotte, North Carolina, United States</p>
            <p>Phone : +12 534894364</p>
            <p>Email : <a href="mailto:info@example.com">info@example.com</a></p>
            <p>Fax : +12 534894364</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 footer-grid_section mt-sm-0 mt-4">
          <div className="footer-title">
            <h3>About Us</h3>
          </div>
          <div className="footer-text">
            <p>Vivamus magna justo, laci niats eget consectetur sed, conval lis at tellus. Nulla quis lorem ipnt libero.
              Lorem ipsum dolor.</p>
          </div>
          <ul className="social_section_1info">
            <li className="mb-2 facebook"><a href="#"><span className="fa fa-facebook" /></a></li>
            <li className="mb-2 twitter"><a href="#"><span className="fa fa-twitter" /></a></li>
            <li className="google"><a href="#"><span className="fa fa-google-plus" /></a></li>
            <li className="linkedin"><a href="#"><span className="fa fa-linkedin" /></a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3">
          <div className="footer-title">
            <h3>Travel Places</h3>
          </div>
          <div className="row">
            <ul className="col-6 links">
              <li><a href="#choose" className="scroll">New Zealand </a></li>
              <li><a href="#overview" className="scroll">Paris, France </a></li>
              <li><a href="#pricing" className="scroll">Los Angles</a></li>
              <li><a href="#faq" className="scroll"> Darlington</a></li>
              <li><a href="#testimonials" className="scroll">Canada </a></li>
              <li><a href="#contact" className="scroll"> South Africa </a></li>
            </ul>
            <ul className="col-6 links">
              <li><a href="#">Spain </a></li>
              <li><a href="#">Turkey </a></li>
              <li><a href="#faq" className="scroll">Europe </a></li>
              <li><a href="#">Italy </a></li>
              <li><a href="#">Sweden </a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3">
          <div className="footer-title">
            <h3>Newsletter</h3>
          </div>
          <div className="footer-text">
            <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
            <form action="#" method="post">
              <input type="email" name="Email" placeholder="Enter your email..." required />
              <button className="btn1"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
              <div className="clearfix"> </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
 );
    }
}
 
export default Footer;