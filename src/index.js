import { default as React, Component } from "react";
export default class Map extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      script: document.createElement('script'),
      map: {},
      markers: [],
      loaded: false
    };
    this.load = this.load.bind(this);
  }

  load() {
    this.state.script.type = 'text/javascript';
    this.state.script.src = 'https://maps.googleapis.com/maps/api/js';
    this.state.script.onload = () => {
      this.state.map = new google.maps.Map(document.getElementById('map'), {
        center: this.props.initialCordinates,
        zoom: this.props.initialZoom
      });

      this.state.loaded = true;
      this.props.markers.forEach((obj)=>{
        this.state.markers.push(new google.maps.Marker({
          position: obj.position,
          map: this.state.map,
          title: obj.title,
          defaultAnimation: obj.defaultAnimation
        }));
      })
    };
    document.body.appendChild(this.state.script);
  }

  componentDidMount(){
    this.load();
  }



  render() {
    return (
      <div>
        <div style={this.props.styles} id="map"/>
      </div>
    );
  }
}


