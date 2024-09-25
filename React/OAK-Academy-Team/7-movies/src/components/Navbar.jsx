import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div>
      <ul className={styles.navWrapper}>
        {user?.name && <li>Welcome {user.name}</li>}
        <li>
          <NavLink to={"/"}>Movies</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
