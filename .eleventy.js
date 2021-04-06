module.exports = function(eleventyConfig) {
    eleventyConfig.setLiquidOptions({
        dynamicPartials: true,
    });

  // You can return your Config object (optional).
  return {
    dir: {
      input: 'src',
    },
  };
};