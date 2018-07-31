var util = require('gulp-util');

var production = util.env.production || util.env.prod || false;
var destPath = 'dist';

var config = {
  env       : 'development',
  production: production,

  src: {
    root         : 'app',
    templates    : 'app/pug',
    templatesData: 'app/pug/data',
    pagelist     : 'app/index.yaml',
    sass         : 'app/sass',
    sassGen      : 'app/sass/generated',
    js           : 'app/js',
    img          : 'app/img',
    svg          : 'app/img/svg',
    icons        : 'app/icons',
    iconsPng     : 'app/icons',
    iconsSvg     : 'app/icons',
    iconsFont    : 'app/icons',
    fonts        : 'app/fonts',
    vendor       : 'app/vendor',
    php          : 'app/php',
    json         : 'app/json'
  },
  dest: {
    root  : destPath,
    html  : destPath,
    css   : destPath + '/css',
    js    : destPath + '/js',
    img   : destPath + '/img',
    fonts : destPath + '/fonts',
    vendor: destPath + '/vendor',
    php   : destPath + '/php',
    json  : destPath + '/json'
  },

  setEnv: function(env) {
    if (typeof env !== 'string') return;
    this.env = env;
    this.production = env === 'production';
    process.env.NODE_ENV = env;
  },

  logEnv: function() {
    util.log(
      'Environment:',
      util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
    );
  },

  errorHandler: require('./util/errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
