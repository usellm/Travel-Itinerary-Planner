import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import apiKey from '../../config';

const Hotels = (props) => {
  const [hotelResults, setHotelResults] = useState([]);
  const [placeResults, setPlaceResults] = useState([]);
  const [placeInput, setPlaceInput] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const endCity = searchParams.get('endCity');
    if (endCity) {
      setPlaceInput(endCity);
    }
    findHotels();
  }, [placeInput]);

  const findHotels = () => {
    const geocoder = new props.google.maps.Geocoder();

    geocoder.geocode({ address: placeInput }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        const place = results[0];
        const placeLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          place.formatted_address
        )}`;
        let placeAddress = place.formatted_address;
        const location = place.geometry.location;

        const map = new props.google.maps.Map(document.createElement('div'));
        const placesService = new props.google.maps.places.PlacesService(map);

        const request = {
          placeId: place.place_id,
          fields: ['name', 'photos'],
        };

        placesService.getDetails(request, (place, status) => {
          if (status === 'OK' && place) {

            const photoURL =
              place.photos && place.photos.length > 0
                ? place.photos[0].getUrl()
                : 'placeholder.jpg';
            const placeID = place.name;
            const places = []
            places.push(
              <div className="place" key={placeID}>
                <div>
                  <img
                    src={photoURL}
                    alt={place.name}
                    style={{ width: 'auto', maxHeight: '200px' }}
                  />
                </div>
                <h2>Place: {placeAddress}</h2>
                <p>
                  <a href={placeLink} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
                </p>
              </div>
            );

            setPlaceResults(places);

            const nearbySearchRequest = {
              location: location,
              radius: 20000, // Set the radius parameter to 20000 meters (20 kilometers)
              type: 'lodging',
            };

            placesService.nearbySearch(
              nearbySearchRequest,
              (results, status, pagination) => {
                if (status === 'OK' && results.length > 0) {
                  const hotels = [];

                  for (let i = 0; i < Math.min(6, results.length); i++) {
                    const hotel = results[i];
                    const name = hotel.name;
                    const rating = hotel.rating;
                    const placeId = hotel.place_id;
                    if (!hotel['photos']) {
                      continue; // Skip this iteration if photos do not exist
                    }
                    const photoURL = hotel['photos'][0].getUrl({ maxWidth: 100 });

                    hotels.push(
                      <div key={placeId} className="hotel-class">
                        <div>
                          <img src={photoURL} alt={name} />
                        </div>
                        <h2>{name}</h2>
                        <div className="rating">Rating: {rating}</div>
                        <div className="booking">
                          <a href="#" onClick={() => bookHotel(placeId)}>
                            Book Now
                          </a>
                        </div>
                      </div>
                    );
                  }

                  if (pagination && pagination.hasNextPage) {
                    hotels.push(
                      <div key="load-more" className="load-more">
                        <p>
                          <a href="#" onClick={loadMore}>
                            Load More
                          </a>
                        </p>
                      </div>
                    );
                  }
                  setHotelResults(hotels);
                } else {
                  console.log('No hotels found.');
                }
              });
          } else {
            console.log('Failed to retrieve place details.');
          }
        });
      }
    });
  };

  const bookHotel = (placeId) => {
    // Implement the booking functionality here
    const map = new props.google.maps.Map(document.createElement('div'));
    const placesService = new props.google.maps.places.PlacesService(map);

    const request = {
      placeId: placeId,
      fields: ['url']
    };

    placesService.getDetails(request, (place, status) => {
      if (status === 'OK' && place && place.url) {
        window.open(place.url, '_blank');
      } else {
        console.log('Failed to retrieve booking information.');
      }
    });
    console.log('Booking hotel with placeId:', placeId);
  };

  const loadMore = () => {
    const geocoder = new props.google.maps.Geocoder();

    geocoder.geocode({ address: placeInput }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        const place = results[0];
        const location = place.geometry.location;

        const map = new props.google.maps.Map(document.createElement('div'));
        const placesService = new props.google.maps.places.PlacesService(map);

        const request = {
          placeId: place.place_id,
          fields: ['name', 'photos'],
        };

        placesService.getDetails(request, (place, status) => {
          if (status === 'OK' && place) {

            const nearbySearchRequest = {
              location: location,
              radius: 50000, // Set the radius parameter to 50000 meters (50 kilometers)
              type: 'lodging',
            };

            placesService.nearbySearch(
              nearbySearchRequest,
              (results, status, pagination) => {
                if (status === 'OK' && results.length > 0) {
                  const hotels = [];

                  for (let i = 0; i < Math.min(12, results.length); i++) {
                    const hotel = results[i];
                    const name = hotel.name;
                    const rating = hotel.rating;
                    const placeId = hotel.place_id;
                    if (!hotel['photos']) {
                      continue; // Skip this iteration if photos do not exist
                    }

                    const photoURL = hotel['photos'][0].getUrl({ maxWidth: 100 });

                    hotels.push(
                      <div key={placeId} className="hotel-class">
                        <div>
                          <img src={photoURL} alt={name} />
                        </div>
                        <h2>{name}</h2>
                        <div className="rating">Rating: {rating}</div>
                        <div className="booking">
                          <a href="#" onClick={() => bookHotel(placeId)}>
                            Book Now
                          </a>
                        </div>
                      </div>
                    );
                  }

                  if (pagination && pagination.hasNextPage) {
                    hotels.push(
                      <div key="load-more" className="load-more">
                        <p>
                          <a href="#" onClick={loadMore}>
                            Load More
                          </a>
                        </p>
                      </div>
                    );
                  }

                  setHotelResults(hotels);
                } else {
                  console.log('No hotels found.');
                }
              });
          } else {
            console.log('Failed to retrieve place details.');
          }
        });
      } else {
        console.log('Place not found.');
      }
    });
  };


  return (
    <div>
      <h1>Hotel Finder</h1>
      <h1>{placeInput}</h1>
      <div id="placeResults">{placeResults}</div>
      <div id="hotelResults">{hotelResults}</div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: apiKey
})(Hotels);