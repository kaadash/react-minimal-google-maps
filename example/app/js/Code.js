'use strict';
import React, { Component } from 'react'

export default class Code extends Component {
  constructor(){
    super();
    this.state = {
      code: `
          'use strict';
          import React, { Component } from 'react'
          import ReactDOM from 'react-dom'
          import Map from '../../src/index.js'

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
                    </div>
                    <div className="col-md-6">
                      <Map
                        initialZoom={5}
                        initialCordinates={{lat: -34.397, lng: 150.644}}
                        markers={this.state.markers}
                      />
                  </div>
                </div>
              </div>
            )
          }
        }
        ReactDOM.render(<App/>, document.getElementById("app"));`
    }
  }
  render() {
    return (
      <div>
        <pre>
          <code className="language-jsx">
            {this.state.code}
          </code>
        </pre>
      </div>
    )
  }
}