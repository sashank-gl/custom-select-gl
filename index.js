"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
        arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) &&
          (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (
          !_n &&
          null != _i["return"] &&
          ((_r = _i["return"]()), Object(_r) !== _r)
        )
          return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var CustomSelect = function CustomSelect(_ref) {
  var options = _ref.options,
    loadData = _ref.loadData,
    placeholder = _ref.placeholder,
    inputStyle = _ref.inputStyle,
    onSelect = _ref.onSelect;
  // Defining States

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedOption = _useState6[0],
    setSelectedOption = _useState6[1];
  var _useState7 = (0, _react.useState)(loadData),
    _useState8 = _slicedToArray(_useState7, 2),
    isDataLoaded = _useState8[0],
    setIsDataLoaded = _useState8[1];
  var _useState9 = (0, _react.useState)(placeholder),
    _useState10 = _slicedToArray(_useState9, 2),
    placeHolder = _useState10[0],
    setPlaceHolder = _useState10[1];

  // Defining Functions

  var toggleDropdown = function toggleDropdown() {
    setIsOpen(!isOpen);
  };
  var handleSearch = function handleSearch(event) {
    var value = event.target.value;
    setSearchTerm(value);
    console.log(value);
    if (value === "") {
      setIsDataLoaded(false);
    } else {
      setIsDataLoaded(true);
    }
  };
  var handleSelectedOption = function handleSelectedOption(option) {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };
  var filteredOptions = options.filter(function (option) {
    return option.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    null,
    /*#__PURE__*/ _react["default"].createElement(
      "div",
      {
        onClick: toggleDropdown,
        className: "cursor-pointer",
      },
      selectedOption ? selectedOption : "Choose an Option"
    ),
    isOpen &&
      /*#__PURE__*/ _react["default"].createElement(
        "div",
        null,
        /*#__PURE__*/ _react["default"].createElement("input", {
          type: "text",
          placeholder: placeholder,
          className: inputStyle,
          value: searchTerm,
          onChange: handleSearch,
        }),
        /*#__PURE__*/ _react["default"].createElement(
          "ul",
          null,
          loadData
            ? filteredOptions.map(function (option) {
                return /*#__PURE__*/ _react["default"].createElement(
                  "li",
                  {
                    key: option,
                    onClick: function onClick() {
                      return handleSelectedOption(option);
                    },
                  },
                  option
                );
              })
            : /*#__PURE__*/ _react["default"].createElement(
                _react["default"].Fragment,
                null,
                searchTerm === ""
                  ? /*#__PURE__*/ _react["default"].createElement(
                      "li",
                      null,
                      "No Options Found"
                    )
                  : filteredOptions.map(function (option) {
                      return /*#__PURE__*/ _react["default"].createElement(
                        "li",
                        {
                          key: option,
                          onClick: function onClick() {
                            return handleSelectedOption(option);
                          },
                        },
                        option
                      );
                    })
              )
        )
      )
  );
};
CustomSelect.defaultProps = {
  onSelect: null,
};
var _default = CustomSelect; // Instructions:
// options is the array of options that should be shown in the dropdown
// loadData:
//     if true: we can show the options before entering any search term
//     if false: options are shown only after entering a search term
exports["default"] = _default;
