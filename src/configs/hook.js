export default {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'hooks',
	getDefaultOptions(){
		return [];
	},
	processor(hooks,processor){
		return {
			hook: hooks.map((hook) => {
				let {type,src} = hook;
				return {
					'@': {
						type,
						src
					}
				}
			})
		};
	}
};