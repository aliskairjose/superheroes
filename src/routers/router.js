import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import RickMorty from "../pages/RickMortyPages/Personajes";
import Marvel from "../pages/Marvel";
import Heroes from "../pages/Heroes";
import MarvelDetail from "../pages/MarvelDetail";
import Personajes from "../pages/RickMortyPages/Personajes";
import Episodios from "../pages/RickMortyPages/Episodios";
import Menu from "../components/Menu";
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="rickmorty/personajes" element={ <Personajes/>} />
        <Route exact path="rickmorty/episodes" element={ <Episodios/>} />
        <Route exact path="/marvel" element={ <Marvel/>}></Route>
        <Route exact path="/marvel/:id" element={ <MarvelDetail/>} />
        <Route exact path="/heroes" element={ <Heroes/>} />
        <Route exact path="/notfound" element={ <NotFound/>} />
        <Route exact path="*" element={ <NotFound/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
