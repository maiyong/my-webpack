const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: () => [
        autoprefixer({
          browsers: [
            '>1%',
            'last 5 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
            'iOS >= 8',
            'Android >= 4',
          ],
        flexbox: 'no-2009',
        }),
      ],
};