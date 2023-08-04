import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Episodios from "../pages/RickMortyPages/Episodios";
import Menu from "../components/Menu";
import Marvel from "../pages/Marvel/Marvel";
import Comics from "../pages/Marvel/Comics";
import MPersonajeDetail from "../pages/Marvel/MPersonajeDetail";
import ComicDetail from "../pages/Marvel/ComicDetail";
import RMPersonajeDetail from "../pages/RickMortyPages/RMPersonajeDetail";
import RMPersonajes from "../pages/RickMortyPages/RMPersonajes";
import RMLocation from "../pages/RickMortyPages/RMLocation";
import SuperHero from "../pages/SuperHero/SuperHero";
import Admin from "../pages/admin/Admin";
import Login from "../pages/admin/Login";
const Router = () => (
  
    <Routes>
      <Route path="/admin" element={ <Admin />}>
        <Route exact path="/admin/login" element={ <Login/>} />
      </Route>
      <Route path="/" element={ <Menu/> }>
        <Route exact path="/" element={ <Home/>} />
        <Route exact path="/home" element={ <Home/> } />
        <Route exact path="rickmorty/locations" element={ <RMLocation/>} />
        <Route exact path="rickmorty/personajes" element={ <RMPersonajes/>} />
        <Route exact path="rickmorty/personajes/:id" element={ <RMPersonajeDetail/>} />
        <Route exact path="rickmorty/episodes" element={ <Episodios/>} />
        <Route exact path="/marvel/comics" element={ <Comics/>}></Route>
        <Route exact path="/marvel/comics/:id" element={ <ComicDetail/>}></Route>
        <Route exact path="/marvel/personajes" element={ <Marvel/>}></Route>
        <Route exact path="/marvel/personajes/:id" element={ <MPersonajeDetail/>} />
        <Route exact path="/heroes" element={ <SuperHero/>} />
        <Route exact path="/notfound" element={ <NotFound/>} />
        <Route exact path="*" element={ <NotFound/>}></Route>
      </Route>
    </Routes>
    
);

export default Router;
