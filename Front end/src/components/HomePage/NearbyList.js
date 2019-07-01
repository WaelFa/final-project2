import React, { Component } from 'react';
import { connect } from 'react-redux'
import NearbyItem from './NearbyItem'

class NearbyList extends Component {
    //   componentDidMount=()=>{
    //             axios.get('/get-destination').then((res)=>this.props.updateNearbyReducer(res.data))
    //         }

    render() {
        const { destinations } = this.props
        return (
            <section>
                <div className='destination-list-container'>
                    {
                        destinations.map((el, index) =>
                            <NearbyItem key={index} item={el} />)
                    }
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        destinations: state.NearbyReducer
    }
}


export default connect(mapStateToProps)(NearbyList);