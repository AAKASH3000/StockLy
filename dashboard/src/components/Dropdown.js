import { Link } from "react-router-dom";
import './Dropdown.css';


function DropDown({Logout}) {
  return (
    <div className="dropdown">
      <ul>
        <li>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <i className="fa fa-address-card-o"></i> Profile
          </Link>
        </li>

        <li>
          <Link to="/account" style={{ textDecoration: "none" }}>
            <i className="fa fa-user"></i> Account
          </Link>
        </li>

        <li>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <i className="fa fa-cog"></i> Setting
          </Link>
        </li>

        <li>
          <Link to="/logout" style={{ textDecoration: "none" }} onClick={Logout}>
            <i className="fa fa-sign-out"></i> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
