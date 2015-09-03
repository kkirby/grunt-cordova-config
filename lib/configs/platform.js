'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'platforms',
	getDefaultOptions: function getDefaultOptions() {
		return [{
			name: 'android',
			allowIntent: ['market:*']
		}, {
			name: 'ios',
			allowIntent: ['itms:*', 'itms-apps:*']
		}];
	},
	processor: function processor(platforms, _processor) {
		return {
			platform: platforms.map(function (platform) {
				var name = platform.name;

				var others = _objectWithoutProperties(platform, ['name']);

				return _extends({
					'@': {
						name: name
					}
				}, _processor(others));
			})
		};
	}
};
module.exports = exports['default'];