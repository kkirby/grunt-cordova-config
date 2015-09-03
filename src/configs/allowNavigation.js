export default {
	occurances: 'multiple',
	hasMany : true,
	required: false,
	optionsKey : 'allowNavigation',
	getDefaultOptions(){
		return [];
	},
	processor(options,processor){
		return {
			'allow-navigation': options.map((href) => {
				return {
					'@': {
						href
					}
				};
			})
		};
	}
};