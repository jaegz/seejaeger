module.exports = {
  siteMetadata: {
    title: 'Front End Web Developer Portfolio | chrisjaeger.me',
    description: `A collection of my latest front end development and design work. I help companies deliver impactful digital experiences.`,
    url: 'https://www.chrisjaeger.me',
    twitterUsername: '@seejaeger'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // {
    //   // keep as first gatsby-source-filesystem plugin for gatsby image support
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/static/img`,
    //     name: 'uploads',
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          // {
          //   resolve: 'gatsby-remark-relative-images',
          //   options: {
          //     name: 'uploads',
          //   },
          // },
          // {
          //   resolve: 'gatsby-remark-images',
          //   options: {
          //     maxWidth: 2048,
          //   },
          // },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-129211845-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        cookieDomain: "chrisjaeger.me",
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'chrisjaeger',
        short_name: 'chrisjaeger',
        description: 'Front End Web Developer Portfolio and Blog',
        start_url: '/',
        background_color: '#444444',
        theme_color: '#145314',
        display: 'minimal-ui',
        icon: 'src/img/cj-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
