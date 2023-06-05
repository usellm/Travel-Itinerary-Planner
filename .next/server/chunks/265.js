"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3704);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-markdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'remark-gfm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'usellm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






const ScheduleGeneratorPage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { place  } = router.query;
    const [startCity, setStartCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const llm = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'usellm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        serviceUrl: "https://usellm.org/api/llm"
    });
    const setEndCity = (value)=>{
        // Update the endCity state
        setStartCity(value);
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        try {
            await llm.chat({
                messages: [
                    {
                        role: "system",
                        content: `You are a travel agent that helps users to plan their trip. Users will provide their source and destination place and start and end date for you to plan their trip. Start with a short description of the place that the user wants to visit so that he knows about the place. Don't add any prefix or suffix to your response. Generate your responses in markdown format, with proper heading and tables. Generates day wise schedule and Budget in tables.\n """`
                    },
                    {
                        role: "user",
                        content: `Create an Itinerary for a trip from a source city to a destination city mentioned below and the dates are also mentioned below. Make sure to include the most beautiful yet safe places I can explore. Include a moderate amount of things to do since I also want some time to relax. Make a date-wise itinerary in different tables. Also, based on the trip you created, what will be the total expense of traveling around and just enjoying myself for just one person? Exclude hotel and flights. Finally, create two different tables summarizing my final itinerary in detail, the entire budget, emergency numbers, customs, and safety. Keep the customs and safety brief \n """`
                    },
                    {
                        role: "user",
                        content: `Source City: ${startCity} Destination City: ${place}. From ${startDate} to ${endDate}. \n"""`
                    }
                ],
                stream: true,
                onStream: ({ message  })=>setResponse(message.content)
            });
        } catch (error) {
            console.error("Something went wrong!", error);
        }
    };
    const handleFindHotels = ()=>{
        const encodedEndCity = encodeURIComponent(place);
        router.push(`/hotels?endCity=${encodedEndCity}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Travel Schedule Generator"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "startCity",
                        children: "Source City:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        id: "startCity",
                        name: "startCity",
                        required: true,
                        onChange: (e)=>setStartCity(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "endCity",
                        children: "Destination City:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        id: "endCity",
                        name: "endCity",
                        required: true,
                        value: place || "",
                        disabled: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "startDate",
                        children: "Start Date:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "date",
                        id: "startDate",
                        name: "startDate",
                        required: true,
                        onChange: (e)=>setStartDate(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "endDate",
                        children: "End Date:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "date",
                        id: "endDate",
                        name: "endDate",
                        required: true,
                        onChange: (e)=>setEndDate(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        id: "myButton",
                        children: "Generate Schedule"
                    })
                ]
            }),
            response && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "markdown-container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-markdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    remarkPlugins: [
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'remark-gfm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                    ],
                    children: response
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "link-button-container padding-60",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: handleFindHotels,
                    className: "link-button",
                    id: "find-hotels-button",
                    children: "Find Hotels"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduleGeneratorPage);


/***/ })

};
;