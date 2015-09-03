export default {
	occurances: 'multiple',
	hasMany : true,
	required: false,
	optionsKey : 'splashes',
	getDefaultOptions(){
		return [];
	},
	processor(icons,processor){
		return {
			splash: icons.map((icon) => {
				let {src,density,width,height,platform} = icon;
				return {
					'@': {
						src,
						density,
						width,
						height,
						platform
					}
				};
			})
		};
	}
};