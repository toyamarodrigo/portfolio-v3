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
          lg: 600
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
          md: 'column-reverse',
          lg: 'column-reverse'
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
          lineNumber: 61,
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
              lineNumber: 81,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
              as: 'h5',
              children: "Tech used"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
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
                  lineNumber: 85,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
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
                    lineNumber: 99,
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
                      lineNumber: 105,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 25
                  }, _this);
                });
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
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
                      lineNumber: 128,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
                      lineHeight: "3",
                      children: "View"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
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
                      lineNumber: 142,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
                      lineHeight: "3",
                      children: "Code"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 21
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
      lineNumber: 158,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0LmpzIl0sIm5hbWVzIjpbIlByb2plY3RzTGlzdCIsInBvc3RzIiwidXNlU3RhdGUiLCJtYXBwZWRQb3N0cyIsInNldE1hcHBlZFBvc3RzIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiaW1nQnVpbGRlciIsIkltYWdlVXJsQnVpbGRlciIsInByb2plY3RJZCIsInByb2Nlc3MiLCJkYXRhc2V0IiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9EQVRBU0VUIiwibWFwIiwicG9zdCIsIm1haW5JbWFnZSIsImltYWdlIiwiaW5kZXgiLCJiYXNlIiwic20iLCJtZCIsImxnIiwibmFtZSIsInRpdGxlIiwidGVjaFVzZWQiLCJ0ZWNoIiwiYm9keSIsInRleHQiLCJjaGlsZHJlbiIsInRleHRDaGlsZHJlbiIsInN1YnN0cmluZyIsImJ1dHRvbkRlbW8iLCJidXR0b25Db2RlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFlBQVQsT0FBaUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsRUFBRCxDQURBO0FBQUEsTUFDdkNDLFdBRHVDO0FBQUEsTUFDMUJDLGNBRDBCOztBQUc5Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUosS0FBSyxDQUFDSyxNQUFWLEVBQWtCO0FBQ2hCLFVBQU1DLFVBQVUsR0FBR0Msd0RBQWUsQ0FBQztBQUNqQ0MsaUJBQVMsRUFBRUMsVUFEc0I7QUFFakNDLGVBQU8sRUFBRUQsWUFBdUNFO0FBRmYsT0FBRCxDQUFsQztBQUtBUixvQkFBYyxDQUNaSCxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFDQyxJ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LFVBRGI7QUFFRSxrQkFBRSxZQUFLbEIsSUFBSSxDQUFDa0IsVUFBVixDQUZKO0FBR0Usd0JBQVEsTUFIVjtBQUFBLHVDQUtFLHFFQUFDLHFEQUFEO0FBQU0sbUJBQUMsRUFBQyxLQUFSO0FBQWMsNEJBQVUsTUFBeEI7QUFBQSx5Q0FDRSxxRUFBQyx1REFBRDtBQUFRLHFCQUFDLEVBQUMsTUFBVjtBQUFpQiwrQkFBVyxFQUFDLFlBQTdCO0FBQUEsNENBQ0UscUVBQUMscURBQUQ7QUFDRSx3QkFBRSxFQUFFQyw4RUFETjtBQUVFLDBCQUFJLEVBQUVDLHdFQUZSO0FBR0UsaUNBQVcsRUFBRTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFNRSxxRUFBQyxxREFBRDtBQUFNLGdDQUFVLEVBQUMsR0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsR0FpQkcsSUEvQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRjtBQUFBLFNBZU9qQixLQWZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWhCLENBREQsZ0JBb0hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBckhKLG1CQURGO0FBMEhEOztHQS9JdUJqQixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk0ODg2M2M5N2I4MWM2NWY2Y2Q2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2VhcmNoMkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuaW1wb3J0IHtcclxuICBTdGFjayxcclxuICBJbWFnZSxcclxuICBUZXh0LFxyXG4gIEJhZGdlLFxyXG4gIEhTdGFjayxcclxuICBWU3RhY2ssXHJcbiAgSWNvbixcclxuICBCdXR0b24sXHJcbiAgTGluayxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFDb2RlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IEltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHNMaXN0KHsgcG9zdHMgfSkge1xyXG4gIGNvbnN0IFttYXBwZWRQb3N0cywgc2V0TWFwcGVkUG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBvc3RzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBpbWdCdWlsZGVyID0gSW1hZ2VVcmxCdWlsZGVyKHtcclxuICAgICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQsXHJcbiAgICAgICAgZGF0YXNldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVF9EQVRBU0VULFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldE1hcHBlZFBvc3RzKFxyXG4gICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucG9zdCxcclxuICAgICAgICAgICAgbWFpbkltYWdlOiBpbWdCdWlsZGVyLmltYWdlKHBvc3QubWFpbkltYWdlKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bWFwcGVkUG9zdHMubGVuZ3RoID8gKFxyXG4gICAgICAgIG1hcHBlZFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXsyMH1cclxuICAgICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICB3PXt7IGJhc2U6IDM0MCwgc206IDUwMCwgbWQ6IDUwMCwgbGc6IDYwMCB9fVxyXG4gICAgICAgICAgICBoPXt7IHNtOiAnMTAwJScsIG1kOiAnMTAwJScsIGxnOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1saXN0LWNhcmRcIlxyXG4gICAgICAgICAgICBwYWRkaW5nWD17eyBtZDogMCwgbGc6IDQgfX1cclxuICAgICAgICAgICAgcGFkZGluZ1k9e3sgbWQ6IDAsIGxnOiA4IH19XHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e3tcclxuICAgICAgICAgICAgICBiYXNlOiAnY29sdW1uLXJldmVyc2UnLFxyXG4gICAgICAgICAgICAgIHNtOiAnY29sdW1uLXJldmVyc2UnLFxyXG4gICAgICAgICAgICAgIG1kOiAnY29sdW1uLXJldmVyc2UnLFxyXG4gICAgICAgICAgICAgIGxnOiAnY29sdW1uLXJldmVyc2UnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3Bvc3QubWFpbkltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17cG9zdC5tYWluSW1hZ2UubmFtZX1cclxuICAgICAgICAgICAgICBwb3NpdGlvbj17eyBsZzogJ2Fic29sdXRlJyB9fVxyXG4gICAgICAgICAgICAgIHJpZ2h0PXt7IGxnOiAwIH19XHJcbiAgICAgICAgICAgICAgYm90dG9tPXt7IGxnOiAwIH19XHJcbiAgICAgICAgICAgICAgdz17eyBtZDogJzEwMCUnLCBsZzogNDUwIH19XHJcbiAgICAgICAgICAgICAgaD17eyBsZzogJ2F1dG8nIH19XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cz17eyBtZDogMjUsIGxnOiAyNSB9fVxyXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPXt7IG1kOiAyMCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICBwYWRkaW5nWD17Nn1cclxuICAgICAgICAgICAgICBwYWRkaW5nVG9wPXt7IGJhc2U6IDgsIHNtOiA4LCBtZDogOCwgbGc6IDAgfX1cclxuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tPXt7IGJhc2U6IDgsIHNtOiA4LCBtZDogNCB9fVxyXG4gICAgICAgICAgICAgIHc9e3sgbWQ6ICcxMDAlJywgbGc6ICc1MCUnIH19XHJcbiAgICAgICAgICAgICAgaD17eyBsZzogJzEwMCUnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3RhY2sganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtYXJnaW5MZWZ0PXs0fSBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGFzPXsnaDMnfT57cG9zdC50aXRsZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBhcz17J2g1J30+VGVjaCB1c2VkPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEhTdGFjayBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIiBmbGV4V3JhcD1cIndyYXBcIj5cclxuICAgICAgICAgICAgICAgICAge3Bvc3QudGVjaFVzZWQubWFwKCh0ZWNoLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwicGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nWD17eyBiYXNlOiAxLCBzbTogMiwgbWQ6IDQsIGxnOiA0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5ZPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0ZWNofVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8VlN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICB7cG9zdC5ib2R5Lm1hcCgodGV4dCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LmNoaWxkcmVuLm1hcCgodGV4dENoaWxkcmVuKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dENoaWxkcmVuLnRleHQubGVuZ3RoIDwgMzAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz17J3AnfSBjb2xvcj1cIndoaXRlXCIgbWFyZ2luQm90dG9tPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dENoaWxkcmVuLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPXsncCd9IGNvbG9yPVwid2hpdGVcIiBtYXJnaW5Cb3R0b209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHt0ZXh0Q2hpbGRyZW4udGV4dC5zdWJzdHJpbmcoMCwgMjUwKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiY3lhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1g9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvVlN0YWNrPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiB3PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TmV4dExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtwb3N0LmJ1dHRvbkRlbW99XHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e2Ake3Bvc3QuYnV0dG9uRGVtb31gfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB3PVwiNTAlXCIgaXNFeHRlcm5hbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdz1cIjEwMCVcIiBjb2xvclNjaGVtZT1cInBpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaDJJY29uIG1hcmdpblJpZ2h0PXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBsaW5lSGVpZ2h0PVwiM1wiPlZpZXc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cG9zdC5idXR0b25Db2RlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxOZXh0TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cG9zdC5idXR0b25Db2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2Ake3Bvc3QuYnV0dG9uQ29kZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayB3PVwiNTAlXCIgaXNFeHRlcm5hbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3PVwiMTAwJVwiIGNvbG9yU2NoZW1lPVwiYmxhY2tBbHBoYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17Rm9udEF3ZXNvbWVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBsaW5lSGVpZ2h0PVwiM1wiPkNvZGU8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICApKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxoMT5MT0FESU5HLi48L2gxPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9