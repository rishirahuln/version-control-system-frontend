import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/signout`, { withCredentials: true });
      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/home"} className="navbar-brand h1">
            <img src="../images/vcs_logo.jpg" alt="Logo" width="30" height="30" className="d-inline-block align-text-top mr-4"/>
            &nbsp;Version Control System
          </Link>
          <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
