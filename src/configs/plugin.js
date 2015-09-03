export default {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'plugins',
	getDefaultOptions(){
		return [
			{
				name: 'cordova-plugin-whitelist',
				version: '1'
			}
		];
	},
	processor(plugins,processor){
		return {
			plugin: plugins.map((plugin) => {
				let {name,spec,version} = plugin;
				return {
					'@': {
						name,
						spec,
						version
					}
				}
			})
		};
	}
};