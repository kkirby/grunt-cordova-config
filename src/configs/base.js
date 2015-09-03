export default {
	occurances: 'single',
	hasMany: false,
	required: true,
	getDefaultOptions(){
		return {
			id: 'com.example.hello',
			version: '0.0.1',
			name: 'HelloWorld',
			description: 'A sample Apache Cordova application that responds to the deviceready event.'
		};
	},
	processor(options,processor){
		let {id,version,name,description} = options;
		let result = {
			'@': {
				id,
				version,
				xmlns: 'http://www.w3.org/ns/widgets',
				'xmlns:cdv': 'http://cordova.apache.org/ns/1.0'
			},
			name,
			description
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