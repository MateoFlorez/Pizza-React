import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Pizza from "./components/Pizza";
import NewPizza from "./components/NewPizza";
import NotFound from "./components/NotFound";
import PizzaLayout from "./PizzaLayout";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<PizzaLayout />}>
          <Route index element={<Menu />} />
          <Route path="/menu/:id" element={<Pizza />} />
          <Route path="/menu/new" element={<NewPizza />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
