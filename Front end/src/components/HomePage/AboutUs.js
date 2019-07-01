import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <section className="about py-5">
                <div className="container py-lg-5 py-sm-4">
                    <div className="row">
                        <div className="col-lg-6 about-left">
                            <h3 className="mt-lg-3">We will take you to the Top destination in the world, <strong>Explore with us!</strong></h3>
                            <p className="mt-4">Duis nisi sapien, elementum finibus fermentum eget, aliquet leo et. Mauris hendrerit vel ex.
                              Quisque vitae luctus massa. Phasellus sed aliquam leo. Vestibulum ullamcorper a massa eu fringilla. Integer ultrices finibus sed nisi.
                              in convallis felis dapibus sit amet.</p>
                            <p className="mt-3"> Donec a arcu et sapien hendrerit accumsan. Pellentesque sit amet eros iac, elementum
                               urna ipsum accumsan, iaculis ligula. Aenean quam eget maximus in convallis felis dapibus sit amet.</p>
                        </div>
                        <div className="col-lg-6 about-right text-lg-right mt-lg-0 mt-5">
                            <img src="images/about.jpg" alt="" className="img-fluid abt-image" />
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col-lg-3 col-6">
                            <div className="counter">
                                <span className="fa fa-smile-o" />
                                <div className="timer count-title count-number">1000+</div>
                                <p className="count-text text-uppercase">happy customers</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="counter">
                                <span className="fa fa-ship" />
                                <div className="timer count-title count-number">2271</div>
                                <p className="count-text text-uppercase">Tours &amp; Travels </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-lg-0 mt-5">
                            <div className="counter">
                                <span className="fa fa-users" />
                                <div className="timer count-title count-number">200</div>
                                <p className="count-text text-uppercase">destinations</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-lg-0 mt-5">
                            <div className="counter">
                                <span className="fa fa-gift" />
                                <div className="timer count-title count-number">20+<span>years</span></div>
                                <p className="count-text text-uppercase">experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
