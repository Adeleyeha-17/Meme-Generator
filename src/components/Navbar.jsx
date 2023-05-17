import { useNavigate, useLocation } from "react-router-dom";
export default function Navbar(){
  const location = useLocation();
  const navigate = useNavigate();

  function pathRoute(route){
    return location.pathname == route ? "hover:text-black" : "hover:text-green"
  }
  return (
    <div>
    <nav className="sticky border-white text-white rounded-full border-2 lg:w-96 sm:w-96 py-2 mt-6 m-auto">
        <div>
          <ul className="flex cursor-pointer space-x-6 justify-center text-center">
            <li className={` ${pathRoute("/")}`} onClick={() => navigate("/")}>Home</li>
            <li className={` ${pathRoute("/projects")}`} onClick={() => navigate("/projects")}>Project</li>
            <li>Project</li>
            <li>Project</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}