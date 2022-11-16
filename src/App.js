import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Pizza from "./components/Pizza";
import NewPizza from "./components/NewPizza";
import NotFound from "./components/NotFound";
import PizzaLayout from "./PizzaLayout";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<PizzaLayout />}>
          <Route index element={<Menu />}/>
          <Route path="/menu/:id" element={<Pizza />} />
          <Route path="/menu/new" element={<NewPizza />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
