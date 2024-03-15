console.log("feature");

const newFeature = () => {
  console.log("new feature added");
};

const movieFilter = (filter) => {
  console.log(filter);
};

const featureB = () => {
  console.log("feature B");
};

const addToCart = (obj) => {
  const cart = [...cart, obj];
  console.log(cart);
};
