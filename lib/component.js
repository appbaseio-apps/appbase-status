"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactCollapsible = require("react-collapsible");

var _reactCollapsible2 = _interopRequireDefault(_reactCollapsible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollectionRender = function CollectionRender(_ref) {
	var element = _ref.element;

	var triggerElement = element.status ? _react2.default.createElement(
		"div",
		{ className: "my-collapsible-header row" },
		_react2.default.createElement(
			"div",
			{ className: "col s1" },
			_react2.default.createElement("i", { className: "fa fa-check greenC", "aria-hidden": "true" })
		),
		_react2.default.createElement(
			"div",
			{ className: "col s3" },
			_react2.default.createElement(
				"strong",
				null,
				element.name
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "col s4" },
			element.endpoint
		),
		_react2.default.createElement(
			"div",
			{ className: "col s2" },
			element.timestamp
		),
		_react2.default.createElement(
			"div",
			{ className: "col s2" },
			element.took
		)
	) : _react2.default.createElement(
		"div",
		{ className: "my-collapsible-header row" },
		_react2.default.createElement(
			"div",
			{ className: "col s1" },
			_react2.default.createElement("i", { className: "fa fa-times redC", "aria-hidden": "true" })
		),
		_react2.default.createElement(
			"div",
			{ className: "col s3" },
			_react2.default.createElement(
				"strong",
				null,
				element.name
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "col s4" },
			element.endpoint
		),
		_react2.default.createElement(
			"div",
			{ className: "col s2" },
			element.timestamp
		),
		_react2.default.createElement(
			"div",
			{ className: "col s2" },
			element.took
		)
	);

	return _react2.default.createElement(
		"div",
		{ className: "margin05" },
		_react2.default.createElement(
			_reactCollapsible2.default,
			{ trigger: triggerElement },
			_react2.default.createElement(
				"div",
				{ className: "my-collapsible-body" },
				_react2.default.createElement(
					"span",
					null,
					element.description
				)
			)
		)
	);
};

var CollectionListRender = function CollectionListRender(_ref2) {
	var list = _ref2.list;
	return _react2.default.createElement(
		"div",
		{ className: "collapsible" },
		list.map(function (t, index) {
			return _react2.default.createElement(CollectionRender, { element: t, key: index });
		})
	);
};

module.exports = {
	CollectionListRender: CollectionListRender
};