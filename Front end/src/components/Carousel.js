import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <section className="banner_w3lspvt" id="home">
                <div className="csslider infinity" id="slider1">
                    <input type="radio" name="slides" defaultChecked="checked" id="slides_1" />
                    <input type="radio" name="slides" id="slides_2" />
                    <input type="radio" name="slides" id="slides_3" />
                    <input type="radio" name="slides" id="slides_4" />
                    <ul>
                        <li>
                            <div className="banner-top">
                                <div className="overlay">
                                    <div className="container">
                                        <div className="w3layouts-banner-info">
                                            <h3 className="text-wh">Never let your memories be greater than your dreams.</h3>
                                            <h4 className="text-wh">tristique senectus et netus et malesuada</h4>
                                            <div className="buttons mt-4">
                                                <a href="about.html" className="btn mr-2">About Us</a>
                                                <a href="booking.html" className="btn">Book a Tour</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="banner-top1">
                                <div className="overlay">
                                    <div className="container">
                                        <div className="w3layouts-banner-info">
                                            <h3 className="text-wh">It is better to travel than to arrive. Let's Be Adventurers.</h3>
                                            <h4 className="text-wh">tristique senectus et netus et malesuada</h4>
                                            <div className="buttons mt-4">
                                                <a href="about.html" className="btn mr-2">About Us</a>
                                                <a href="booking.html" className="btn">Book a Tour</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="banner-top2">
                                <div className="overlay">
                                    <div className="container">
                                        <div className="w3layouts-banner-info">
                                            <h3 className="text-wh">Never let your memories be greater than your dreams.</h3>
                                            <h4 className="text-wh">tristique senectus et netus et malesuada</h4>
                                            <div className="buttons mt-4">
                                                <a href="about.html" className="btn mr-2">About Us</a>
                                                <a href="booking.html" className="btn">Book a Tour</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="banner-top3">
                                <div className="overlay1">
                                    <div className="container">
                                        <div className="w3layouts-banner-info">
                                            <h3 className="text-wh">It is better to travel than to arrive. Let's Be Adventurers.</h3>
                                            <h4 className="text-wh">tristique senectus et netus et malesuada</h4>
                                            <div className="buttons mt-4">
                                                <a href="about.html" className="btn mr-2">About Us</a>
                                                <a href="booking.html" className="btn">Book a Tour</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="arrows">
                        <label htmlFor="slides_1" />
                        <label htmlFor="slides_2" />
                        <label htmlFor="slides_3" />
                        <label htmlFor="slides_4" />
                    </div>
                </div>
            </section>

        )
    }
}
