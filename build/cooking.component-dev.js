var cooking = require('cooking');
var Components = require('../components-dev.json');
var config = require('./config');

 /*
 "pagination": "./packages/pagination/index.js",
 "dialog": "./packages/dialog/index.js",
 "autocomplete": "./packages/autocomplete/index.js",
 "dropdown": "./packages/dropdown/index.js",
 "dropdown-menu": "./packages/dropdown-menu/index.js",
 "dropdown-item": "./packages/dropdown-item/index.js",
 "menu": "./packages/menu/index.js",
 "submenu": "./packages/submenu/index.js",
 "menu-item": "./packages/menu-item/index.js",
 "menu-item-group": "./packages/menu-item-group/index.js",
 "input": "./packages/input/index.js",
 "input-number": "./packages/input-number/index.js",
 "radio": "./packages/radio/index.js",
 "radio-group": "./packages/radio-group/index.js",
 "radio-button": "./packages/radio-button/index.js",

 "checkbox-button": "./packages/checkbox-button/index.js",
 "checkbox-group": "./packages/checkbox-group/index.js",
 "switch": "./packages/switch/index.js",
 "select": "./packages/select/index.js",
 "option": "./packages/option/index.js",
 "option-group": "./packages/option-group/index.js",

 "button-group": "./packages/button-group/index.js",
 "table": "./packages/table/index.js",
 "table-column": "./packages/table-column/index.js",
 "date-picker": "./packages/date-picker/index.js",
 "time-select": "./packages/time-select/index.js",
 "time-picker": "./packages/time-picker/index.js",

 "tooltip": "./packages/tooltip/index.js",
 "message-box": "./packages/message-box/index.js",
 "breadcrumb": "./packages/breadcrumb/index.js",
 "breadcrumb-item": "./packages/breadcrumb-item/index.js",
 "form": "./packages/form/index.js",
 "form-item": "./packages/form-item/index.js",
 "tabs": "./packages/tabs/index.js",
 "tab-pane": "./packages/tab-pane/index.js",
 "tag": "./packages/tag/index.js",
 "tree": "./packages/tree/index.js",
 "alert": "./packages/alert/index.js",
 "notification": "./packages/notification/index.js",
 "slider": "./packages/slider/index.js",
 "loading": "./packages/loading/index.js",
 "icon": "./packages/icon/index.js",
 "row": "./packages/row/index.js",
 "col": "./packages/col/index.js",
 "upload": "./packages/upload/index.js",
 "progress": "./packages/progress/index.js",
 "spinner": "./packages/spinner/index.js",
 "message": "./packages/message/index.js",
 "badge": "./packages/badge/index.js",
 "card": "./packages/card/index.js",
 "rate": "./packages/rate/index.js",
 "steps": "./packages/steps/index.js",
 "step": "./packages/step/index.js",
 "carousel": "./packages/carousel/index.js",
 "scrollbar": "./packages/scrollbar/index.js",
 "carousel-item": "./packages/carousel-item/index.js",
 "collapse": "./packages/collapse/index.js",
 "collapse-item": "./packages/collapse-item/index.js",
 "cascader": "./packages/cascader/index.js",
 "color-picker": "./packages/color-picker/index.js",
 "transfer": "./packages/transfer/index.js"
 */
 
cooking.set({
  entry: Components,
  dist: './lib',
  clean: false,
  format: 'cjs',
  extends: ['vue2'],
  minimize: false,
  externals: config.externals,
  alias: config.alias
});

cooking.add('output.filename', '[name].js');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('vue.preserveWhitespace', false);
module.exports = cooking.resolve();