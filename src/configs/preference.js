export default {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'preferences',
	getDefaultOptions(){
		return [];
	},
	processor(preferences,processor){
		return {
			preference: preferences.map((preference) => {
				let {name,value} = preference;
				return {
					'@': {
						name,
						value
					}
				};
			})
		};
	}
};