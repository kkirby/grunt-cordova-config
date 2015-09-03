export default {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'features',
	getDefaultOptions(){
		return [];
	},
	processor(options,processor){
		return {
			feature: options.map((feature) => {
				let {name,params} = feature;
				return {
					'@': {
						name
					},
					param: (params || []).map((param) => {
						let {name,value,onload} = param;
						return {
							'@': {
								name,
								value,
								onload
							}
						};
					})
				};
			})
		};
	}
};