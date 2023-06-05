"use strict";
(() => {
var exports = {};
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 6129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ _place_)
});

// EXTERNAL MODULE: ../../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3704);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./pages/ScheduleGeneratorPage.js
var ScheduleGeneratorPage = __webpack_require__(3265);
;// CONCATENATED MODULE: ./pages/scheduleGenerator/[place].js




const Place = ()=>{
    const router = (0,router_.useRouter)();
    const { place  } = router.query;
    return /*#__PURE__*/ jsx_runtime.jsx(ScheduleGeneratorPage/* default */.Z, {
        endCity: place
    });
};
/* harmony default export */ const _place_ = (Place);

;// CONCATENATED MODULE: ../../../../node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2FscheduleGenerator%2F%5Bplace%5D&absolutePagePath=private-next-pages%2FscheduleGenerator%2F%5Bplace%5D.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [704,265], () => (__webpack_exec__(6129)));
module.exports = __webpack_exports__;

})();