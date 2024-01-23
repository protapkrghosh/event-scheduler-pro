import { Link } from "react-router-dom";
import useContexts from "../hooks/useContexts";

const NavItem = () => {
  const { user } = useContexts();
  return (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/features"}>Features</Link>
      </li>
      <li>
        <Link to={"/solutions"}>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className=" ">
              Solutions
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow mt-4 bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Technology</a>
              </li>
              <li>
                <a>Technology</a>
              </li>
              <li>
                <a>Manufacturing</a>
              </li>
              <li>
                <a>Financial Services</a>
              </li>
              <li>
                <a>Retail</a>
              </li>
              <li>
                <a>Retail</a>
              </li>
            </ul>
          </div>
        </Link>
      </li>
      {user && (
        <li>
          <Link to={"/pricing"}>Pricing</Link>
        </li>
      )}
    </>
  );
};

export default NavItem;
