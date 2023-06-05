"use strict";
(() => {
var exports = {};
exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 6578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ hotels)
});

// EXTERNAL MODULE: ../../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3704);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/hotels/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'google-maps-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



// import './Hotels.css'
const Hotels = (props)=>{
    const [hotelResults, setHotelResults] = (0,external_react_.useState)([]);
    const [placeResults, setPlaceResults] = (0,external_react_.useState)([]);
    const [placeInput, setPlaceInput] = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        const searchParams = new URLSearchParams(window.location.search);
        const endCity = searchParams.get("endCity");
        if (endCity) {
            setPlaceInput(endCity);
        }
        findHotels();
    }, [
        placeInput
    ]);
    const findHotels = ()=>{
        const geocoder = new props.google.maps.Geocoder();
        geocoder.geocode({
            address: placeInput
        }, (results, status)=>{
            if (status === "OK" && results.length > 0) {
                const place = results[0];
                const placeLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.formatted_address)}`;
                let placeAddress = place.formatted_address;
                const location = place.geometry.location;
                const map = new props.google.maps.Map(document.createElement("div"));
                const placesService = new props.google.maps.places.PlacesService(map);
                const request = {
                    placeId: place.place_id,
                    fields: [
                        "name",
                        "photos"
                    ]
                };
                placesService.getDetails(request, (place, status)=>{
                    if (status === "OK" && place) {
                        const photoURL = place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : "placeholder.jpg";
                        const placeID = place.name;
                        const places = [];
                        places.push(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "place",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: photoURL,
                                        alt: place.name,
                                        style: {
                                            width: "auto",
                                            maxHeight: "200px"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    children: [
                                        "Place: ",
                                        placeAddress
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: placeLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "View on Google Maps"
                                    })
                                })
                            ]
                        }, placeID));
                        setPlaceResults(places);
                        const nearbySearchRequest = {
                            location: location,
                            radius: 20000,
                            type: "lodging"
                        };
                        placesService.nearbySearch(nearbySearchRequest, (results, status, pagination)=>{
                            if (status === "OK" && results.length > 0) {
                                const hotels = [];
                                for(let i = 0; i < Math.min(6, results.length); i++){
                                    const hotel = results[i];
                                    const name = hotel.name;
                                    const rating = hotel.rating;
                                    const placeId = hotel.place_id;
                                    if (!hotel["photos"]) {
                                        continue; // Skip this iteration if photos do not exist
                                    }
                                    const photoURL = hotel["photos"][0].getUrl({
                                        maxWidth: 100
                                    });
                                    hotels.push(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "hotel-class",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: photoURL,
                                                    alt: name
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                children: name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "rating",
                                                children: [
                                                    "Rating: ",
                                                    rating
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "booking",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    onClick: ()=>bookHotel(placeId),
                                                    children: "Book Now"
                                                })
                                            })
                                        ]
                                    }, placeId));
                                }
                                if (pagination && pagination.hasNextPage) {
                                    hotels.push(/*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "load-more",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#",
                                                onClick: loadMore,
                                                children: "Load More"
                                            })
                                        })
                                    }, "load-more"));
                                }
                                setHotelResults(hotels);
                            } else {
                                console.log("No hotels found.");
                            }
                        });
                    } else {
                        console.log("Failed to retrieve place details.");
                    }
                });
            }
        });
    };
    const bookHotel = (placeId)=>{
        // Implement the booking functionality here
        const map = new props.google.maps.Map(document.createElement("div"));
        const placesService = new props.google.maps.places.PlacesService(map);
        const request = {
            placeId: placeId,
            fields: [
                "url"
            ]
        };
        placesService.getDetails(request, (place, status)=>{
            if (status === "OK" && place && place.url) {
                window.open(place.url, "_blank");
            } else {
                console.log("Failed to retrieve booking information.");
            }
        });
        console.log("Booking hotel with placeId:", placeId);
    };
    const loadMore = ()=>{
        const geocoder = new props.google.maps.Geocoder();
        geocoder.geocode({
            address: placeInput
        }, (results, status)=>{
            if (status === "OK" && results.length > 0) {
                const place = results[0];
                const location = place.geometry.location;
                const map = new props.google.maps.Map(document.createElement("div"));
                const placesService = new props.google.maps.places.PlacesService(map);
                const request = {
                    placeId: place.place_id,
                    fields: [
                        "name",
                        "photos"
                    ]
                };
                placesService.getDetails(request, (place, status)=>{
                    if (status === "OK" && place) {
                        const nearbySearchRequest = {
                            location: location,
                            radius: 50000,
                            type: "lodging"
                        };
                        placesService.nearbySearch(nearbySearchRequest, (results, status, pagination)=>{
                            if (status === "OK" && results.length > 0) {
                                const hotels = [];
                                for(let i = 0; i < Math.min(12, results.length); i++){
                                    const hotel = results[i];
                                    const name = hotel.name;
                                    const rating = hotel.rating;
                                    const placeId = hotel.place_id;
                                    if (!hotel["photos"]) {
                                        continue; // Skip this iteration if photos do not exist
                                    }
                                    const photoURL = hotel["photos"][0].getUrl({
                                        maxWidth: 100
                                    });
                                    hotels.push(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "hotel-class",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: photoURL,
                                                    alt: name
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                children: name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "rating",
                                                children: [
                                                    "Rating: ",
                                                    rating
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "booking",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    onClick: ()=>bookHotel(placeId),
                                                    children: "Book Now"
                                                })
                                            })
                                        ]
                                    }, placeId));
                                }
                                if (pagination && pagination.hasNextPage) {
                                    hotels.push(/*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "load-more",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#",
                                                onClick: loadMore,
                                                children: "Load More"
                                            })
                                        })
                                    }, "load-more"));
                                }
                                setHotelResults(hotels);
                            } else {
                                console.log("No hotels found.");
                            }
                        });
                    } else {
                        console.log("Failed to retrieve place details.");
                    }
                });
            } else {
                console.log("Place not found.");
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: "Hotel Finder"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: placeInput
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "placeResults",
                children: placeResults
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "hotelResults",
                children: hotelResults
            })
        ]
    });
};
/* harmony default export */ const hotels = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'google-maps-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    apiKey: "AIzaSyA5EFJgOfcfTtUqd_MtWEIdeiK0-N06f-4"
})(Hotels));

;// CONCATENATED MODULE: ../../../../node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fhotels&absolutePagePath=private-next-pages%2Fhotels%2Findex.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [704], () => (__webpack_exec__(6578)));
module.exports = __webpack_exports__;

})();