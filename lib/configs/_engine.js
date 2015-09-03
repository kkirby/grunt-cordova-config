'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});
exports['default'] = {
   occurances: 'multiple',
   hasMany: true,
   required: false,
   optionsKey: 'engines',
   getDefaultOptions: function getDefaultOptions() {
      return false;
   },
   processor: function processor(engines, _processor) {
      return {
         engine: engines.map(function (engine) {
            var name = engine.name;
            var spec = engine.spec;

            return {
               '@': {
                  name: name,
                  spec: spec
               }
            };
         })
      };
   }
};
module.exports = exports['default'];