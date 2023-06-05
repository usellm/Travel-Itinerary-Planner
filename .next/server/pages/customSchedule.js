"use strict";
(() => {
var exports = {};
exports.id = 191;
exports.ids = [191];
exports.modules = {

/***/ 1262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ customSchedule)
});

// EXTERNAL MODULE: ../../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3704);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/customSchedule.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-markdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'remark-gfm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'usellm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




// import './ScheduleGenerator.css';

const CustomSchedule = ()=>{
    const [startCity, setStartCity] = (0,external_react_.useState)("");
    const [endCity, setEndCity] = (0,external_react_.useState)("");
    const [startDate, setStartDate] = (0,external_react_.useState)("");
    const [endDate, setEndDate] = (0,external_react_.useState)("");
    const [response, setResponse] = (0,external_react_.useState)("");
    const llm = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'usellm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        serviceUrl: "https://usellm.org/api/llm"
    });
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
                        content: `Create an Itinerary for a trip from a source city to a destination city mentioned below and the dates are also mentioned below. Make sure to include the most beautiful yet safe places I can explore. Include a moderate amount of things to do since I also want some time to relax. Make a date wise itinerary in different tables. Also based on the trip you created, what will be the total expense of traveling around and just enjoying myself for just one person? Exclude hotel and flights. Finally create two different tables summarizing my final itinerary in detail, the entire budget, emergency numbers, customs, and safety. Keep the customs and safety brief \n """`
                    },
                    {
                        role: "user",
                        content: `Source City: ${startCity} Destination City: ${endCity} . From ${startDate} to ${endDate}. \n"""`
                    }
                ],
                stream: true,
                onStream: ({ message  })=>setResponse(message.content)
            });
        } catch (error) {
            console.error("Something went wrong!", error);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: "Travel Schedule Generator"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                        htmlFor: "startCity",
                        children: "Source City:"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "text",
                        id: "startCity",
                        name: "startCity",
                        required: true,
                        onChange: (e)=>setStartCity(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                        htmlFor: "endCity",
                        children: "Destination City:"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "text",
                        id: "endCity",
                        name: "endcity",
                        required: true,
                        onChange: (e)=>setEndCity(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                        htmlFor: "startDate",
                        children: "Start Date:"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "date",
                        id: "startDate",
                        name: "startDate",
                        required: true,
                        onChange: (e)=>setStartDate(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                        htmlFor: "endDate",
                        children: "End Date:"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "date",
                        id: "endDate",
                        name: "endDate",
                        required: true,
                        onChange: (e)=>setEndDate(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        type: "submit",
                        id: "myButton",
                        children: "Generate Schedule"
                    })
                ]
            }),
            response && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "markdown-container",
                children: /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-markdown'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    remarkPlugins: [
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'remark-gfm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                    ],
                    children: response
                })
            })
        ]
    });
};
/* harmony default export */ const customSchedule = (CustomSchedule);

;// CONCATENATED MODULE: ../../../../node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2FcustomSchedule&absolutePagePath=private-next-pages%2FcustomSchedule.js&preferredRegion=!

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
var __webpack_exports__ = __webpack_require__.X(0, [704], () => (__webpack_exec__(1262)));
module.exports = __webpack_exports__;

})();