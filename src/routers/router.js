import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Episodios from "../pages/RickMortyPages/Episodios";
import Menu from "../components/Menu";
import Marvel from "../pages/Marvel/Marvel";
import Comics from "../pages/Marvel/Comics";
import MPersonajeDetail from "../pages/Marvel/MPersonajeDetail";
import ComicDetail from "../pages/Marvel/ComicDetail";
import RMPersonajes from "../pages/RickMortyPages/RMPersonajes";
import RMLocation from "../pages/RickMortyPages/RMLocation";
import SuperHero from "../pages/SuperHero/SuperHero";
import Login from "../pages/admin/Login";
import Register from "../pages/admin/Register";
import { SuperHeroeDetail } from "../pages/SuperHero/SuperHeroeDetail";
const Router = () => (
  
    <Routes>
      <Route path="/" element={ <Login />}>
        <Route exact path="/admin/login" element={ <Login/>} />
        <Route exact path="/admin/register" element={ <Register/>} />
        <Route exact path="*" element={ <Login/>}></Route>
      </Route>
      <Route path="/dashboard" element={ <Menu/> }>
        <Route exact path="/dashboard" element={ <Home/>} />
        <Route exact path="/dashboard/home" element={ <Home/> } />
        <Route exact path="/dashboard/rickmorty/locations" element={ <RMLocation/>} />
        <Route exact path="/dashboard/rickmorty/personajes" element={ <RMPersonajes/>} />
        <Route exact path="/dashboard/rickmorty/episodes" element={ <Episodios/>} />
        <Route exact path="/dashboard/marvel/comics" element={ <Comics/>}></Route>
        <Route exact path="/dashboard/marvel/comics/:id" element={ <ComicDetail/>}></Route>
        <Route exact path="/dashboard/marvel/personajes" element={ <Marvel/>}></Route>
        <Route exact path="/dashboard/marvel/personajes/:id" element={ <MPersonajeDetail/>} />
        <Route exact path="/dashboard/heroes" element={ <SuperHero/>} />
        <Route exact path="/dashboard/heroes/:id" element={ <SuperHeroeDetail/>} />
        <Route exact path="*" element={ <NotFound/>}></Route>
      </Route>
    </Routes>
    
);

export default Router;
