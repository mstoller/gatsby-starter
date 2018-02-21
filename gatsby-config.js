const autoprefixer = require('autoprefixer');
const sorting = require('postcss-sorting');
const cssnano = require('cssnano');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    // strings
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // objects

    // GOOGLE FONTS
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'limelight',
          'source sans pro\:300,400,400i,700' // you can also specify font weights and styles
        ]
      }
    },

    // FAVICON
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        // The recommended size for the file is: 1500x1500px.
        logo: './src/img/logo.gif',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },

    // GOOGLE ANALYTICS
    // only gets added in production build
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'ga tracking script here',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      },
    },

    // SASS/POSTCSS CHAIN
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          autoprefixer(),
          sorting(
            {
              "properties-order": [
                "display",
                "margin",
                "padding",
                "border",
                "background",
                "color",
                "font-size"
              ]
            }
          ),
          cssnano()
        ],
        precision: 8, // SASS default: 5
      }
    }
  ],
};
