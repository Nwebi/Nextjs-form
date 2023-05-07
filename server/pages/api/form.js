"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    // get data submitted in request's body 
    const body = req.body;
    console.log("body: ", body);
    // guard clause checks for first and last name,returns early if they are not found
    if (!body.first || !body.last) {
        //sends a http bad request error code
        return res.status(400).json({
            data: "First or Last name not found"
        });
    }
    // found the name, send a http success code
    res.status(200).json({
        data: `${body.first} ${body.last}`
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(173));
module.exports = __webpack_exports__;

})();