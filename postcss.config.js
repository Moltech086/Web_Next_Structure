module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 3, // enables modern CSS features safely
      features: {
        "nesting-rules": true // allow nesting like Sass
      }
    },
    autoprefixer: {}, // adds vendor prefixes
    cssnano: process.env.NODE_ENV === "production" ? { preset: "default" } : false
    
  },
};
