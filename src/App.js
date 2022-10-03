import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import "./style/App.css";
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/breakfast" element={<BreakFast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/:recipeId" element={<Recipe1 />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
