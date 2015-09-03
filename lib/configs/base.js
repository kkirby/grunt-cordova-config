'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'single',
	hasMany: false,
	required: true,
	getDefaultOptions: function getDefaultOptions() {
		return {
			id: 'com.example.hello',
			version: '0.0.1',
			name: 'HelloWorld',
			description: 'A sample Apache Cordova application that responds to the deviceready event.'
		};
	},
	processor: function processor(options, _processor) {
		var id = options.id;
		var version = options.version;
		var name = options.name;
		var description = options.description;

		var result = {
			'@': {
				id: id,
				version: version,
				xmlns: 'http://www.w3.org/ns/widgets',
				'xmlns:cdv': 'http://cordova.apache.org/ns/1.0'
			},
			name: name,
			description: description
		};
		if (options.androidVersionCode) {
			result['@']['android-versionCode'] = options.androidVersionCode;
		}
		if (options.iosBundleVersion) {
			result['@']['ios-CFBundleVersion'] = options.iosBundleVersion;
		}
		return result;
	}
};
module.exports = exports['default'];