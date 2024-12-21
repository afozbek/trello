/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind CSS: Tailwind processes the CSS files using its utility-first classes.
    tailwindcss: {},

    // Autoprefixer: Automatically adds vendor prefixes to your CSS for better cross-browser support.
    autoprefixer: {},
    // PostCSS Preset Env: Automatically adds modern CSS features to your CSS.
    "postcss-preset-env": {},
    // Optionally, use cssnano for CSS minification (you may want to disable this in development).
    cssnano:
      process.env.NODE_ENV === "production" ? { preset: "default" } : false,
  },
};

export default config;
