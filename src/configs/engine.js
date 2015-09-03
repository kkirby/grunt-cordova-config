export default {
	occurances: 'single',
	hasMany: true,
	required: false,
	optionsKey: 'engines',
	getDefaultOptions(){
		return [];
	},
	processor(engines,processor){
		return {
			engine: engines.map((engine) => {
				let {name,spec} = engine;
				return {
					'@': {
						name,
						spec
					}
				}
			})
		};
	}
};