import {Link, Outlet} from 'react-router-dom'

export default function PizzaLayout() {
  return (
    <>
      <Link to="/menu/1">Alemana</Link>
      <br />
      <Link to="/menu/2">Peperoni</Link>
      <br />
      <Link to="/menu/new">New Pizza</Link>
      <Outlet/>
    </>
  );
}
