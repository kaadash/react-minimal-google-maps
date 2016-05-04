'use strict';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from '../../src/index.js'
import Code from './js/Code'

class App extends Component {
  constructor() {
    super();
    this.state = {
      API: {},
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
    this.handleLoadUpdate = this.handleLoadUpdate.bind(this);
  }
  
  centerToAddress(event){
    // Be sure that API loaded properly
    if(this.state.API.isLoaded && ((event.which === 13) || typeof event === 'undefined')) {
      // Simply use object from Google Maps API
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': this.refs.searchCityInput.value}, (results, status) => {
        console.log(this.state.address);
        if (status === google.maps.GeocoderStatus.OK) {
          this.state.API.map.setCenter(results[0].geometry.location);
        } else {
          console.warn('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  }


  handleLoadUpdate(result){
    this.setState({
      API: {
        isLoaded: result.isLoaded,
        map: result.map
      }
    });
    // we can load some objects from google API here
    console.log("API loaded - parent component");
  }

  render() {
    return (
      <div className="container-fluid">
        <div>
          <div className="col-md-6" onKeyPress={this.centerToAddress}>
            <input className="form-control" type="text" ref="searchCityInput"/>
            <button className="btn btn-default" onClick={this.centerToAddress}>Find</button>
            <Code/>
          </div>
          <div className="col-md-6">
            <Map
              initialZoom={5}
              initialCordinates={{lat: -34.397, lng: 150.644}}
              markers={this.state.markers}
              styles={{height: "500px"}}
              updateLoadState={this.handleLoadUpdate}
            />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
