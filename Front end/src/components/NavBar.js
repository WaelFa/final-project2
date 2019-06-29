import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    {/* nav */}
                    <nav className="py-md-4 py-3 d-lg-flex">
                        <div id="logo">
                            <h1 className="mt-md-0 mt-2"> <a href="index.html"><span className="fa fa-map-signs" /> Royal Hotel Lido </a></h1>
                        </div>
                        <label htmlFor="drop" className="toggle"><span className="fa fa-bars" /></label>
                        <input type="checkbox" id="drop" />
                        <ul className="menu ml-auto mt-1">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li className><a href="about.html">About Us</a></li>
                            <li className><a href="services.html">Services</a></li>
                            <li className><a href="packages.html">Packages</a></li>
                            <li className><a href="contact.html">Contact</a></li>
                            <li className="booking"><a href="booking.html">Book Now</a></li>
                        </ul>
                    </nav>
                    {/* //nav */}
                </div>
            </header>

        )
    }
}
