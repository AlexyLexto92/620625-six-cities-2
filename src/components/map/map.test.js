import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from './map.jsx';

describe(`Initial Map`, () => {
  const offers = [
    {
      title: `Beautiful & luxurious apartment at great location`,
      coast: 120,
      type: `Apartment`,
      isPremium: true,
      img: `img/apartment-01.jpg`,
      coordinats: [52.3909553943508, 4.85309666406198],
    },
    {
      title: `Wood and stone place`,
      coast: 80,
      type: `Private room`,
      isPremium: false,
      img: `img/room.jpg`,
      coordinats: [52.369553943508, 4.85309666406198],
    },
    {
      title: `Canal View Prinsengracht`,
      coast: 132,
      type: `Apartment`,
      isPremium: false,
      img: `img/apartment-02.jpg`,
      coordinats: [52.3909553943508, 4.929309666406198],
    },
    {
      title: `Nice, cozy, warm big bed apartment`,
      coast: 180,
      type: `Apartment`,
      isPremium: false,
      img: `img/apartment-03.jpg`,
      coordinats: [52.3809553943508, 4.939309666406198],
    }
  ];
  it(`render correctly`, () => {

    const leafletMock = jest.mock(`leaflet`);
    const citys = [{
      coords: [0, 0],
    }];

    const tree = renderer
      .create(<Map offers={offers} leaflet={leafletMock} citys={citys}/>, {
        createNodeMock: () => {

          let mapMock = document.createElement(`section`);
          mapMock.setAttribute(`id`, `map`);
          document.body.appendChild(mapMock);

          return mapMock;

        }
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
