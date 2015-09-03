'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});
exports['default'] = {
   occurances: 'multiple',
   hasMany: true,
   required: false,
   optionsKey: 'access',
   getDefaultOptions: function getDefaultOptions() {
      return [{
         origin: '*'
      }];
   },
   processor: function processor(options, _processor) {
      return {
         access: options.map(function (option) {
            var access = {
               '@': {
                  origin: option.origin
               }
            };
            if (!!option['launch-external']) {
               access['@']['launch-external'] = option['launch-external'];
            }
            return access;
         })
      };
   }
};
module.exports = exports['default'];