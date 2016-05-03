'use strict';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from '../../src/index.js'
import Code from './js/Code'

class App extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      markers: [
        {
          position: {lat: -34.397, lng: 150.644},
          title: 'Hello World!',
          defaultAnimation: 2
        },
        {
          position: {lat: -32.397, lng: 150.644},
          title: 'Hello Github!',
          defaultAnimation: 2
        }
      ]
    };

    this.centerToAddress = this.centerToAddress.bind(this);
    this.addMarker = this.addMarker.bind(this);
  }
  
  centerToAddress(){
    this.setState({
      address: this.searchCityInput.test.value
    });
  }
  
  addMarker(){
    this.setState({
      address: this.searchCityInput.test.value
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div>
          <div className="col-md-6">
            <input type="text" ref="searchCityInput"/>
            <button onClick={this.centerToAddress}>Find</button>
            <button onClick={this.addMarker}>Add marker</button>
            <Code/>
          </div>
          <div className="col-md-6">
            <Map
              initialZoom={5}
              initialCordinates={{lat: -34.397, lng: 150.644}}
              markers={this.state.markers}
              styles={{height: "500px"}}
            />
          </div>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
