import { Link } from "react-router-dom";

function Navbar () {
  return (
    <div className="bg-zinc-800 flex justify-between brightness-200 items-baseline py-2 px-10">
      <ul className="flex">
        <li className="text-indigo-600 px-5 py-1 text-2xl rounded-3xl hover:bg-zinc-900">
          <Link to= "/">Tareas</Link>
        </li>
        <li className="text-indigo-600 px-5 py-1 text-2xl rounded-3xl hover:bg-zinc-900">
          <Link to= "/new">Crear</Link>
        </li>
        {/* <li>
          <Link to="/tries"> Tries </Link>
        </li> */}
      </ul>
      <Link to="/">
        <h1 className="text-white font-semibold px-10 py-2 text-2xl rounded-3xl hover:bg-zinc-900">React & Mysql</h1>
      </Link>
    </div>
  )
}

export default Navbar