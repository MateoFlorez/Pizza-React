import {Link, Outlet} from 'react-router-dom'

export default function PizzaLayout() {
  return (
    <div className='bg-gray-800 min-h-screen text-white text-center pt-4'>
      <Link to="/menu/1" title="Peperoni">Peperoni</Link>
      <br />
      <Link to="/menu/2" title="Cheese">Cheese</Link>
      <br />
      <Link to="/menu/new" title="New Pizza"></Link>
      <Outlet/>
    </div>
  );
}
