# Minimal React component for Google Maps
## ES6, React v15.01
[![version](https://img.shields.io/npm/v/npm-install-loader.svg)](http://npm.im/react-minimal-google-maps)
[![downloads](https://img.shields.io/npm/dm/npm-install-loader.svg)](http://npm-stat.com/charts.html?package=react-minimal-google-maps)
[![MIT License](https://img.shields.io/npm/l/npm-install-loader.svg)](http://opensource.org/licenses/MIT)

It enables to use all features of Google Maps API from parent component.

[Demo](https://kaadash.github.io)

# Features
It has only a few features on startup:
* Passing markers as props
* Passing initial position and zoom
* Informing parent component when Google Maps API is ready

# Getting started
Firstly
```
    npm install react-minimal-google-maps --save
```
Then
```javascript
    import Map from 'react-minimal-google-maps'
```
and in render function use something like this:
```html
    <Map
      initialZoom={5}
      initialCordinates={{lat: -34.397, lng: 150.644}}
      markers={this.state.markers}
      styles={{height: "500px"}}
      updateLoadState={this.handleLoadUpdate}
    />
```
See [example](https://kaadash.github.io)