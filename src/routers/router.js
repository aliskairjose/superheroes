import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import RickMorty from "../pages/RickMorty";
import Marvel from "../pages/Marvel";
import Heroes from "../pages/Heroes";
import MarvelDetail from "../pages/MarvelDetail";
const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/home" element={<Home />}></Route>
    <Route exact path="/rickmorty" element={<RickMorty />}></Route>
    <Route exact path="/marvel" element={<Marvel />}></Route>
    <Route exact path="/marvel/:id" element={<MarvelDetail />}></Route>
    <Route exact path="/heroes" element={<Heroes />}></Route>
    <Route exact path="/notfound" element={<NotFound />}></Route>
    {/* <Route exact path="/user/:name" element={<User />}></Route> */}
    <Route exact element={<NotFound />}></Route>
  </Routes>
);

export default Router;
