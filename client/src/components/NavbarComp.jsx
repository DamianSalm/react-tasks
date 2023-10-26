import { Link } from "react-router-dom";

function Navbar () {
  return (
    <div>
      <h1>Tasks App con React, Mysql, y Express</h1>
      <ul>
        <li>
          <Link to= "/"> Home </Link>
        </li>
        <li>
          <Link to= "/new"> Create Task!</Link>
        </li>
        <li>
          <Link to="/tries"> Tries </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar