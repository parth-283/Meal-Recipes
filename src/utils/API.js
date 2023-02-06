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

export const userGet = async (setUserData) => {
  await fetch("http://localhost:4500/user")
    .then((res) => res.json())
    .then((json) => {
      setUserData({
        items: json,
        isLoaded: true,
      });
    });
};

export const userSignUp = async (usersignUpData) => {
  var requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usersignUpData),
    redirect: "follow",
  };
  let Data;
  await fetch("http://localhost:4500/user/signup", requestOptions)
    .then((res) => res.json())
    .then((json) => {
      Data = {
        items: json,
        isLoaded: true,
      };
    });
  return Data;
};

export const userSignIn = async (userLoginData) => {
  var requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userLoginData),
    redirect: "follow",
  };
  let Data;
  await fetch("http://localhost:4500/user/signin", requestOptions)
    .then((res) => res.json())
    .then((json) => {
      Data = {
        items: json,
        isLoaded: true,
      };
    });
  return Data;
};

export const updateRecipeIds = async (userRecipeIds) => {
  var requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userRecipeIds),
    redirect: "follow",
  };
  let Data;
  await fetch("http://localhost:4500/user/addRecipeId", requestOptions)
    .then((res) => res.json())
    .then((json) => {
      Data = {
        items: json
      };
    });
  return Data;
};