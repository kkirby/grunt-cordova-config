export default {
	occurances: 'multiple',
	hasMany : true,
	required: false,
	optionsKey : 'icons',
	getDefaultOptions(){
		return [];
	},
	processor(icons,processor){
		return {
			icon: icons.map((icon) => {
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