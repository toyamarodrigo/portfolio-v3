webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/ProjectsList/ProjectsList.js":
/*!**********************************************************!*\
  !*** ./components/Projects/ProjectsList/ProjectsList.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_Rodrigo_Documents_dev_rt_codes_portfolio_v3_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "F:\\Rodrigo\\Documents\\dev\\rt-codes\\portfolio-v3\\client\\components\\Projects\\ProjectsList\\ProjectsList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_Rodrigo_Documents_dev_rt_codes_portfolio_v3_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function ProjectsList(_ref) {
  _s();

  var _this = this;

  var posts = _ref.posts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      mappedPosts = _useState[0],
      setMappedPosts = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (posts.length) {
      var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default()({
        projectId: "zxckf1jg",
        dataset: "production"
      });
      setMappedPosts(posts.map(function (post) {
        return _objectSpread(_objectSpread({}, post), {}, {
          mainImage: imgBuilder.image(post.mainImage)
        });
      }));
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: mappedPosts.length ? mappedPosts.map(function (post, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        w: {
          base: 340,
          sm: 500,
          md: 500,
          lg: 700
        },
        h: {
          sm: '100%',
          md: '100%',
          lg: '100%'
        },
        className: "project-list-card",
        paddingX: {
          md: 0,
          lg: 4
        },
        paddingY: {
          md: 0,
          lg: 8
        },
        flexDirection: {
          base: 'column-reverse',
          sm: 'column-reverse',
          md: 'column-reverse'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
          src: post.mainImage,
          alt: post.mainImage.name,
          position: {
            lg: 'absolute'
          },
          right: {
            lg: 0
          },
          bottom: {
            lg: 0
          },
          w: {
            md: '100%',
            lg: 450
          },
          h: {
            lg: 'auto'
          },
          backgroundSize: "cover",
          borderTopLeftRadius: {
            md: 25,
            lg: 25
          },
          borderBottomRightRadius: {
            md: 20
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
          paddingX: 6,
          paddingTop: {
            base: 8,
            sm: 8,
            md: 8,
            lg: 0
          },
          paddingBottom: {
            base: 8,
            sm: 8,
            md: 4
          },
          w: {
            md: '100%',
            lg: '50%'
          },
          h: {
            lg: '100%'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
            justifyContent: "center",
            marginLeft: 4,
            spacing: 4,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
              as: 'h3',
              children: post.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
              as: 'h5',
              children: "Tech used"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["HStack"], {
              justifyContent: "flex-start",
              flexWrap: "wrap",
              children: post.techUsed.map(function (tech, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
                  colorScheme: "pink",
                  paddingX: {
                    base: 1,
                    sm: 2,
                    md: 4,
                    lg: 4
                  },
                  marginY: 2,
                  children: tech
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["VStack"], {
              children: post.body.map(function (text) {
                return text.children.map(function (textChildren) {
                  return textChildren.text.length < 300 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
                    as: 'p',
                    color: "white",
                    marginBottom: 4,
                    children: textChildren.text
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 25
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
                    as: 'p',
                    color: "white",
                    marginBottom: 4,
                    children: ["".concat(textChildren.text.substring(0, 250)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                      color: "cyan",
                      size: "sm",
                      backgroundColor: "transparent",
                      paddingX: 0,
                      marginLeft: 1,
                      children: "More..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 25
                  }, _this);
                });
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
              direction: "row",
              w: "100%",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                href: post.buttonDemo,
                as: "".concat(post.buttonDemo),
                passHref: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Link"], {
                  w: "50%",
                  isExternal: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                    w: "100%",
                    colorScheme: "pink",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Search2Icon"], {
                      marginRight: 2
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
                      lineHeight: "3",
                      children: "View"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 19
              }, _this), post.buttonCode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                href: post.buttonCode,
                as: "".concat(post.buttonCode),
                passHref: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Link"], {
                  w: "50%",
                  isExternal: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                    w: "100%",
                    colorScheme: "blackAlpha",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
                      as: _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"],
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCode"],
                      marginRight: 2
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
                      lineHeight: "3",
                      children: "Code"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 21
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, _this);
    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "LOADING.."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

_s(ProjectsList, "g1Mdnvu5jHWt4ropjKFPig817wU=");

_c = ProjectsList;

var _c;

$RefreshReg$(_c, "ProjectsList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0LmpzIl0sIm5hbWVzIjpbIlByb2plY3RzTGlzdCIsInBvc3RzIiwidXNlU3RhdGUiLCJtYXBwZWRQb3N0cyIsInNldE1hcHBlZFBvc3RzIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiaW1nQnVpbGRlciIsIkltYWdlVXJsQnVpbGRlciIsInByb2plY3RJZCIsInByb2Nlc3MiLCJkYXRhc2V0IiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9EQVRBU0VUIiwibWFwIiwicG9zdCIsIm1haW5JbWFnZSIsImltYWdlIiwiaW5kZXgiLCJiYXNlIiwic20iLCJtZCIsImxnIiwibmFtZSIsInRpdGxlIiwidGVjaFVzZWQiLCJ0ZWNoIiwiYm9keSIsInRleHQiLCJjaGlsZHJlbiIsInRleHRDaGlsZHJlbiIsInN1YnN0cmluZyIsImJ1dHRvbkRlbW8iLCJidXR0b25Db2RlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFlBQVQsT0FBaUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsRUFBRCxDQURBO0FBQUEsTUFDdkNDLFdBRHVDO0FBQUEsTUFDMUJDLGNBRDBCOztBQUc5Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUosS0FBSyxDQUFDSyxNQUFWLEVBQWtCO0FBQ2hCLFVBQU1DLFVBQVUsR0FBR0Msd0RBQWUsQ0FBQztBQUNqQ0MsaUJBQVMsRUFBRUMsVUFEc0I7QUFFakNDLGVBQU8sRUFBRUQsWUFBdUNFO0FBRmYsT0FBRCxDQUFsQztBQUtBUixvQkFBYyxDQUNaSCxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFDQyxJ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QixJQUFJLENBQUNrQixVQUFWLENBRko7QUFHRSx3QkFBUSxNQUhWO0FBQUEsdUNBS0UscUVBQUMscURBQUQ7QUFBTSxtQkFBQyxFQUFDLEtBQVI7QUFBYyw0QkFBVSxNQUF4QjtBQUFBLHlDQUNFLHFFQUFDLHVEQUFEO0FBQVEscUJBQUMsRUFBQyxNQUFWO0FBQWlCLCtCQUFXLEVBQUMsWUFBN0I7QUFBQSw0Q0FDRSxxRUFBQyxxREFBRDtBQUNFLHdCQUFFLEVBQUVDLDhFQUROO0FBRUUsMEJBQUksRUFBRUMsd0VBRlI7QUFHRSxpQ0FBVyxFQUFFO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQU1FLHFFQUFDLHFEQUFEO0FBQU0sZ0NBQVUsRUFBQyxHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxHQWlCRyxJQS9CTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJGO0FBQUEsU0FjT2pCLEtBZFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBaEIsQ0FERCxnQkFtSEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwSEosbUJBREY7QUF5SEQ7O0dBOUl1QmpCLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWNjMjE0MzNkNDhjODZkYjI2MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTZWFyY2gySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIFN0YWNrLFxyXG4gIEltYWdlLFxyXG4gIFRleHQsXHJcbiAgQmFkZ2UsXHJcbiAgSFN0YWNrLFxyXG4gIFZTdGFjayxcclxuICBJY29uLFxyXG4gIEJ1dHRvbixcclxuICBMaW5rLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUNvZGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgSW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0c0xpc3QoeyBwb3N0cyB9KSB7XHJcbiAgY29uc3QgW21hcHBlZFBvc3RzLCBzZXRNYXBwZWRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocG9zdHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGltZ0J1aWxkZXIgPSBJbWFnZVVybEJ1aWxkZXIoe1xyXG4gICAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCxcclxuICAgICAgICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0RBVEFTRVQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0TWFwcGVkUG9zdHMoXHJcbiAgICAgICAgcG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wb3N0LFxyXG4gICAgICAgICAgICBtYWluSW1hZ2U6IGltZ0J1aWxkZXIuaW1hZ2UocG9zdC5tYWluSW1hZ2UpLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHttYXBwZWRQb3N0cy5sZW5ndGggPyAoXHJcbiAgICAgICAgbWFwcGVkUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezIwfVxyXG4gICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXHJcbiAgICAgICAgICAgIHc9e3sgYmFzZTogMzQwLCBzbTogNTAwLCBtZDogNTAwLCBsZzogNzAwIH19XHJcbiAgICAgICAgICAgIGg9e3sgc206ICcxMDAlJywgbWQ6ICcxMDAlJywgbGc6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWxpc3QtY2FyZFwiXHJcbiAgICAgICAgICAgIHBhZGRpbmdYPXt7IG1kOiAwLCBsZzogNCB9fVxyXG4gICAgICAgICAgICBwYWRkaW5nWT17eyBtZDogMCwgbGc6IDggfX1cclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17e1xyXG4gICAgICAgICAgICAgIGJhc2U6ICdjb2x1bW4tcmV2ZXJzZScsXHJcbiAgICAgICAgICAgICAgc206ICdjb2x1bW4tcmV2ZXJzZScsXHJcbiAgICAgICAgICAgICAgbWQ6ICdjb2x1bW4tcmV2ZXJzZScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5tYWluSW1hZ2V9XHJcbiAgICAgICAgICAgICAgYWx0PXtwb3N0Lm1haW5JbWFnZS5uYW1lfVxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXt7IGxnOiAnYWJzb2x1dGUnIH19XHJcbiAgICAgICAgICAgICAgcmlnaHQ9e3sgbGc6IDAgfX1cclxuICAgICAgICAgICAgICBib3R0b209e3sgbGc6IDAgfX1cclxuICAgICAgICAgICAgICB3PXt7IG1kOiAnMTAwJScsIGxnOiA0NTAgfX1cclxuICAgICAgICAgICAgICBoPXt7IGxnOiAnYXV0bycgfX1cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZT1cImNvdmVyXCJcclxuICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPXt7IG1kOiAyNSwgbGc6IDI1IH19XHJcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9e3sgbWQ6IDIwIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICAgIHBhZGRpbmdYPXs2fVxyXG4gICAgICAgICAgICAgIHBhZGRpbmdUb3A9e3sgYmFzZTogOCwgc206IDgsIG1kOiA4LCBsZzogMCB9fVxyXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b209e3sgYmFzZTogOCwgc206IDgsIG1kOiA0IH19XHJcbiAgICAgICAgICAgICAgdz17eyBtZDogJzEwMCUnLCBsZzogJzUwJScgfX1cclxuICAgICAgICAgICAgICBoPXt7IGxnOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdGFjayBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG1hcmdpbkxlZnQ9ezR9IHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgYXM9eydoMyd9Pntwb3N0LnRpdGxlfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGFzPXsnaDUnfT5UZWNoIHVzZWQ8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8SFN0YWNrIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiIGZsZXhXcmFwPVwid3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cG9zdC50ZWNoVXNlZC5tYXAoKHRlY2gsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJwaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdYPXt7IGJhc2U6IDEsIHNtOiAyLCBtZDogNCwgbGc6IDQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblk9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RlY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgICAgICAgIDxWU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgIHtwb3N0LmJvZHkubWFwKCh0ZXh0KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQuY2hpbGRyZW4ubWFwKCh0ZXh0Q2hpbGRyZW4pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hpbGRyZW4udGV4dC5sZW5ndGggPCAzMDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPXsncCd9IGNvbG9yPVwid2hpdGVcIiBtYXJnaW5Cb3R0b209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0Q2hpbGRyZW4udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9eydwJ30gY29sb3I9XCJ3aGl0ZVwiIG1hcmdpbkJvdHRvbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3RleHRDaGlsZHJlbi50ZXh0LnN1YnN0cmluZygwLCAyNTApfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJjeWFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nWD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZS4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9WU3RhY2s+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHc9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOZXh0TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3Bvc3QuYnV0dG9uRGVtb31cclxuICAgICAgICAgICAgICAgICAgICBhcz17YCR7cG9zdC5idXR0b25EZW1vfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHc9XCI1MCVcIiBpc0V4dGVybmFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3PVwiMTAwJVwiIGNvbG9yU2NoZW1lPVwicGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoMkljb24gbWFyZ2luUmlnaHQ9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIzXCI+VmlldzwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwb3N0LmJ1dHRvbkNvZGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwb3N0LmJ1dHRvbkNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz17YCR7cG9zdC5idXR0b25Db2RlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHc9XCI1MCVcIiBpc0V4dGVybmFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHc9XCIxMDAlXCIgY29sb3JTY2hlbWU9XCJibGFja0FscGhhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGb250QXdlc29tZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIzXCI+Q29kZTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICkpXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGgxPkxPQURJTkcuLjwvaDE+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=