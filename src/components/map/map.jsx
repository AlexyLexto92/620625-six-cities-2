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
    const {offersPlace, city} = this.props;
    const cityOffers = offersPlace.filter((offer) => offer.city.name === city);
    const startCoord = Object.values(cityOffers[0].location);
    const cityCoord = startCoord.slice(0,2);
    const zoom = startCoord.slice(2,3);

    const icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [26, 41],
    });

    this.map = L.map(this.mapRef.current, {
      center: this.cityCoord,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    })

    this.map.setView(cityCoord, zoom);
    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(this.map);

    let a = Array.from(
      cityOffers.map((elem) => {
        return L.marker(Object.values(elem.location), {icon:icon});
      }))
    this.markersLayer = L.layerGroup(a).addTo(this.map);
  }
  componentDidUpdate() {
    const {activeCard, city, offersPlace} = this.props;
    const sliceValue = {
      startCoordSlice: 0,
      countCoordSlice: 2,
      startZoomSlice: 2,
      countZoomSlice: 3,
    };
    
    const cityOffers = offersPlace.filter((offer) => offer.city.name === city);
    const startCoord = Object.values(cityOffers[0].city.location);
    const cityCoord = startCoord.slice(sliceValue.startCoordSlice, sliceValue.countCoordSlice);
    const zoom = startCoord.slice(sliceValue.startZoomSlice, sliceValue.countZoomSlice);
    this.map.center = cityCoord;
    this.map.zoom = zoom;

   
    const icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [26, 41],
    });

    const iconActive = L.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [26, 41],
    })

    this.markersLayer.clearLayers();

    let a = Array.from(
      cityOffers.map((elem) => {
        return L.marker(Object.values(elem.location), { icon: elem.id === activeCard ? iconActive : icon });
      }))

    if (activeCard >= 0) {
      const location= cityOffers.find(elem => elem.id === activeCard).location;
      let coord = Object.values(location);
      this.map.panTo(coord)
      }

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

const mapStateToProps = (state) => {
  return {
    city: state.userActions.city,
    activeCard: state.userActions.activeCard,
    offersPlace: state.serverData.offersPlace,
  }
};

export default connect(mapStateToProps)(Map);