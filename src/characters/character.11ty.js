
exports.data = {
  layout: 'character.liquid',
  pagination: {
    data: "characters",
    size: 1,
    alias: 'character'
  },
  permalink: function (data) {
    return `/characters/${this.slug(data.character.name)}/`;
  },
};

exports.render = function ({ character }) {
  var f2 = function f2(d){
    Object.entries(d)
      .map(([key, val]) => (this[key] = val));
    return this;
  };
  f2(character);
  return `<p>Name: ${name}</p>
  <p>Gender: ${gender}</p>
  <p>Species: ${species}</p>
  <img src="${image}">`
};
