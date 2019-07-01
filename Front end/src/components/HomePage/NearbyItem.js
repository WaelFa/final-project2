import React, { Component } from 'react';

class NearbyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item}=this.props
        return ( <div>
            <div className='destination-item-container'>
                <h2>Name : {item.name}</h2>
                <h3>phone : {item.phone}</h3>
                <h3>Email : {item.email}</h3>
            </div>
        </div> );
    }
}
 
export default NearbyItem;