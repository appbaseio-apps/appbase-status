"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHttpRequest = require("react-http-request");

var _reactHttpRequest2 = _interopRequireDefault(_reactHttpRequest);

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultAll = function (_Component) {
	_inherits(ResultAll, _Component);

	function ResultAll() {
		_classCallCheck(this, ResultAll);

		return _possibleConstructorReturn(this, (ResultAll.__proto__ || Object.getPrototypeOf(ResultAll)).apply(this, arguments));
	}

	_createClass(ResultAll, [{
		key: "render",
		value: function render() {
			var url = this.props.url;
			return _react2.default.createElement(
				"div",
				{ key: url },
				_react2.default.createElement(
					_reactHttpRequest2.default,
					{
						url: url,
						method: "get",
						accept: "application/json",
						verbose: false
					},
					function (_ref) {
						var error = _ref.error,
						    result = _ref.result,
						    loading = _ref.loading;

						if (loading) {
							return _react2.default.createElement(
								"div",
								{ className: "progress" },
								_react2.default.createElement("div", { className: "indeterminate" })
							);
						} else if (result) {
							var text = "";
							if (result.error === undefined || result.error === false) {
								text = JSON.parse(result.text);
							} else {
								error = result.error.stack;
							}

							return _react2.default.createElement(
								"div",
								{ key: url },
								_react2.default.createElement(
									"div",
									{ className: "redC" },
									error
								),
								text !== "" ? _react2.default.createElement(_component.CollectionListRender, { list: text }) : _react2.default.createElement("div", null)
							);
						}

						return _react2.default.createElement(
							"div",
							{ className: "redC" },
							"Error: check console for errors!"
						);
					}
				)
			);
		}
	}]);

	return ResultAll;
}(_react.Component);

exports.default = ResultAll;


ResultAll.propTypes = {
	url: _react2.default.PropTypes.string.isRequired
};

_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string]);