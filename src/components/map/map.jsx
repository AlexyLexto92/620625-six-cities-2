import React, { PureComponent } from "react";
import L from 'leaflet';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

export class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  componentWillUnmount() {
    this.map.remove();
  }

  componentDidMount() {
    const { cityOffers } = this.props;
    const city = [52.38333, 4.9];
    const zoom = 13;

    const icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [100, 100],
    });
    this.map = L.map(this.mapRef.current, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    })

    this.map.setView(city, zoom);
    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(this.map);
   
     let a = Array.from(
        cityOffers.map((elem) => {
        return  L.marker(elem.coordinates, this.icon);
        }))
        this.markersLayer = L.layerGroup(a).addTo(this.map); 
  }
  componentDidUpdate() {
    const { cityOffers } = this.props;
    this.markersLayer.clearLayers();
    let a = Array.from(
      cityOffers.map((elem) => {
      return  L.marker(elem.coordinates, this.icon);
      }))
      this.markersLayer = L.layerGroup(a).addTo(this.map); 
  }

  render() {
    return <section id="map" className="cities__map map" ref={this.mapRef} style={{ width: `100%`, height: `100%` }} />;
  }
}
Map.propTypes = {
  cityOffers: PropTypes.arrayOf(
    PropTypes.shape({})
  )
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cityOffers: state.cityOffers,
});

export default connect(mapStateToProps)(Map);