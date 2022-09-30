export const recipeGet = (setRecipeData) => {
  fetch("http://localhost:4500/recipe")
    .then((res) => res.json())
    .then((json) => {
      setRecipeData({
        items: json,
        isLoaded: true,
      });
    });
};
