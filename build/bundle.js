/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Invoice.ts":
/*!************************!*\
  !*** ./src/Invoice.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Invoice": () => (/* binding */ Invoice)
/* harmony export */ });
class Invoice {
    constructor(date, details, amount) {
        this.date = date;
        this.details = details;
        this.amount = amount;
    }
    returnVal() {
        return `${this.date}: ${this.amount} is owed to ${this.details}`;
    }
}


/***/ }),

/***/ "./src/Remittance.ts":
/*!***************************!*\
  !*** ./src/Remittance.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Remittance": () => (/* binding */ Remittance)
/* harmony export */ });
class Remittance {
    constructor(date, details, amount) {
        this.date = date;
        this.details = details;
        this.amount = amount;
    }
    returnVal() {
        return `${this.date}: ${this.amount} received from ${this.details}`;
    }
}


/***/ }),

/***/ "./src/Ui.ts":
/*!*******************!*\
  !*** ./src/Ui.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Output": () => (/* binding */ Output)
/* harmony export */ });
class Output {
    constructor(container) {
        this.container = container;
    }
    render(item) {
        const li = document.createElement('li');
        const text = document.createElement('p');
        text.innerText = item.returnVal();
        li.append(text);
        this.container.prepend(li);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice */ "./src/Invoice.ts");
/* harmony import */ var _Remittance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Remittance */ "./src/Remittance.ts");
/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ui */ "./src/Ui.ts");



const invoiceDate = document.querySelector('.invoice-date');
const invoiceDetails = document.querySelector('.invoice-details');
const invoiceAmount = document.querySelector('.invoice-amount');
const invoiceForm = document.querySelector('.invoice-section');
const invoiceList = document.querySelector('.invoice-list');
const remittanceDate = document.querySelector('.remittance-date');
const remittanceDetails = document.querySelector('.remittance-details');
const remittanceAmount = document.querySelector('.remittance-amount');
const remittanceForm = document.querySelector('.remittance-section');
const remittanceList = document.querySelector('.remittance-list');
const invoiceOutput = new _Ui__WEBPACK_IMPORTED_MODULE_2__.Output(invoiceList);
const remittanceOutput = new _Ui__WEBPACK_IMPORTED_MODULE_2__.Output(remittanceList);
invoiceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [invoiceDate.valueAsNumber, invoiceDetails.value, invoiceAmount.valueAsNumber];
    let invoice = new _Invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice(...values);
    invoiceOutput.render(invoice);
    // console.log(invoiceDate.valueAsDate, invoiceDetails.value, invoiceAmount.valueAsNumber)
});
remittanceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [remittanceDate.valueAsNumber, remittanceDetails.value, remittanceAmount.valueAsNumber];
    let remittance = new _Remittance__WEBPACK_IMPORTED_MODULE_1__.Remittance(...values);
    remittanceOutput.render(remittance);
    // console.log(remitanceDate.valueAsDate, remitanceDetails.value, remitanceAmount.valueAsNumber)
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map