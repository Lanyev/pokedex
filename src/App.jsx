import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import RouteProtected from "./components/RouteProtected";
import HomeProtected from "./components/HomeProtected";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeProtected />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RouteProtected />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
