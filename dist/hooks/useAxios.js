"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = require("react");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useAxios = function useAxios(url) {
  let refetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const [isLoading, setIsLoading] = (0, _react.useState)(true);
  const [result, setData] = (0, _react.useState)({});
  const [isSuccess, setIsSuccess] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    async function fetchData() {
      try {
        setError("");
        const response = await _axios.default.get(url);
        setIsLoading(false);
        setData(response.data);
        setIsSuccess(true);
      } catch (err) {
        setIsLoading(false);
        setIsSuccess(false);
        setError(err);
      }
    }

    fetchData();
  }, [refetch, url]);
  return {
    isLoading,
    result,
    isSuccess,
    error
  };
};

var _default = useAxios;
exports.default = _default;