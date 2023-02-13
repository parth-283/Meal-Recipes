import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import "./style/global.css";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Dinner from "./component/Dinner";
import BreakFast from "./component/BreakFast";
import Lunch from "./component/Lunch";
import Dessert from "./component/Dessert";
import Recipe from "./component/Recipe";
import Recipe1 from "./component/Recipe1";
import Error404 from "./component/Error404";
import Signup from "./component/Signup";
import SignIn from "./component/SignIn";

import { useCookies } from "react-cookie";
import { useEffect } from "react";
import ProtectedRoute from "./component/Routing/ProtectedRoute";
import PublicRoute from "./component/Routing/PublicRoute";
import Profile from "./component/Profile";
import AddRecipes from "./component/AddRecipes";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();

  // useEffect(() => {
  //   console.log("====================================");
  //   console.log("cookiessss", cookies);
  //   console.log("====================================");
  // }, [cookies]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Header cookies={cookies} removeCookie={removeCookie} />}
        >
          <Route element={<ProtectedRoute cookies={cookies} />}>
            <Route path="/profile"  element={<Profile cookies={cookies} />} />
          </Route>
          <Route element={<PublicRoute cookies={cookies} />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn setCookie={setCookie} />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/breakfast" element={<BreakFast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/addrecipe" element={<AddRecipes />} />
          <Route path="/recipe/:recipeId" element={<Recipe1 />} />

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
