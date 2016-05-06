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
  
  centerToAddress(shouldAddMarker){
    // Be sure that API loaded properly
    if(this.state.API.isLoaded) {
      // Simply use object from Google Maps API
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': this.refs.searchCityInput.value}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          this.state.API.map.setCenter(results[0].geometry.location);
          this.state.API.map.setZoom(17);
          if(shouldAddMarker) {
            var markers = this.state.markers;
            markers.push({position: results[0].geometry.location, title: '', defaultAnimation: 2});
            this.setState({markers: markers});
          }
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
          <div className="col-md-6">
            <input className="form-control" type="text" ref="searchCityInput"/>
            <button className="btn btn-default" onClick={()=>this.centerToAddress(false)}>Find</button>
            <button className="btn btn-default" onClick={()=>this.centerToAddress(true)}>Add marker</button>
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
