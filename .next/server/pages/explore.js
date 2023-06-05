"use strict";
(() => {
var exports = {};
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 3655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ explore)
});

// EXTERNAL MODULE: ../../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3704);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ../../../../node_modules/next/link.js
var next_link = __webpack_require__(3537);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/explore.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'usellm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





const Explore = ()=>{
    const [promptText, setPromptText] = (0,external_react_.useState)("");
    const [isSending, setIsSending] = (0,external_react_.useState)(false);
    const [sendSuccess, setSendSuccess] = (0,external_react_.useState)(false);
    const [sendError, setSendError] = (0,external_react_.useState)("");
    const [responseData, setResponseData] = (0,external_react_.useState)([]);
    const [showLinkButton, setShowLinkButton] = (0,external_react_.useState)(false);
    const prevResponseDataRef = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        prevResponseDataRef.current = responseData;
    }, [
        responseData
    ]);
    const llm = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'usellm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        serviceUrl: "https://usellm.org/api/llm"
    });
    const router = (0,router_.useRouter)();
    const handleSendMessage = async (event)=>{
        try {
            setIsSending(true);
            setSendSuccess(false);
            setSendError("");
            try {
                const { message  } = await llm.chat({
                    messages: [
                        {
                            role: "system",
                            content: "You are a travel agent. The user is describing the kind of place they will like to go and visit. They may or may not have a specific place in mind. Generate a list of 6 names of specific places like Bali, Indonesia, Kaziranga, Assam India separated by a |. Don't add any prefix or suffix to your response. Give only reponse asked in the format given above. If the user asks for something that has no suggestions give the reason of why his/her description does not lead to any places and ask to search for something else. Examples can be \n User: I want to go to places where there is a lot of snow. Your response: Aomori City|Sapporo|Toyama|Quebec City|Syracuse|Saguenay \n User: I want to visit beaches in Liechtenstein \n Your response: Liechtenstein is a landlocked country and does not have any beaches. Please try somrthing else. \n User: India \n Your response: New Delhi|Agra|Goa|Mumbai|Shimla|Manali"
                        },
                        {
                            role: "user",
                            content: 'I am looking for a place to go visit. Here is what I have in mind: \n """'
                        },
                        {
                            role: "user",
                            content: promptText + '. \n"""'
                        }
                    ]
                });
                setResponseData(message.content.split("|"));
            } catch (error) {
                console.error("Something went wrong!", error);
            }
            setIsSending(false);
            setSendSuccess(true);
            setPromptText("");
            setShowLinkButton(true);
            sessionStorage.setItem("responseData", JSON.stringify(responseData));
        } catch (error) {
            console.error(error);
            setIsSending(false);
            setSendError("Failed to send message. Please try again.");
        }
    };
    const handlePlaceClick = (place)=>{
        router.push(`/scheduleGenerator/${place}`);
    };
    if (responseData.length === 1) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "explore-container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    children: "Explore"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "message-input",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-area",
                            children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                placeholder: "Enter your message",
                                value: promptText,
                                onChange: (e)=>setPromptText(e.target.value)
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "send-button",
                            disabled: isSending,
                            onClick: handleSendMessage,
                            children: isSending ? "Sending..." : "Send Message"
                        })
                    ]
                }),
                sendSuccess && /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "success-message",
                    children: "Message sent successfully!"
                }),
                sendError && /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "error-message",
                    children: sendError
                }),
                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                    children: responseData
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "explore-container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    children: "Explore"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "message-input",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-area",
                            children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                placeholder: "Enter your message",
                                value: promptText,
                                onChange: (e)=>setPromptText(e.target.value)
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "send-button",
                            disabled: isSending,
                            onClick: handleSendMessage,
                            children: isSending ? "Sending..." : "Send Message"
                        })
                    ]
                }),
                sendSuccess && /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "success-message",
                    children: "Message sent successfully!"
                }),
                sendError && /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "error-message",
                    children: sendError
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "cards-container",
                    children: responseData.slice(0, 6).map((place, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "card",
                            onClick: ()=>handlePlaceClick(place),
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "place-info",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    children: place
                                })
                            })
                        }, index))
                }),
                showLinkButton && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "link-button-container",
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/customSchedule",
                        className: "link-button",
                        children: "Go to Schedule Generator"
                    })
                })
            ]
        });
    }
};
/* harmony default export */ const explore = (Explore);

;// CONCATENATED MODULE: ../../../../node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fexplore&absolutePagePath=private-next-pages%2Fexplore.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [704,537], () => (__webpack_exec__(3655)));
module.exports = __webpack_exports__;

})();