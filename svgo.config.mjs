export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeDimensions", // Add this plugin to remove width and height
    },
    {
      name: "convertColors",
      params: {
        currentColor: true, // Replace colors with currentColor
      },
    },
  ],
};
