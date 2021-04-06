
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

exports.render = function (data) {
  const [pageInfo] = data.pagination.items;
  var f2 = function f2(d){
    Object.entries(d)
      .map(([key, val]) => (this[key] = val));
    return this;
  };
  f2(pageInfo);
  return `<p>Name: ${name}</p>
  <p>Gender: ${gender}</p>
  <p>Species: ${species}</p>
  <img src="${image}">`
};
