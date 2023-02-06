export const RecipeCategoryFilter = (data, searchItrem) => {
  return data?.items?.filter((item) => item?.category == searchItrem);
};

export const RecipeIdFilter = (data, id) => {
  return data?.items?.filter((item) => item?._id == id);
};
