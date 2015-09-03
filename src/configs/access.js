export default {
	occurances: 'multiple',
	hasMany : true,
	required: false,
	optionsKey : 'access',
	getDefaultOptions(){
		return [
			{
				origin : '*'
			}
		];
	},
	processor(options,processor){
		return {
			access: options.map((option) => {
				let {origin,launchExternal} = option;
				return {
					'@' : {
						origin,
						'launch-external': launchExternal
					}
				};
			})
		};
	}
};