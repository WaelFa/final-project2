import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
import Carousel from './Carousel'
import Stay from './StayWithUs'
import NearbyList from './NearbyList'
import AboutUs from "./AboutUs"
import Footer from '../Footer'

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                This is the page
                <NavBar/>
                <Carousel/>
                <Stay/>
                <NearbyList/>
                <AboutUs/>
                <Footer/>
            </div>
        );
    }
}

export default Home;