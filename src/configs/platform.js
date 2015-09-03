import deepmerge from 'deepmerge';

export default {
	occurances: 'multiple',
	hasMany : true,
	required: false,
	optionsKey : 'platforms',
	getDefaultOptions(){
		return [
			{
				name: 'android',
				allowIntent: [
					'market:*'
				]
			},
			{
				name: 'ios',
				allowIntent: [
					'itms:*',
					'itms-apps:*'
				]
			}
		];
	},
	processor(platforms,processor){
		return {
			platform: platforms.map((platform) => {
				let {name,...others} = platform;
				return {
					'@' : {
						name : name
					},
					...processor(others)
				}
			})
		};
	}
};