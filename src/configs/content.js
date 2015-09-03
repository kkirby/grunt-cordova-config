export default {
	occurances: 'multiple',
	hasMany: false,
	required: true,
	optionsKey: 'content',
	getDefaultOptions(){
		return 'index.html';
	},
	processor(src,processor){
		return {
			content: {
				'@': {
					src
				}
			}
		};
	}
};