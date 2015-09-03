export default {
	occurances: 'multiple',
	hasMany : true,
	required: false,
	optionsKey : 'allowIntent',
	getDefaultOptions(){
		return [
			'http://*/*',
			'https://*/*',
			'tel:*',
			'sms:*',
			'mailto:*',
			'geo:*'
		];
	},
	processor(options,processor){
		return {
			'allow-intent': options.map((href) => {
				return {
					'@': {
						href
					}
				};
			})
		};
	}
};