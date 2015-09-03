export default {
	occurances: 'single',
	hasMany: false,
	required: true,
	optionsKey: 'author',
	getDefaultOptions(){
		return {
			email: 'dev@callback.apache.org',
			name: 'Apache Cordova Team',
			href: 'http://cordova.io'
		};
	},
	processor(options,processor){
		let {email,href,name} = options;
		return {
			author: {
				'@': {
					email,
					href
				},
				'#': name
			}
		}
	}
};