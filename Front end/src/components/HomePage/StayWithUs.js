import React, { Component } from 'react';

class Stay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="book py-5">
  <div className="container py-lg-5 py-sm-3">
    <h2 className="heading text-capitalize text-center"> Stay With Us</h2>
    <div className="row mt-5 text-center">
      <div className="col-lg-4 col-sm-6">
        <div className="grid-info">
          <div className="icon">
            <span className="fa fa-map-signs" />
          </div>
          <h4>Pick A Room</h4>
          <p className="mt-3">Vestibulum urna ligula, molestie at ante ut, finibus. Integer ultrices finibus sed nisi in convallis sed dolor.</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mt-sm-0 mt-5">
        <div className="grid-info">
          <div className="icon">
            <span className="fa fa-calendar" />
          </div>
          <h4>Select Date</h4>
          <p className="mt-3">Vestibulum urna ligula, molestie at ante ut, finibus. Integer ultrices finibus sed nisi in convallis sed dolor.</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mt-lg-0 mt-5">
        <div className="grid-info">
          <div className="icon">
            <span className="fa fa-gift" />
          </div>
          <h4>Enjoy Your Stay</h4>
          <p className="mt-3">Vestibulum urna ligula, molestie at ante ut, finibus. Integer ultrices finibus sed nisi in convallis sed dolor.</p>
        </div>
      </div>
    </div>
  </div>
</div>
 );
    }
}
 
export default Stay;